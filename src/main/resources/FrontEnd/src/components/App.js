import React,{useState} from "react";
import EntryData from "./EntryData";
import DeleteData from "./DeleteData";
import EditData from './EditData';
import Sale from './Sale';
import Navigation  from "./Navigation";
import '../css/App.css'

import CreateUser from "./CreateUser";
import Message from "./user/Message";
import { BrowserRouter, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import TableAdditions from "./admin/TableAdditions";
import TableModifications from "./admin/TableModifications";
import parameters from "./admin/parameters";


const App = () => {

  // const users = {
  //   userName: "mohammed_ahmed",
  //   password: "12345678"
  // }

  // const admin = {
  //   userName: "mohammed_admin",
  //   password: "12345_admin"
  // }
  const [user,setUser] = useState({username:"",password:""});
  const [error] = useState({errorUserName:null,errorPassword:null});

  
  const Login = details => {
      console.log(details)
          setUser({
          username: details.username,
          password: details.password
        });
  }

  // const Login = details => {
  //     console.log(details);
  //     setError({errorUserName:null,errorPassword:null})
  //     if((details.userName === users.userName && details.password === users.password) || (details.userName === admin.userName && details.password === admin.password)){
  //       console.log("Logged in");
  //       setUser({
  //         userName: details.userName,
  //         password: details.password
  //       });
  //       }else if((details.userName !== users.userName && details.password !== users.password) && (details.userName !== admin.userName && details.password !== admin.password)){
  //         setError({errorUserName:<Alert severity="error">Username is incorrect</Alert>,errorPassword:<Alert severity="error">password is incorrect</Alert>})
  //       }else if((details.userName !== users.userName) && (details.userName !== admin.userName)){
  //       setError({errorUserName:<Alert severity="error">Username is incorrect</Alert>})
  //       }else if((details.password !== users.password) && (details.password !== admin.password)){
  //         setError({errorPassword:<Alert severity="error">password is incorrect</Alert>})
  //       }
  // }

  const Logout = () =>{
    setUser({username:"",password:""});
  }

return(
  <BrowserRouter>
    <div className="body">
          {
            (user.username !== "") ? (
              <div>
                    { 
                      (localStorage.getItem('role') !== "ROLE_ADMIN") ? (
                      <div><Navigation userName={user.username} Logout={Logout} isAdmin={false} /></div>
                      ):(<div><Navigation userName={user.username} Logout={Logout} isAdmin={true} /></div>)
                    }
                      <Route exact path="/"/>
                      <Route path="/EntryData" ><EntryData text="Entry"/></Route>
                      <Route path="/DeleteData" component={DeleteData}/>
                      <Route path="/EditData" component={EditData}/>
                      <Route path="/Sale" component={Sale}/>
                      <Route path="/CreateUser" component={CreateUser}/>
                      <Route path="/Message" component={Message}/>
                      <Route path="/TableAdditions" component={TableAdditions}/>
                      <Route path="/TableModifications" component={TableModifications}/>
                      <Route path="/parameters" component={parameters}/>
                      
            </div>): (
              <LoginForm Login={Login} error={error} />
            )
          }
    </div>
    </BrowserRouter>
)
}

export default App;
