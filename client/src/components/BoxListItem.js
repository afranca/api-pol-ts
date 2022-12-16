import React from "react";

export default function BoxListItem(props) {
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
        <a href="#" class="ico del">
          Delete
        </a>
        <a href="#" class="ico edit">
          Edit
        </a>
      </td>
    </tr>
  );
}
