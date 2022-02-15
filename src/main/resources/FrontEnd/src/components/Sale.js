import React,{useState,useEffect} from "react";
import Search from "./Search";
import Home from './Home';
import { Container,Dropdown,FormControl } from "react-bootstrap";
import axios from "axios";

const Sale = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState([]);
    const [cities,setCities] = useState([]);
    // const URL = 'http://localhost:3000/data.json';
    const URLCity = 'http://localhost:3000/city.json';
    useEffect(() => {
            axios.get('http://localhost:8080/property/showall',{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} }).then(response =>{
                setData(response.data)
    })
  



        // axios.get(URL).then(response =>{
        //     setdata(response.data)   
        // })

        axios.get(URLCity).then(response =>{
            setCities(response.data)   
        })
    },[])



    const handleSelect =(value)=>{
        filter.splice(0, filter.length);
        if(value !== "All"){
            for (let index = 0; index < data.length; index++) {
                if(data[index].position === value)
                {
                    filter.push(data[index]) 
                }  
            }
            console.log(filter);
                setFilter(filter => [...filter])
        }else{
            setFilter([])
        }
    }

    return(
        <Container>
            <Search/>
            {/*    Dropdown   */}
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle  as={CustomToggle} id="dropdown-custom-components"> Filter </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                { cities.map(cityName => {
                    return <Dropdown.Item key={cityName.id} eventKey={cityName.city}>{cityName.city}</Dropdown.Item>
                })}
                </Dropdown.Menu>
            </Dropdown>
            <Home text="Sale" setAllData={setData} filter={(filter.length!==0 ) ? filter : data}/>
        </Container>
    );
}
export default Sale;


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span
            className="btn btn-primary mb-5"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </span>
    ));
    



    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
    
        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
            <FormControl
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder="The City Name ..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            
            <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
            </ul>
            </div>
        );
        },
    );
    
  
