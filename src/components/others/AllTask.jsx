import React, { useContext } from 'react';
import "../../AllTasks.css";
import { AuthContext } from '../../context/AuthProvider';
import Headers from './headers';

const AllTask = () => {
  let { employees } = useContext(AuthContext);
  console.log("userData: ", employees);

  return (
    <div className="full-screen-task">
      <div className='header2'>
        <p>Employee Name</p>
        <p>New Task</p>
        <p>Active</p>
        <p>Completed</p>
      </div>

      <div className='TasksContainer'>
        {employees.map((employee) => (
          <div className='Tasks' key={employee.id}>
            <p>{employee.name}</p>
            <p>{employee.taskCount.new}</p>
            <p>{employee.taskCount.active}</p>
            <p>{employee.taskCount.completed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
