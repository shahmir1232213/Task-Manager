import React from 'react'
import "../../taskScroll.css";
const NewTask = ({NewTasks}) => {
  console.log("NewTASKS: ",NewTasks)
  return (
    <div  className='TaskList2'>
        {NewTasks.map((elem,index)=>{
          const classNames = ["one", "two", "three", "four"];
          let dynamicClass = classNames[index % classNames.length];
          return (<div className={`taskScroll ${dynamicClass} `}>
                      <div className='highDate'>
                          <h2 className='high'>{elem.taskId}</h2>
                          <h3 className='date'>{elem.deadline}</h3>
                      </div>
                      <h4 className='para'>{elem.title}</h4>
                      <div className='status-buttons2'>
                          <button className='completed'>Accept</button>
                      </div>
                  </div> 
          )
        })}
    </div>
  )
}

export default NewTask