import React, {useRef} from "react";

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
  }


  return (
    <div class="box">
      <div class="box-head">
        <h2>Add New</h2>
      </div>
      <div class="box-content">        
        
        <div class="cl">&nbsp;</div>
                
        <div class="sort">
          <form onSubmit={submitHanlder}> 
            <div>
              <label>Name</label>
              <input type="text" id="name" ref={nameRef}/>
            </div>
            <div>
              <label>Age</label>
              <input type="text" id="age" ref={ageRef}/>
            </div>
            <div>
              <label>Role</label>
              <input type="text" id="role" ref={roleRef}/>
            </div>
            <div>
              <label>Occupation</label>
              <input type="text" id="occupation" ref={occupationRef} />
            </div>  
            <p>
              <button type="submit"> Add New</button>
            </p>                                  
          </form>

        </div>
      </div>
    </div>
  );
}
