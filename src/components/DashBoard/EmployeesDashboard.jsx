import React from 'react'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../others/TaskListNumber'
import Headers from '../others/headers'

const EmployeesDashboard = ({ employFound }) => {
  const { name, tasks, taskCount } = employFound; // Destructure properties inside the function

  return (
    <div>
      <Headers name={name} />
      <TaskListNumber taskCount={taskCount} />
      <TaskList employFound={employFound}/>
    </div>
  );
};
export default EmployeesDashboard