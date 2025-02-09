import React from 'react'

const CompleteTask = () => {
  return (
    <div  className='TaskList2'>
        <div className='taskScroll two'>
                <div className='highDate'>
                    <h2 className='high'>High</h2>
                    <h3 className='date'>12/3/2021</h3>
                </div>
                <h4 className='para'>New task for you</h4>
                <div className='status-buttons2'>
                    <button className='completed'>Completed</button>
            </div>
        </div> 
    </div>
  )
}

export default CompleteTask