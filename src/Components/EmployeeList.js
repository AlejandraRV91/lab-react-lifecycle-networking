import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = (props) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {props.employees.map((employee)=>(<Employee key={employee.id} employee={employee} />))}
      </section>
    </main>
  );
};

export default EmployeeList;
