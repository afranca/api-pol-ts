import React from "react";
import classes from './BoxListItem.module.css';

export default function BoxListItem(props) {
  const deleteHandler = () => {
    console.log("Delete item: " + props.id);
    props.onDelete(props.id);
  };

  const updateHandler = () => {
    //console.log("Executing updateHandler (BoxListItem)");
    //console.log(props.id);
    props.onEdit(props.id);
    //props.showModal();
  };

  const icoDel = `${classes.ico} ${classes.del}`;
  const icoEdit = `${classes.ico} ${classes.edit}`;

  return (
    <tr>
      <td>
        <h3>
          <a href="#"> {props.name} </a>
        </h3>
      </td>
      <td>{props.age}</td>
      <td>{props.type}</td>
      <td>{props.role}</td>
      <td>{props.occupation}</td>

      <td>
        <div className={icoDel} onClick={deleteHandler}>
          Delete
        </div>
        <div className={icoEdit} onClick={updateHandler}>
          Edit
        </div>
      </td>
    </tr>
  );
}
