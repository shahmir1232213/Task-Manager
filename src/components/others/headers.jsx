import React from "react";
import "../../header.css";

const Headers = ({ name,admin }) => {  // Changed 'headers' to 'Headers'
  function logOutHandler() {
    let user = localStorage.getItem("UserRole");
    if (user){
      console.log("user from log out: ",user);
      localStorage.removeItem("UserRole");
      localStorage.removeItem("UserData");
      window.location.reload();
    }
    else console.log("not found");
  }

  return (
    <div className="header">
      <div className="hello">
        {admin?(
          <h1>Admin Portal</h1>
        ):(
          <>
            <p>Hello</p>
            <p className="userName">{name}</p>
          </>
        )}
      </div>
      <button onClick={logOutHandler}  className="Logout">
        Log Out
      </button>
    </div>
  );
};

export default Headers; // Changed export to match new component name
