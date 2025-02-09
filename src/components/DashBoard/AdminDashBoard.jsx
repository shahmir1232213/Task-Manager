import React from 'react';
import Header from '../others/headers';
import CreateTask from '../others/createTask';
import AllTask from '../others/AllTask';
import {Link} from 'react-router-dom'

const AdminDashBoard = () => {
  return (
    <div className='admin-dashboard'>
      <Header admin={"Admin Portal"}/>
      <CreateTask />
      <Link to={"/AllTasks"}>
          <button 
            className='taskViewr' 
            style={{
              width: "max-content",
              height: "max-content",
              backgroundColor: "rgba(255, 73, 73, 0.781)",
              padding: "15px 35px",
              fontSize: "large",
              fontWeight: "900",
              marginTop:"35px",
              borderRadius: "4px",
              
            }}
          >
        View All Tasks
      </button>
      </Link>
    </div>
  );
};

export default AdminDashBoard;
