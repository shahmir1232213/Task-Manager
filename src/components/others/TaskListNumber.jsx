import React from 'react'
import "../../TaskListNumber.css"
const TaskListNumber = ({taskCount}) => {
  return (
    <div className='TaskListBox'>
        <div className='task one1'>
            <div className='taskText'>
                <h2 className='taskNumber taskSubText'>{taskCount.active}</h2>
                <h3 className='taskList taskSubText'>Active Task</h3>
            </div>
        </div>
        <div className='task two1'>
            <div className='taskText'>
                <h2 className='taskNumber taskSubText'>{taskCount.new}</h2>
                <h3 className='taskList taskSubText'>New Tasks</h3>
            </div>
        </div>
        <div className='task three1'>
            <div className='taskText'>
                <h2 className='taskNumber taskSubText'>{taskCount.completed}</h2>
                <h3 className='taskList taskSubText'>Completed Tasks</h3>
            </div>
        </div>
        <div className='task four1'>
            <div className='taskText'>
                <h2 className='taskNumber taskSubText'>{taskCount.failed}</h2>
                <h3 className='taskList taskSubText'>Failed Task</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumber