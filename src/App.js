import React,{useState} from "react";
import './App.css';
import ToDoItem from './todoitem';
function App() {
    const[inputText,setInputText]=useState("");
    const[items,setItems]=useState([]); // setting empty array 

  function handleChange(event){
     const newvalue=event.target.value;
     setInputText(newvalue);
  }
   
  function addItem(){
     setItems(prevValue =>{
       return[...prevValue,inputText];
      });
      setInputText("");
  }

  function deleteItem(id) {
     setItems(prevValue =>{
       return prevValue.filter((item,index)=>{
         //returning array whose index isnot similar to id that was generated when item is clicked(indirectly mesns delete)
          return index !== id
       })
     })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((item, index)=>
         <ToDoItem  id={index} item={item} onChecked={deleteItem}/>
         //passing onchecked function (deleteItem) , key refers 
        )}
        
        </ul>
      </div>
    </div>
  );
}

export default App;
