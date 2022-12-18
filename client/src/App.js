import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import BoxList from "./components/List/BoxList";
import Message from "./components/Messages/Message";
import BoxNew from "./components/BoxEdit";
import BoxFilter from "./components/Filter/BoxFilter";
import Axios from 'axios';
import React, {useState} from "react";
import BoxInput from "./components/BoxInput";
import classes from './App.module.css';

function App() {

  const [userList, setUserList] = useState([]);
  const [filters, setFilters] = useState([]);

  const [displayBoxNew, setDisplayBoxNew] = useState(false);  

  const [user, setUser] = useState();

  const displayBoxNewHandler = () =>{
    setDisplayBoxNew(true);
  }

  const hideBoxNewHandler = () =>{
    setDisplayBoxNew(false);
  }

  const fecthUser = (id) =>{
    Axios.get("http://localhost:3001/api/users/"+id).then( (response)=>{
      console.log('fecthing single user from database:');
      console.log(response.data);
      setUser(response.data.user)
    });
  }
  const fecthUsers = (filts) =>{
    console.log('fecthing from database:'+filts);
    setFilters(filts);
    Axios.get("http://localhost:3001/api/users"+filts).then( (response)=>{
      setUserList(response.data.Users)
    });
  }

  const createHandler = (user) =>{
    console.log('fecthing from database');
    Axios.post("http://localhost:3001/api/users", user).then( (response)=>{
      console.log(response.data);
      fecthUsers(filters);
    });
  }

  const deleteItemHandler = (id) =>{
    console.log('deleting from database');
    Axios.delete("http://localhost:3001/api/users/"+id).then( (response)=>{
      console.log(response.data);
      fecthUsers(filters);
    });
  }

  return (
    <div className={classes.App}>
      <Header />

      <div id="container">
        <div className={classes.shell}>
          <Message text="Operation completed" type="success" />

          <div id="main">
            <div className={classes.cl}>&nbsp;</div>

            <div id="content">
              <BoxList items={userList} onDeleteItem={deleteItemHandler} onEditItem={fecthUser} 
              showModal={displayBoxNewHandler}              
              />

              { displayBoxNew && <BoxNew hideModal={hideBoxNewHandler}/>}
              
            </div>

            <div id="sidebar">
              <BoxFilter fetchFunction={fecthUsers}/>
              <BoxInput  onCreate={createHandler}/>
            </div>

            <div className={classes.cl}>&nbsp;</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
