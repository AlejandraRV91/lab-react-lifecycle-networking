import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

import { useState, useEffect } from 'react';


function App () {

  let [employees,setEmployees]=useState([]);

  useEffect(() => {
    fetch("https://resource-veterinarian-api.fly.dev/api/employees")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees}/>
    </>
  );
};

export default App;
