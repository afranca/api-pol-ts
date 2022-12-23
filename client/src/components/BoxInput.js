import React, { useRef, useState } from "react";
import classes from "./BoxInput.module.css";

export default function BoxInput(props) {
  const nameRef = useRef("");
  const ageRef = useRef("");
  const roleRef = useRef("");
  const occupationRef = useRef("");

  const [nameValid, setNameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);
  const [roleValid, setRoleValid] = useState(true);
  const [occupationValid, setOccupationValid] = useState(true);
  

  const submitHanlder = (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let age = +ageRef.current.value;
    let role = roleRef.current.value;
    let occupation = occupationRef.current.value;

    if (name.trim().length < 1){      
      setNameValid(false);
    } else {      
      setNameValid(true);
    }

    if (age < 1){
      setAgeValid(false);            
    } else {      
      setAgeValid(true);
    }
    
    if (role.trim().length === 0 && occupation.length === 0) {      
      setRoleValid(false);
      setOccupationValid(false);            
    } else {
      setRoleValid(true);
      setOccupationValid(true);
    }

    if (!nameValid || !ageValid || !occupationValid || !roleValid){
      console.log("INVALID");
      return;
    }

    const user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      role: roleRef.current.value,
      occupation: occupationRef.current.value,
    };
    props.onSubmit(user);
    nameRef.current.value = "";
    ageRef.current.value = "";
    roleRef.current.value = "";
    occupationRef.current.value = "";
  };

  return (
    <div className={classes.box}>
      <div className={classes["box-head"]}>
        <h2>Add New</h2>
      </div>
      <div className={classes["box-content"]}>
        <div className={classes.cl}>&nbsp;</div>

        
          <form onSubmit={submitHanlder}>
          <div className={`${classes.sort} ${!nameValid && classes.invalid}`}>    
              <label className={classes.fieldLabel}>Name</label>
              <input                
                className={classes.field}
                type="text"
                id="name"
                ref={nameRef}
              />
            </div>
            <div className={`${classes.sort} ${!ageValid && classes.invalid}`}>              
              <label className={classes.fieldLabel}>Age</label>
              <input
                className={`${classes.field}`}
                type="text"
                id="age"
                ref={ageRef}
              />
            </div>
            <div className={`${classes.sort} ${!roleValid && classes.invalid}`}>   
              <label className={classes.fieldLabel}>Role</label>
              <input
                className={classes.field}
                type="text"
                id="role"
                ref={roleRef}
              />
            </div>
            <div className={`${classes.sort} ${!occupationValid && classes.invalid}`}>   
              <label className={classes.fieldLabel}>Occupation</label>
              <input
                className={classes.field}
                type="text"
                id="occupation"
                ref={occupationRef}
              />
            </div>
            <div className={classes.sort}>
              <button className={classes.button} type="submit">                
                Add New
              </button>
            </div>
          </form>
       
      </div>
    </div>
  );
}
