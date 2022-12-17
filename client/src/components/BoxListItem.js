import React from "react";

export default function BoxListItem(props) {
  const deleteHandler = () => {
    console.log("Delete item: " + props.id);
    props.onDelete(props.id);
  };

  const updateHandler = () => {
    console.log("Update item: " + props.id);
  };

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
        <div class="ico del" onClick={deleteHandler}>
          Delete
        </div>
        <div class="ico edit" onClick={updateHandler}>
          Edit
        </div>
      </td>
    </tr>
  );
}
