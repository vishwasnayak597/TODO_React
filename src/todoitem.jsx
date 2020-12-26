import React from "react";

function ToDoItem(props) {
  return (
      
      <div onClick={()=>
        //this function is called when onclicked is called
        props.onChecked(props.id)
        //it returns id of item below 
      }>
           <li>{props.item}</li>
      </div>
  );
  }

export default ToDoItem;