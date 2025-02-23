import React, { useEffect, useRef, useState } from 'react';
import Table, { ACTION_TYPE, TabsTypes } from '../../Components/Table/Table.tsx';
import styles from './Customer.module.css';
import CustomBtn from '../../Components/Button/CustomBtn';
import Popup, {POPUP_TYPE, PopupRef} from '../../Components/Popup/Popup';
import {Services} from '../../Services/Services';

const Customer = () => {
    const [visibleTabs, setVisibleTabs] = useState<Set<keyof TabsTypes>>(new Set(["id"]));
    const popupRef = useRef<PopupRef>(null);
    const [customer, setCustomer] = useState(null);
   

    useEffect(() =>{
      try {
        const fetchCustomer = async () => {
          
          const res = await Services.customer.getAllCustomers();
        
          
          const keys = Object.keys(res[0]);
          const newVisibleTabs = new Set(keys as (keyof TabsTypes)[]);
          
          setVisibleTabs(newVisibleTabs);
          console.log(visibleTabs);
          
          setCustomer(res); 
        }
        
        fetchCustomer();
      } catch(e) {
        alert(e)
      }
    }, [])
    
    const handleEdit = async (item: object) => {
      setCustomer(item);
      const res = await Services.customer.getAllCustomers();
      setCustomer(res)
    };
    
    const handleDelete = (id: number) => {
      try {
            const deleteItem = async (id: number) => {
              await Services.customer.deleteCustomer(id)
              const updatedServices = await Services.customer.getAllCustomers();
              
              setCustomer(updatedServices);
            }
            deleteItem(id);
          } catch (error) {
            alert(`something went wrong please tey again. because of ${error}`)
          }
    };
 
    
    const handleAddCustomer = async (formData: any) => {
      try{
        
        await Services.customer.addNewCustomer(formData);
        const updatedServices = await Services.customer.getAllCustomers();
  
        setCustomer(updatedServices);
        alert("successfully added.")
          
      } catch (e) {
          alert(`can not add because of ${e}`);
      }

    }

    return(
      
        <>
        <h2>Customers</h2>
        <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <CustomBtn OnClick={() => popupRef?.current?.openPopup(POPUP_TYPE.CUSTOMER)}>
            <span>Add Customer</span>
          </CustomBtn>
        </div>
        <Table  name={POPUP_TYPE.CUSTOMER}
                renderTabs={visibleTabs}  
                data={customer}
                supportedActions={{
                edit: handleEdit,
                delete: handleDelete
            }}
            />
            <Popup ref={popupRef} type={POPUP_TYPE.CUSTOMER} onSubmit={handleAddCustomer} />
          </div>
        </>
    )
}
export default Customer;