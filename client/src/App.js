import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import BoxList from "./components/List/BoxList";
//import Message from "./components/Messages/Message";
import BoxEdit from "./components/BoxEdit";
import BoxFilter from "./components/Filter/BoxFilter";
import Axios from "axios";
import React, { useState } from "react";
import BoxInput from "./components/BoxInput";
import classes from "./App.module.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [filters, setFilters] = useState([]);

  const [displayBoxEdit, setDisplayBoxEdit] = useState(false);

  const [user, setUser] = useState({name: '', age: 0, occupation: '', role: ''});

  const displayBoxEditHandler = () => {
    setDisplayBoxEdit(true);
  };

  const hideBoxEditHandler = () => {
    setDisplayBoxEdit(false);
  };

  const fetchSingleItem = (id) => {
    Axios.get("http://localhost:3001/api/users/" + id).then((response) => {
      console.log("fetching Single user from database:");
      console.log(response.data);
      setUser(response.data.user);
      displayBoxEditHandler();
    });
  };
  const fetchListItems = (filts) => {
    console.log("fetching List from database:" + filts);
    setFilters(filts);
    Axios.get("http://localhost:3001/api/users" + filts).then((response) => {
      setUserList(response.data.Users);
    });
  };

  const createHandler = (user) => {
    console.log("fetching from database");
    Axios.post("http://localhost:3001/api/users", user).then((response) => {
      console.log(response.data);
      fetchListItems(filters);      
    });
  };

  const deleteItemHandler = (id) => {
    console.log("deleting from database");
    Axios.delete("http://localhost:3001/api/users/" + id).then((response) => {
      console.log(response.data);
      fetchListItems(filters);
    });
  };

  const updateItemHandler = (user) => {
    console.log("updating the database");
    console.log(user);
    Axios.patch("http://localhost:3001/api/users/"+ user.id, user).then((response) => {
      console.log(response.data);
      fetchListItems(filters);
      hideBoxEditHandler();
    });    
  };  

  return (
    <div className={classes.App}>
      <Header />

      <div id="container">
        <div className={classes.shell}>
          <div id="main">
            <div className={classes.cl}>&nbsp;</div>
            <div id="content">
              <BoxList
                items={userList}
                onDeleteItem={deleteItemHandler}
                onEditItem={fetchSingleItem}
                showModal={displayBoxEditHandler}
              />

              {displayBoxEdit && <BoxEdit hideModal={hideBoxEditHandler} data={user} onUpdate={updateItemHandler}/>}
            </div>

            <div id="sidebar">
              <BoxFilter fetchFunction={fetchListItems} />
              <BoxInput onCreate={createHandler} />
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
