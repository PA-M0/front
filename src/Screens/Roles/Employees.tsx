import React, { useEffect, useState, useRef } from 'react';
import {Services} from '../../Services/Services'
import styles from "./Employees.module.css";
import {  IoIosCreate } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuGoal } from 'react-icons/lu';
import CustomBtn from '../../Components/Button/CustomBtn';
import Popup, { POPUP_TYPE, PopupRef, RESPONSIBILITY_TYPE  } from '../../Components/Popup/Popup';
import Table, { ACTION_TYPE, TabsTypes } from '../../Components/Table/Table';

const Roles = () => {
  const [employees, setEmployees] = useState(null);
  const popupRef = useRef<PopupRef>(null);
  const [visibleTabs, setVisibleTabs] = useState<Set<keyof TabsTypes>>(new Set(["id"]));
  

  useEffect(()  => {
    const fetchEmployees = async () => {
      try { 
     
      const employees = await Services.employee.getAllEmployees();      

      const keys = Object.keys(employees[0]);
      const newVisibleTabs = new Set(keys as (keyof TabsTypes)[]);
      
      setVisibleTabs(newVisibleTabs);     
      setEmployees(employees);
      
      } catch(error){
        console.log(error);
      }
    }
    fetchEmployees();

   
  }, []);

    const addNewEmployee = async (formData: any) => {
        try{
          
          await Services.employee.addNewEmployee(formData);
          const updatedEmployees = await Services.employee.getAllEmployees();
    
          setEmployees(updatedEmployees);
          alert("successfully added.")
            
        } catch (e) {
            alert(`can not add because of ${e}`);
        }
  
      }

  const handleDelete = (id: number) => {
    try {
          const deleteItem = async (id: number) => {
           
            
            await Services.employee.deleteEmployee(id)
            const updatedEmployees = await Services.employee.getAllEmployees();
  
            setEmployees(updatedEmployees);
          }
          deleteItem(id);
        } catch (error) {
          alert(`something went wrong please tey again. because of ${error}`)
        }
  };

  const handleEdit = async (item: object) => {  
    setEmployees(item);
     const res = await Services.employee.getAllEmployees();
     setEmployees(res)
  };


  return (
    <>
      <h2>Employees</h2>
        <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <CustomBtn OnClick={() => popupRef.current?.openPopup(POPUP_TYPE.EMPLOYEE)}>
            <span>Add Employee</span>
          </CustomBtn>
        </div>
        <Table name={POPUP_TYPE.EMPLOYEE}
                renderTabs={visibleTabs}  
                data={employees}
                supportedActions={{
                edit: handleEdit,
                delete: handleDelete
            }} />
            <Popup ref={popupRef} responsibility={RESPONSIBILITY_TYPE.ADD} type={POPUP_TYPE.EMPLOYEE} onSubmit={addNewEmployee} />
          </div>
    </> 
  )
  
};

export default Roles;