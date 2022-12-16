import React, {useRef} from "react";

export default function BoxFilter(props) {
  const ageRef = useRef();
  const roleRef = useRef();
  const occupationRef = useRef();
  const typeRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let filter="";
    
    if (ageRef.current.value){
      filter = "?age="+ageRef.current.value;
    }
    if (roleRef.current.value){
      if (filter!== ""){
        filter = filter + "&role="+roleRef.current.value
      }else{
        filter = "?role="+roleRef.current.value
      }
    }
    if (occupationRef.current.value){
      if (filter!== ""){
        filter = filter + "&occupation="+occupationRef.current.value
      }else{
        filter = "?occupation="+occupationRef.current.value
      }
    }    
    if (typeRef.current.value){
      if (filter!== ""){
        filter = filter + "&type="+typeRef.current.value
      }else{
        filter = "?type="+typeRef.current.value
      }
    }        

    props.fetchFunction(filter);

  };

  return (
    <div class="box">
      <div class="box-head">
        <h2>Management</h2>
      </div>
      <div class="box-content">
        <div class="sort">
          <form onSubmit={onSubmitHandler}>
            <div>
              <label>Age</label>
              <input class="field" tpe="text" id="age" ref={ageRef}/>
            </div>
            <div>
              <label>Role</label>
              <input class="field" tpe="text" id="role" ref={roleRef} />
            </div>
            <div>
              <label>Occupation</label>
              <input class="field" tpe="text" id="occupation" ref={occupationRef} />
            </div>
            <div>
              <label>Type</label>
              <select class="field" ref={typeRef}>
                <option value="">Choose</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="poweruser">Poweruser</option>
              </select>
            </div>
            <p>
              <button type="submit"> SEARCH </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
