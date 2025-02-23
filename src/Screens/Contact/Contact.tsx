import React, { useEffect, useRef, useState } from 'react';
import Table, { ACTION_TYPE, TabsTypes } from '../../Components/Table/Table.tsx';
import styles from './Contact.module.css';
import CustomBtn from '../../Components/Button/CustomBtn';
import Popup, {POPUP_TYPE, PopupRef} from '../../Components/Popup/Popup';
import {Services} from '../../Services/Services';

const Contact = () => {
    const [visibleTabs, setVisibleTabs] = useState<Set<keyof TabsTypes>>(new Set(["id"]));
    const popupRef = useRef<PopupRef>(null);
    const [Contact, setContact] = useState(null);
   

    useEffect(() =>{
      try {
        const fetchContacts = async () => {
          
          const res = await Services.contact.getAllContacts();
          const keys = Object.keys(res[0]);
          const newVisibleTabs = new Set(keys as (keyof TabsTypes)[]);
         
          setVisibleTabs(newVisibleTabs);
          setContact(res);
        }
        
        fetchContacts();
      } catch(e) {
        alert(e)
      }
    }, [])
    
    const handleEdit = async (item: object) => {
      setContact(item);
      const res = await Services.contact.getAllContacts();
      setContact(res)
      console.log("here");
      
    };
    
    const handleDelete = (id: number) => {
      try {
            const deleteItem = async (id: number) => {
              await Services.contact.deleteContact(id)
              const updatedServices = await Services.contact.getAllContacts();
              
              setContact(updatedServices);
            }
            deleteItem(id);
          } catch (error) {
            alert(`something went wrong please tey again. because of ${error}`)
          }
    };
 
    
    const handleAddContact = async (formData: any) => {
      try{
        
        await Services.contact.addNewContacts(formData);
        const updatedServices = await Services.contact.getAllContacts();
  
        setContact(updatedServices);
        alert("successfully added.")
          
      } catch (e) {
          alert(`can not add because of ${e}`);
      }

    }

    return(
      
        <>
        <h2>Persons</h2>
        <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <CustomBtn OnClick={() => popupRef?.current?.openPopup(POPUP_TYPE.CONTACT_PERSON)}>
            <span>Add Person</span>
          </CustomBtn>
        </div>
        <Table  name={POPUP_TYPE.CONTACT_PERSON}
                renderTabs={visibleTabs}  
                data={Contact}
                supportedActions={{
                edit: handleEdit,
                delete: handleDelete
            }}
            />
            <Popup ref={popupRef} type={POPUP_TYPE.CONTACT_PERSON} onSubmit={handleAddContact} />
          </div>
        </>
    )
}
export default Contact;