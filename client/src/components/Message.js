import React from "react";
import classes from "./Message.module.css";

export default function Message(props) {
  const text = props.text;
  const type = props.type;

  const msgClass = `${classes.msg} ${
    type === "success" ? classes.msgOk : classes.msgError
  }`;

  return (
    <div className={msgClass}>
      <p>
        <strong>{text}</strong>
      </p>
      <a href="#" className={classes.close}>
        close
      </a>{" "}
    </div>
  );
}
