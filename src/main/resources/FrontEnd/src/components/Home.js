import React, {useState,useEffect} from 'react'
import HomeMember from './HomeMember';
import EntryData from './EntryData';
import SaleForm from './SaleForm';
import  axios  from 'axios';

const Home = (props) =>{

    const [Edit,setEdit] = useState();
    const [Sale,setSale] = useState();
    const [companyRatio] = useState(0.5);
    const[img,setImg] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:3000/data.json').then(response =>{
            setImg(response.data)
            
            
        })
        
        console.log(img)
    },[])

    const handleRemove = (id) => {
        axios.post(`http://localhost:8080/property/delete/${id}`,"",{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
        .then(res=>{
            console.log(res)
            axios.get('http://localhost:8080/property/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
            .then(res => {
                props.setFilter(res.data)
            console.log(res)
        })
            .catch(err => {
            
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })

    }

    const handleEdit = (id) => {
     const memberEdit = props.filter.filter(item => id === item.id)[0]
     console.log(memberEdit);
        setEdit(<EntryData data={memberEdit} setAllData={props.setFilter} text={props.text}/>);
       
           
     
    
    }

    const handleSale= (id) => {
        const memberSale = props.filter.filter(item => id === item.id)[0]
        
        // setSale(<SaleForm id={memberSale.id} img={memberSale.img} text={props.text} realPrice= {companyRatio*memberSale.realPrice+memberSale.realPrice} />);
                
        setSale(<SaleForm  data={memberSale} setAllData={props.setAllData} text={props.text} />);
    }


    const typeClick = (id) => {
        if(props.text === "Delete"){
           handleRemove(id);
        }else if(props.text === "Edit"){
            handleEdit(id);
        }else if(props.text === "Sale"){
            handleSale(id);
        }
    }

    const mapping= (x) => {
            const members = x.map(member => <HomeMember
                    key={member.id}
                    id = {member.id}
                    img={img[member.id%10].img}
                    position={member.position}
                    numbrofstock={member.numbrofstock}
                    realPrice = {member.realPrice}
                    onclick = {() => typeClick(member.id)}
                    text = {props.text}
                />);
                
        return members
    }
    return(
            <div className="row">
                {Edit}
                {Sale}
                {mapping(props.filter)}
            </div>
    )
}
export default Home;

// import {Alert}from 'react-bootstrap';

    // const Alert1 = memberInfo.showMessage?  <Alert  variant='danger'>This is a alert—check it out!</Alert> : null;

    // useEffect(() => {
    //     axios.get('data.json')  //bublic file
    //         .then(response => setmemberInfo(response.data));
    // }, []);

            // axios.post('data',memberInfo)
        // .then(response => setmemberInfo(response.data))
        // .catch(error => {
        //     console.error('Something went wrong!', error);
        //   });;
    

        // axios.delete(`${URL}/${id}`).then(res => {
        //     const del = memberInfo.filter(item => id !== item.id)
        //     setmemberInfo(del)
        // }).catch((error) => console.log('Something went wrong!', error))