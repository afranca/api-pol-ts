import Footer from "./components/Footer";
import Header from "./components/Header";
import BoxList from "./components/BoxList";
import Message from "./components/Message";
import BoxNew from "./components/BoxNew";
import BoxFilter from "./components/BoxFilter";
import Axios from 'axios';
import React, {useState} from "react";
import BoxInput from "./components/BoxInput";

function App() {

  const [userList, setUserList] = useState([]);

  const fecthUsers = () =>{
    console.log('fecthing from database');
    Axios.get("http://localhost:3001/api/users").then( (response)=>{
      setUserList(response.data.Users)
    });
  }

  const createHandler = (user) =>{
    console.log('fecthing from database');
    Axios.post("http://localhost:3001/api/users", user).then( (response)=>{
      console.log(response.data);
      fecthUsers();
    });
  }


  return (
    <div className="App">
      <Header />

      <div id="container">
        <div class="shell">
          <Message text="Operation completed" type="success" />

          <div id="main">
            <div class="cl">&nbsp;</div>

            <div id="content">
              <BoxList items={userList}/>
              <BoxNew />
            </div>

            <div id="sidebar">
              <BoxFilter fetchFunction={fecthUsers}/>
              <BoxInput  onCreate={createHandler}/>
            </div>

            <div class="cl">&nbsp;</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
