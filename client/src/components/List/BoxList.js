import React from "react";
import BoxListItem from "./BoxListItem";
import classes from './BoxList.module.css';

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
        onDelete={props.onDeleteItem}
        showModal={props.showModal}
        onEdit={props.onEditItem}
  />);

  return (
    <div className={classes.box}>
      <div className={classes['box-head']}>
        <h2 className={classes.left}>User List</h2>
      </div>
      <div className={classes.table}>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Type</th>
            <th>Role</th>
            <th>Occupation</th>
            <th width="110" className={classes.ac}>
              Content Control
            </th>
          </tr>

          { itemList }

        </table>
        <div className={classes.pagging}>
          <div className={classes.left}>Showing 1-12 of 44</div>
          <div className={classes.right}>
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
