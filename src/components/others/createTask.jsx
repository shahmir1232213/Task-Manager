import React, { useEffect, useState } from 'react'
import '../../adminDashBoard.css';
import { getLocalStorage,setLocalStorage } from '../../utils/localStorage';
  const createTask = () => {
    let [taskTitle,setTitle] = useState('');
    let [taskDeadline,setDeadline] = useState('');
    let [assignTo,setAssign] = useState('');
    let [taskId,setTaskId] = useState('');
    let [tasks,setTasks] = useState({});
    
    // useEffect(()=>{
    //   console.log("Tasks: ",tasks)
    // },[tasks])
    function submitHandler(e) {
      e.preventDefault(); // Prevents page refresh
  
      let newTask = { taskTitle, taskDeadline, taskId }; // Create task object
  
      let dataBase = getLocalStorage();
      dataBase = JSON.parse(dataBase)
  
      console.log("dataBase:", dataBase);
  
      if (!dataBase || !Array.isArray(dataBase.employees)) {
         console.log("typeOF DB IS: ",dataBase.type)
        console.error("Invalid database format or missing employees array.");
          return;
      }
  
      let found = dataBase.employees.find(employee => employee.name === assignTo);
  
      if (found) {
          found.tasks.new.push(newTask); // Add new task
          setLocalStorage(dataBase); // Save back to local storage
          localStorage.setItem("employees", JSON.stringify(dataBase)); // Save to localStorage
          console.log("Updated Tasks: ", found.tasks);
      } else {
          console.error("Employee not found");
      }
  }
    return (<div>
        <form className='task-form' onSubmit={submitHandler}>
        <div className='Details'>
            <h3>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{setTitle(e.target.value)}} type='text' placeholder='Make a UI design' className='input-field' />
            <h3>Deadline</h3>
            <input value={taskDeadline} onChange={(e)=>{setDeadline(e.target.value)}} type='date' className='input-field' />
            <h3>Assign to</h3>
            <input value={assignTo} onChange={(e)=>{setAssign(e.target.value)}} type='text' placeholder='Employee Name' className='input-field' />  
            <h3>Task Id</h3>
            <input value={taskId} onChange={(e)=>{setTaskId(e.target.value)}} type='number' className='input-field' />
        </div>
        <div className='DecriptionBox'>
            <div className='Decription'>
                <h3>Description</h3>
                    <textarea cols='30' rows='5' className='textarea-field'></textarea>
            </div>
            <button className='submit-button'>
                Create Task
            </button>
        </div>    
      </form>
    </div>
  )
}
 export default createTask