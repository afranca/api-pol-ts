import React from "react";
import Modal from "../UI/Modal";
import classes from './BoxNew.module.css';

export default function BoxNew(props) {

  const fieldSize1 = `classes.field classes.size1`;
  return (
    <Modal onClose={props.hideModal}>
    <div className={classes.box}>
      <div className={classes['box-head']}>
        <h2>User</h2>
      </div>
      <form>
        <div className={classes.form}>
          <p>            
            <label>
              Name<span>(Required)</span>
            </label>
            <input type="text" id="name" className={classes.field} />
          </p>
          <p>
            <label>
              Age<span>(Required)</span>
            </label>
            <input type="text" id="age" className={classes.field} />
          </p>
          <p>
            <label>
              Role<span>(Optional)</span>
            </label>
            <input type="text" id="role" className={classes.field} />
          </p>
          <p>
            <label>
              Occupation<span>(Optional)</span>
            </label>
            <input type="text" id="occupation" className={classes.field}/>
          </p>                    
          <p className={classes['inline-field']}>
            <label>Date</label>
            <select className={classes.field}>
              <option value="">23</option>
            </select>
          </p>
          

        </div>
        <div className={classes.buttons}>
          <input type="button" className={classes.button} value="preview" />
          <input type="submit" className={classes.button} value="submit" />
        </div>
      </form>
    </div>
    <button onClick={props.hideModal}>Close</button>
    </Modal>
  );
}
