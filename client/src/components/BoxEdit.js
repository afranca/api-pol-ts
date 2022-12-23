import React, { useRef, useEffect } from "react";
import Modal from "./UI/Modal";
import classes from "./BoxEdit.module.css";

export default function BoxEdit(props) {
  //const fieldSize1 = `classes.field classes.size1`;

  const nameRef = useRef(props.data.name);
  const ageRef = useRef(props.data.age);
  const roleRef = useRef(props.data.role);
  const occupationRef = useRef(props.data.occupation);

  useEffect(() => {
    console.log("Use Effect");
    nameRef.current.value = props.data.name;
    ageRef.current.value = props.data.age;
    roleRef.current.value = props.data.role;
    occupationRef.current.value = props.data.occupation;    
  }, []);

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    const enteredRole = roleRef.current.value;
    const enteredOccupation = occupationRef.current.value;
    
    const user = {
      id: props.data.id,
      name: enteredName,
      age: enteredAge,
      role: enteredRole,
      occupation: enteredOccupation

    }
    //console.log(user);
    props.onUpdate(user);
  }

  return (
    <Modal onClose={props.hideModal}>
      <div className={classes.box}>
        <div className={classes["box-head"]}>
          <h2>User</h2>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.form}>
            <p>
              <label>
                Name<span>(Required)</span>
              </label>
              <input
                type="text"
                id="name"
                className={classes.field}
                ref={nameRef}
              />
            </p>
            <p>
              <label>
                Age<span>(Required)</span>
              </label>
              <input
                type="text"
                id="age"
                className={classes.field}
                ref={ageRef}
              />
            </p>
            <p>
              <label>
                Role<span>(Optional)</span>
              </label>
              <input
                type="text"
                id="role"
                className={classes.field}
                ref={roleRef}
              />
            </p>
            <p>
              <label>
                Occupation<span>(Optional)</span>
              </label>
              <input
                type="text"
                id="occupation"
                className={classes.field}
                ref={occupationRef}
              />
            </p>

          </div>
          <div className={classes.buttons}>            
            <button onClick={props.hideModal} className={classes.button}>Close</button>
            <button type="submit" onSubmit={props.hideModal} className={classes.button}>Submit</button>            
          </div>
        </form>
      </div>
      
    </Modal>
  );
}
