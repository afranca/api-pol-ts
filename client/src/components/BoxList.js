import React from "react";
import BoxListItem from "./BoxListItem";

export default function List(props) {

  const itemList = props.items.map( (user) => 
    <BoxListItem 
        id={user.id}
        key={user.id}
        name={user.name}
        type={user.type}
        age={user.age}
        role={user.role}
        occupation={user.occupation}
  />);

  return (
    <div class="box">
      <div class="box-head">
        <h2 class="left">User List</h2>
      </div>
      <div class="table">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Type</th>
            <th>Role</th>
            <th>Occupation</th>
            <th width="110" class="ac">
              Content Control
            </th>
          </tr>

          { itemList }

        </table>
        <div class="pagging">
          <div class="left">Showing 1-12 of 44</div>
          <div class="right">
            {" "}
            <a href="#">Previous</a> <a href="#">1</a> <a href="#">2</a>{" "}
            <a href="#">3</a> <a href="#">4</a> <a href="#">245</a>{" "}
            <span>...</span> <a href="#">Next</a> <a href="#">View all</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
