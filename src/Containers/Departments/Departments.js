import React from "react";
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";
import "./Departments.css";

const Departments = () => {
  
  return (
    <div>
      <div className="grid p-4 h-full dept-card-main depMain pl-10 pr-10">
        <DepartmentCard alignment={1}/>
        <DepartmentCard alignment={2}/>
        <DepartmentCard alignment={3}/>
        <DepartmentCard alignment={1}/>
        <DepartmentCard alignment={2}/>
        <DepartmentCard alignment={3}/>
      </div>
    </div>
  );
};

export default Departments;
