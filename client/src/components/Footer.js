import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className={classes.shell}>
        {" "}
        <span className={classes.left}>&copy; 2010 - CompanyName</span>{" "}
        <span className={classes.right}>
          {" "}
          Design by <a href="http://chocotemplates.com">
            Chocotemplates.com
          </a>{" "}
        </span>{" "}
      </div>
    </div>
  );
}
