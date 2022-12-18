import React from "react";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div id="header">
      <div className={classes.shell}>
        <div id="top">
          <h1>Typescript API</h1>
          <div id="top-navigation">            
            PoL API by <strong>Alexandre Franca</strong>
          </div>
        </div>

        <div id="navigation">
          <ul>
            <li>
              <a href="#" class="active">
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
