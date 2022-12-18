import React, {useRef} from "react";
import classes from "./BoxInput.module.css";

export default function BoxInput(props) {

  const nameRef = useRef('');
  const ageRef = useRef('');
  const roleRef = useRef('');
  const occupationRef = useRef('');
  
  const submitHanlder = (event) =>{
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      role: roleRef.current.value,
      occupation: occupationRef.current.value
    }
    props.onCreate(user)
    nameRef.current.value='';
    ageRef.current.value='';
    roleRef.current.value='';
    occupationRef.current.value='';
  }


  return (
    <div className={classes.box}>
      <div className={classes['box-head']}>
        <h2>Add New</h2>
      </div>
      <div className={classes['box-content']}>        
        
        <div className={classes.cl}>&nbsp;</div>
                
        <div className={classes.sort}>
          <form onSubmit={submitHanlder}> 
            <div>
              <label className={classes.fieldLabel}>Name</label>
              <input className={classes.field} type="text" id="name" ref={nameRef}/>
            </div>
            <div>
              <label className={classes.fieldLabel}>Age</label>
              <input className={classes.field} type="text" id="age" ref={ageRef}/>
            </div>
            <div>
              <label className={classes.fieldLabel}>Role</label>
              <input className={classes.field} type="text" id="role" ref={roleRef}/>
            </div>
            <div>
              <label className={classes.fieldLabel}>Occupation</label>
              <input className={classes.field} type="text" id="occupation" ref={occupationRef} />
            </div>  
            <p>
              <button className={classes.button} type="submit"> Add New</button>
            </p>                                  
          </form>

        </div>
      </div>
    </div>
  );
}
