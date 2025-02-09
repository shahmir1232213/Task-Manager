import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import Headers from './components/others/headers'
import TaskListNumber from './components/others/TaskListNumber'
import TaskList from './components/TaskList/TaskList'
import AdminDashBoard from './components/DashBoard/AdminDashBoard';
import { setLocalStorage,getLocalStorage } from './utils/localStorage'
import EmployeesDashboard from './components/DashBoard/EmployeesDashboard'
import {AuthContext} from './context/AuthProvider'
import {Route,Routes} from 'react-router-dom'
import AllTask from './components/others/AllTask'
import Heading from './components/others/heading'

const App = () => {
  useEffect(()=>{
    setLocalStorage();
  },[])
  const [user,setUser] = useState(null);
  const [employFound,setEmployeeFound] = useState('')
  const useContextdata = useContext(AuthContext);
  useEffect(() => {
    console.log("at function end: ", employFound);  // ✅ Logs new value after re-render
  }, [employFound]);
  function handleLogin(email,password){
      if(email == "admin@gmail.com" && password == "123"){
        setUser("admin");
        console.log("user: ",user)
        localStorage.setItem("UserRole",JSON.stringify("admin"))
      }
      else {
        if(useContextdata && useContextdata.employees.find((employee)=>email == employee.email && employee.password == password )){
          setUser("employee")
          let employeeFound = useContextdata.employees.find((employee) => email == employee.email && employee.password == password);
          console.log("employeeFound: ",employeeFound)
          localStorage.setItem("UserRole","employee")
          localStorage.setItem("UserData",JSON.stringify(employeeFound))
          setEmployeeFound(employeeFound)
        }
        else{
          console.log("invalid user")
        }
      }  
      
  } 
  return (
   <> 
   
    {!user ? <Login handleLogin={handleLogin} />:
    user =='admin' ? <AdminDashBoard /> :< EmployeesDashboard employFound={employFound}/>} 
    <Routes>
        <Route path='/AllTasks' element = {<AllTask />}> </Route>
    </Routes>
   </>
  )
}

export default App