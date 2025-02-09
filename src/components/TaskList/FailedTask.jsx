import React from 'react'

const FailedTask = () => {
  return (
    <div  className='TaskList2'>
        <div className='taskScroll one'>
                <div className='highDate'>
                    <h2 className='high'>High</h2>
                    <h3 className='date'>12/3/2021</h3>
                </div>
                <h4 className='para'>New task for you</h4>
                <div className='status-buttons2'>
                    <button className='failed'>Failed</button>
            </div>
        </div> 
    </div>
  )
}

export default FailedTask