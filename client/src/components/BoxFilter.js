import React from 'react'

export default function BoxFilter(props) {
  return (
    <div class="box">
    <div class="box-head">
      <h2>Management</h2>
    </div>
    <div class="box-content">
      {" "}
      <a href="#" class="add-button">
        <span>Add new Article</span>
      </a>
      <button onClick={props.fetchFunction}>  Fectch </button>
      <div class="cl">&nbsp;</div>
      <p class="select-all">
        <input type="checkbox" class="checkbox" />
        <label>select all</label>
      </p>
      <p>
        <a href="#">Delete Selected</a>
      </p>
      <div class="sort">
        <label>Sort by</label>
        <select class="field">
          <option value="">Title</option>
        </select>
        <select class="field">
          <option value="">Date</option>
        </select>
        <select class="field">
          <option value="">Author</option>
        </select>
      </div>
    </div>
  </div>    
  )
}
