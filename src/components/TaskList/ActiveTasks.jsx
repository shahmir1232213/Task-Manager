import React from 'react';
import "../../taskScroll.css";

const Active = ({ ActiveTasks }) => {
  console.log("ActiveTasks Type:", typeof ActiveTasks);
  console.log("ActiveTasks Value:", ActiveTasks);

  return (
    <div className='TaskList2'>
      {ActiveTasks.length > 0 ? (
        ActiveTasks.map((task, index) => {
          const classNames = ["one", "two", "three", "four"];
          let dynamicClass = classNames[index % classNames.length];
          return (
          <div className={`taskScroll ${dynamicClass}`}>
            <div className='highDate'>
              <h2 className='high'>{task.taskId}</h2>
              <h3 className='date'>{task.deadline}</h3>
            </div>
            <h4 className='para'>{task.title}</h4>
            <div className='status-buttons'>
              <button className='completed'>Completed</button>
              <button className='failed'>Failed</button>
            </div>
          </div>)
        })
      ) : (
        <p>No active tasks available</p>
      )}
    </div>
  );
};

export default Active;
