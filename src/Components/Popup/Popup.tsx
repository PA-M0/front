import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./Popup.module.css"; 
import {Services} from '../../Services/Services';
import { MdDeleteForever } from "react-icons/md";

export enum POPUP_TYPE {
    EMPLOYEE = 'employee',
    PROJECT = 'project',
    CONTACT_PERSON = 'contact_person',
    SERVICE = 'service',
    CUSTOMER = 'customer'
}
export enum RESPONSIBILITY_TYPE {
  ADD = "add",
  EDIT = "edit"
}

interface Props {
    type: POPUP_TYPE,
    responsibility: RESPONSIBILITY_TYPE
    onSubmit: Function,
    state: object
}

export interface PopupRef {
  openPopup: (popupType: POPUP_TYPE) => void;
  closePopup: () => void;
  getFormData: () => object;
}

const Popup = forwardRef<PopupRef, Props>(({ type, onSubmit, responsibility }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const [employeeFormData, setEmployeeFormData] = useState({ firstName: "", lastName: "", roleName: "" });
  const [projectFormData, setProjectFormData] = useState({ name: "", description: "", startDate: "", endDate: "", status: "", customerId: "", employeeId: "", serviceId: "" });
  const [contactPersonFormData, setContactPersonFormData] = useState({ firstName: "", email: "", lastName: "", phoneNumber: "" });
  const [serviceFormData, setServiceFormData] = useState({ serviceName: "", unitName: "", price: "", currencyName: "" });
  const [CustomerFormData, setCustomerFormData] = useState({ customerName: "", email: "", phoneNumber: "" });
 
  const [dropdown1Options, setDropdown1Options] = useState([]);
  const [dropdown2Options, setDropdown2Options] = useState([]);
  const [dropdown3Options, setDropdown3Options] = useState([]);

  useImperativeHandle(ref, () => ({
    openPopup: (popupType: POPUP_TYPE) => openPopup(popupType),
    closePopup: () => setIsOpen(false),
    getFormData: () => getFormData(),
  }));



 



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const integerFields = ['status', 'customerId', 'employeeId', 'serviceId'];
    switch (type) {
      case POPUP_TYPE.EMPLOYEE:
        setEmployeeFormData((prev) => ({ ...prev, [name]: value }));
        break;
      case POPUP_TYPE.PROJECT:
        setProjectFormData((prevData) => ({
          ...prevData,
          [name]: integerFields.includes(name) ? parseInt(value, 10) : value,
        }));
        break;
      case POPUP_TYPE.CONTACT_PERSON:
        setContactPersonFormData((prev) => ({ ...prev, [name]: value }));
        break;
      case POPUP_TYPE.SERVICE:
        setServiceFormData((prev) => ({ ...prev, [name]: value }));
        break;
      case POPUP_TYPE.CUSTOMER:
        setCustomerFormData((prev) => ({ ...prev, [name]: value }));
        break;
      default:
        break;
    }
  };

  const openPopup = (popupType: POPUP_TYPE) => {
    setIsOpen(true);
    type = popupType;
    renderInputs();

  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here");
    
    let formData;
    switch (type) {
      case POPUP_TYPE.EMPLOYEE:
        formData = employeeFormData;
        break;
      case POPUP_TYPE.PROJECT:
        formData = projectFormData;
        break;
      case POPUP_TYPE.CONTACT_PERSON:
        formData = contactPersonFormData;
        break;
      case POPUP_TYPE.SERVICE:
        formData = serviceFormData;
        break;
      case POPUP_TYPE.CUSTOMER:
        formData = CustomerFormData;
        break;
    }
   
    console.log(formData);
    
    onSubmit(formData);
    setIsOpen(false);
  };

  const getFormData = () => {
    switch (type) {
      case POPUP_TYPE.EMPLOYEE:
        return employeeFormData;
      case POPUP_TYPE.PROJECT:
        return projectFormData;
      case POPUP_TYPE.CONTACT_PERSON:
        return contactPersonFormData;
      case POPUP_TYPE.SERVICE:
        return serviceFormData;
      case POPUP_TYPE.CUSTOMER:
        return CustomerFormData;  
    }
  }

  const renderInputs = () => {
    switch (type) {
      case POPUP_TYPE.EMPLOYEE:
        return (
          <>
            <div className={styles.inputGroup}>
              <label>First name</label>
              <input type="text" name="firstName" value={employeeFormData.firstName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Last name</label>
              <input type="text" name="lastName" value={employeeFormData.lastName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>role</label>
              <input type="text" name="roleName" value={employeeFormData.roleName} onChange={handleChange} required />
            </div>
          </>
        );

      case POPUP_TYPE.PROJECT:
        return (
          <>
            <div className={styles.inputGroup}>
              <label>Project Name</label>
              <input type="text" name="name" value={projectFormData.name} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Description</label>
              <input type="text" name="description" value={projectFormData.description} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Start date</label>
              <input
                        type="date"
                        name="startDate"
                        value={formatDateForInput(projectFormData.startDate)}
                        onChange={handleChange2}
                        required
                      />   
             </div>
            <div className={styles.inputGroup}>
              <label>End date</label>
              <input type="date" name="endDate" value={formatDateForInput(projectFormData.endDate)} onChange={handleChange2} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Status</label>
              <input type="number" name="status" value={projectFormData.status} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
            <label htmlFor="customer">Customers</label>
            <select
              id="customer"
              name="customerId"
              onClick={handleDropdown1Click}
              onChange={handleChange}
              required
            >
              <option value={projectFormData.customerId}>Select an option</option>
              {dropdown1Options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            </div>

          <div className={styles.inputGroup}>
            <label htmlFor="dropdown2">Employees</label>
            <select
              id="dropdown2"
              name="employeeId"
              onClick={handleDropdown2Click}
              onChange={handleChange}
              required
            >
              <option value={projectFormData.employeeId}>Select an option</option>
              {dropdown2Options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName}
                </option>
              ))}
            </select>
            </div>

          <div className={styles.inputGroup}>
            <label htmlFor="dropdown3">Services</label>
            <select
              id="dropdown3"
              name="serviceId"
              onClick={handleDropdown3Click}
              onChange={handleChange}
              required
            >
              <option value={projectFormData.serviceId}>Select an option</option>
              {dropdown3Options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.serviceName}
                </option>
              ))}
            </select>
            </div>
           
          </>
        );

      case POPUP_TYPE.CONTACT_PERSON:
        return (
          <>
            <div className={styles.inputGroup}>
              <label>First name</label>
              <input type="text" name="firstName" value={contactPersonFormData.firstName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Last name</label>
              <input type="text" name="lastName" value={contactPersonFormData.lastName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" name="email" value={contactPersonFormData.email} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone number</label>
              <input type="tel" name="phoneNumber" pattern="[0-9]{11}" value={contactPersonFormData.phoneNumber} onChange={handleChange} required />
            </div>
          </>
        );

      case POPUP_TYPE.SERVICE:
        return (
          <>
            <div className={styles.inputGroup}>
              <label>Service Name</label>
              <input type="text" name="serviceName" value={serviceFormData.serviceName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Unit Name</label>
              <input type="text" name="unitName" value={serviceFormData.unitName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Price</label>
              <input type="number" name="price" value={serviceFormData.price} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Currency Name</label>
              <input type="text" name="currencyName" value={serviceFormData.currencyName} onChange={handleChange} required />
            </div>
          </>
        );
      case POPUP_TYPE.CUSTOMER:
        return (
          <>
            <div className={styles.inputGroup}>
              <label>Customer Name</label>
              <input type="text" name="customerName" value={CustomerFormData.customerName} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" name="email" value={CustomerFormData.email} onChange={handleChange} required />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="tel" name="phoneNumber" pattern="[0-9]{11}" value={CustomerFormData.phoneNumber} onChange={handleChange} required />
            </div>
           
          </>
        );
      default:
        return null;
    }
  };

  const formatDateForInput = (isoDate) => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
  
    // Check if the changed input is a date field
    if (name === 'startDate' || name === 'endDate') {
      // Create a new Date object from the input value
      const date = new Date(value);
  
      // Convert the date to ISO 8601 format
      const isoDate = date.toISOString();
  
      // Update the form data with the ISO-formatted date
      setProjectFormData((prevData) => ({
        ...prevData,
        [name]: isoDate,
      }));
    } else {
      // For other form fields, handle normally
      setProjectFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleDropdown1Click = () => {
    fetchDropdown1Options();
  };
  
  const handleDropdown2Click = () => {
    fetchDropdown2Options();
  };
  
  const handleDropdown3Click = () => {
    fetchDropdown3Options();
  };

  const fetchDropdown1Options = async () => {
    try {
    
      const res = await Services.customer.getAllCustomers()
      setDropdown1Options(res);
    } catch (error) {
      console.error('Error fetching Dropdown 1 options:', error);
    }
  };
  
  const fetchDropdown2Options = async () => {
    try {
      const data = await Services.employee.getAllEmployees();
      setDropdown2Options(data);
    } catch (error) {
      console.error('Error fetching Dropdown 2 options:', error);
    }
  };
  
  const fetchDropdown3Options = async () => {
    try {
      const response = await Services.service.getAllServices();
      
      setDropdown3Options(response);
    } catch (error) {
      console.error('Error fetching Dropdown 3 options:', error);
    }
  };
  
  
  return (
    isOpen && (
      <div className={styles.popupOverlay} onClick={() => setIsOpen(false)}>
        <div className={styles.popupBox} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
          {/* {responsibility == RESPONSIBILITY_TYPE.ADD ?(<h2>Add {type.replace("_", " ")}</h2>)
                          : (<h2>Edit {type.replace("_", " ")}</h2>)} */}
          <form onSubmit={handleSubmit}>
            {renderInputs()}
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    )
  );
});

export default Popup;
