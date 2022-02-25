import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { addToDo, deleteToDo } from '../../features/todoSlice';
import { TiDeleteOutline } from 'react-icons/ti';


function ToDos() {
 
 // get list from state (redux)
 let todoList = useSelector((state) => state.todos);

 // for sending an item to redux 
 let dispatch = useDispatch();

 // useState for the entry

 let [newTodo, setNewTodo] = useState();
 let [todoPriority, setPriority] = useState();

 // have unique ID ready for next addition

 let newToDoId = todoList.length + Math.floor(Math.random() * 1000);
 

 // in order to sort, have to make a copy. Otherwise react thinks that the sort is trying to directly mutate state. 
 let listCopy = [...todoList]

 // sorting based on priority
 let sortedList = listCopy.sort((a,b) => a.priority - b.priority);

 // getting priority item
 let priorityTodo = sortedList[0];

 // other items
 let remainingTodos = sortedList.slice(1)
 
 let firstTodo = priorityTodo.item;
 let firstTodoId = priorityTodo.id;

 let list = remainingTodos.map(item => 
  <li key={item.id}>{item.item} 
    <button className="trash"
      onClick={() => {
        dispatch(deleteToDo({id: item.id}));
        console.log(todoList);
       }}>
      <TiDeleteOutline />
    </button>
  </li>
  )
  
 return (    
 
  <div className='main'>
     <div>
     <div>
       <label htmlFor="toDoInput">I Need To: </label>
       <input type="text" name="toDo" id="toDoInput" className="toDoInput" onChange={(e)=> setNewTodo(e.target.value)}/>
      </div>
      <div>
       <label htmlFor="priority">Priority: </label>
       <select name="priority" id="priority" className="priority" onChange={(e) => setPriority(parseInt(e.target.value))}>
        <option value="">1 is highest, 5 is lowest</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
       </select>
       </div>
       <div>
        <button className="button" id="button" onClick={()=> {
          dispatch(addToDo({
            id: newToDoId,
            item: newTodo,
            completed: false,
            priority: todoPriority
            })
            )
          console.log(listCopy)}
        }

        >add to list</button>
       </div>
   </div>

     <div className='toDoDisplay'>
       <div className='nextToDo'>
         Up next: {firstTodo} 
         <button className="trash" onClick={() => {
         dispatch(deleteToDo({id: firstTodoId}));
         console.log(listCopy)
         }}
       >
      <TiDeleteOutline />
    </button></div>
       <div className='leftToDo'>
        Plan for: 
         <ul>{list}</ul>
        </div>
  
   </div>
  </div>
  )
}

export default ToDos;