import React, { useEffect, useRef, useState } from 'react';
import Table, { ACTION_TYPE, TabsTypes } from '../../Components/Table/Table.tsx';
import styles from './Services.module.css';
import CustomBtn from '../../Components/Button/CustomBtn';
import Popup, {POPUP_TYPE, PopupRef} from '../../Components/Popup/Popup';
import {Services} from '../../Services/Services';

const ServicesComponent = () => {
    const [visibleTabs, setVisibleTabs] = useState<Set<keyof TabsTypes>>(new Set(["id"]));
    const popupRef = useRef<PopupRef>(null);
    const [services, setServices] = useState(null);
   

    useEffect(() =>{
      try {
        const fetchServices = async () => {
          
          const res = await Services.service.getAllServices();
          const keys = Object.keys(res[0]);
          const newVisibleTabs = new Set(keys as (keyof TabsTypes)[]);
         
          setVisibleTabs(newVisibleTabs);
          console.log(visibleTabs);
          
          setServices(res);
        }
        
        fetchServices();
      } catch(e) {
        alert(e)
      }
    }, [])
    
    const handleEdit = async (item: object) => {
      setServices(item);
      
      const res = await Services.service.getAllServices();
      setServices(res)
    };
    
    const handleDelete = (id: number) => {
      try {
            const deleteItem = async (id: number) => {
              await Services.service.deleteSerice(id)
              const updatedServices = await Services.service.getAllServices();
              
              setServices(updatedServices);
            }
            deleteItem(id);
          } catch (error) {
            alert(`something went wrong please tey again. because of ${error}`)
          }
    };
 
    
    const handleAddService = async (formData: any) => {
      try{
        
        await Services.service.addNewService(formData);
        const updatedServices = await Services.service.getAllServices();
  
        setServices(updatedServices);
        alert("successfully added.")
          
      } catch (e) {
          alert(`can not add because of ${e}`);
      }

    }

    return(
      
        <>
        <h2>Services</h2>
        <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <CustomBtn OnClick={() => popupRef?.current?.openPopup()}>
            <span>Add Service</span>
          </CustomBtn>
        </div>
        <Table  name={POPUP_TYPE.SERVICE}
                renderTabs={visibleTabs}  
                data={services}
                supportedActions={{
                edit: handleEdit,
                delete: handleDelete
            }}
            />
            <Popup ref={popupRef} type={POPUP_TYPE.SERVICE} onSubmit={handleAddService} />
          </div>
        </>
    )
}
export default ServicesComponent;