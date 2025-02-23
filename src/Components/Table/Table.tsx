import React, { useEffect, useState, useRef } from 'react';
import {Services} from '../../Services/Services'
import styles from "./Table.module.css";
import {  IoIosCreate } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuGoal } from 'react-icons/lu';
import CustomBtn from '../Button/CustomBtn';
import Popup, { POPUP_TYPE, PopupRef, RESPONSIBILITY_TYPE  } from '../Popup/Popup';
import { CgPacman } from 'react-icons/cg';
import { formToJSON } from 'axios';

export enum ACTION_TYPE {
    DELETE = 'DELETE',
    EDIT = 'EDIT'
}

export interface TabsTypes {
    id: number
    name?: string
    firstName?: string,
    lastName?: string,
    description: string,
    startDate?: string,
    endDate?: string,
    status?: number,
    email?: string,
    phone?: number,
    phoneNumber?: number,
    customers?: object,
    roleName?: string,
    serviceName?: string,
    price?: string,
    unitName?: string,
    currencyName?: string,
    customerId?: number,
    employeeId?: number,
    serviceId?: number
}

interface ActionTypes {
    edit?: (id: number) => void;
    delete?: (id: number) => void;
}

interface Props {
    name: POPUP_TYPE
    renderTabs: Set<keyof TabsTypes>;
    supportedActions : ActionTypes,
    data: object | null,
}

const Table = (props: Props) => {
    const popupRef = useRef<PopupRef>(null);
    let itemWillBeEditID: any = null;

  const handleEditItem = async (item: object) => {
    
    const {supportedActions} = props;
     try{
        const formData = popupRef.current?.getFormData();
       
        
        if(formData){
          handleDynamicServiceCallToEdit(name, formData, itemWillBeEditID);
          alert("successfully edited.")
        }
          
      } catch (e) {
          alert(`can not add because of ${e}`);
      }
    
  }

  const handleDynamicServiceCallToEdit = async (name: POPUP_TYPE, formData: object, itemWillBeEditID: number) => {
      switch (name) {
        case POPUP_TYPE.CONTACT_PERSON: 
          try{
            await Services.contact.editContact(formData, itemWillBeEditID);
            const updatedServices = await Services.contact.getAllContacts();
            console.log("contact person");
            
            supportedActions?.edit(updatedServices)
          } catch(error) {
            alert(error)
          }
          break;
        case POPUP_TYPE.EMPLOYEE: 
            try{
              console.log("employee");

            await Services.employee.editEmployee(formData, itemWillBeEditID);
            const updatedServices = await Services.employee.getAllEmployees();
            
            supportedActions?.edit(updatedServices)
          } catch(error) {
            alert(error)
          }
          break;
        case POPUP_TYPE.SERVICE: 
          try{
            await Services.service.editService(formData, itemWillBeEditID);
            const updatedServices = await Services.service.getAllServices();
     
            supportedActions?.edit(updatedServices)
          } catch(error) {
            alert(error)
          }
          break;
          case POPUP_TYPE.CUSTOMER: 
          try{
            await Services.customer.editCustomer(formData, itemWillBeEditID);
            const updatedServices = await Services.customer.getAllCustomers();
       

            supportedActions?.edit(updatedServices)
          } catch(error) {
            alert(error)
          }
          break;
          case POPUP_TYPE.PROJECT: 
          try{
            await Services.projects.editProject(formData, itemWillBeEditID);
            const updatedServices = await Services.projects.getAllProjects();
            
            supportedActions?.edit(updatedServices)
          } catch(error) {
            alert(error)
          }
          break;
      }
  }

  const openPopup = (id: number) => {
    console.log("id", id );
    
    itemWillBeEditID = id;

    popupRef.current?.openPopup(POPUP_TYPE.CONTACT_PERSON);
  }

    const {name, renderTabs,supportedActions, data} = props
    
    
    if (!data) return <p>No data available.</p>;
  return (
    <>
      
      <div className={styles.container}>
      <div className={styles.buttonContainer}></div>
      <div className={styles.tableContainer}>
        <table className={styles.projectTable}>
          <thead>
            <tr>
              <th>ID</th>
              {renderTabs.has('firstName') && <th>First Name</th>}
              {renderTabs.has('name') && <th>Name</th>}
              {renderTabs.has('lastName') && <th>Last Name</th>}
              {renderTabs.has('description') && <th>Description</th>}
              {renderTabs.has('startDate') && <th>Start Date</th>}
              {renderTabs.has('endDate') && <th>Start Date</th>}
              {renderTabs.has('status') && <th>Status</th>}
              {renderTabs.has('customerId') && <th>customerId</th>}
              {renderTabs.has('employeeId') && <th>employeeId</th>}
              {renderTabs.has('serviceId') && <th>serviceId</th>}
              {renderTabs.has('roleName') && <th>Role</th>}
              {renderTabs.has('email') && <th>Email</th>}
              {renderTabs.has('phone') && <th>Phone</th>}
              {renderTabs.has('phoneNumber') && <th>Phone</th>}
              {renderTabs.has('customers') && <th>Customers</th>}
              {renderTabs.has('serviceName') && <th>Service Name</th>}
              {renderTabs.has('price') && <th>Price</th>}
              {renderTabs.has('unitName') && <th>Unit Name</th>}
              {renderTabs.has('currencyName') && <th>Currency Name</th>}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className={styles.nameColumn}>
                 
                  <div>
                    <p className={styles.projectName}>{item.id}</p>
                    
                  </div>
                </td>
                {renderTabs.has('firstName') && <td>{item.firstName}</td>}
                {renderTabs.has('name') && <td>{item.name}</td>}
                {renderTabs.has('lastName') && <td>{item.lastName}</td>}
                {renderTabs.has('description') && <td>{item.description}</td>}
                {renderTabs.has('startDate') && <td>{item.startDate}</td>}
                {renderTabs.has('endDate') && <td>{item.endDate}</td>}
                {renderTabs.has('status') && <td>{item.status}</td>}
                {renderTabs.has('customerId') && <td>{item.customerId}</td>}
                {renderTabs.has('employeeId') && <td>{item.employeeId}</td>}
                {renderTabs.has('serviceId') && <td>{item.serviceId}</td>}
                {renderTabs.has('roleName') && <td>{item.roleName}</td>}
                {renderTabs.has('email') && <td>{item.email}</td>}
                {renderTabs.has('phone') && <td>{item.phone}</td>}
                {renderTabs.has('phoneNumber') && <td>{item.phoneNumber}</td>}
                {renderTabs.has('customers') && <td>{item.customers}</td>}
                {renderTabs.has('serviceName') && <td>{item.serviceName}</td>}
                {renderTabs.has('price') && <td>{item.price}</td>}
                {renderTabs.has('unitName') && <td>{item.unitName}</td>}
                {renderTabs.has('currencyName') && <td>{item.currencyName}</td>}
                <td>
                  <button className={styles.actionButton}>
                    <IoIosCreate color={'#646cff'} size={24} onClick={() => openPopup(item.id)} />
                  </button>
                  <button className={styles.actionButton} onClick={() => supportedActions?.delete(item.id)}>
                    <MdDelete color={'#ba1106'} size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Popup ref={popupRef} type={name} responsibility={RESPONSIBILITY_TYPE.EDIT} onSubmit={handleEditItem}  />
  
    


    </> 
  )
  
};

export default Table;