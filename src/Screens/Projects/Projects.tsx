import React, { useEffect, useRef, useState } from 'react';
import Table, { ACTION_TYPE, TabsTypes } from '../../Components/Table/Table.tsx';
import styles from './Projects.module.css';
import CustomBtn from '../../Components/Button/CustomBtn';
import Popup, {POPUP_TYPE, PopupRef} from '../../Components/Popup/Popup';
import {Services} from '../../Services/Services';

const Project = () => {
    const [visibleTabs, setVisibleTabs] = useState<Set<keyof TabsTypes>>(new Set(["id"]));
    const popupRef = useRef<PopupRef>(null);
    const [project, setProject] = useState(null);
    const [employee, setEmployee] = useState(null);

    useEffect(() =>{
      try {
        const fetchProject = async () => {
          
          const res = await Services.projects.getAllProjects();   
          
          const keys = Object.keys(res[0]);
          const newVisibleTabs = new Set(keys as (keyof TabsTypes)[]);
      
          setVisibleTabs(newVisibleTabs);
          setProject(res);
        }
        
        fetchProject();
      } catch(e) {
        alert(e)
      }
    }, [])
    
    const handleEdit = async (item: object) => {
      setProject(item);
      const res = await Services.projects.getAllProjects();
      setProject(res)
    };
    
    const handleDelete = (id: number) => {
      try {
            const deleteItem = async (id: number) => {
              await Services.projects.deleteProject(id)
              const updatedServices = await Services.projects.getAllProjects();
              
              setProject(updatedServices);
            }
            deleteItem(id);
          } catch (error) {
            alert(`something went wrong please tey again. because of ${error}`)
          }
    };
 
    
    const handleAddProject = async (formData: any) => {
      try{
        console.log(formData);
        await Services.projects.addNewProject(formData);
        const updatedServices = await Services.projects.getAllProjects();
  
        setProject(updatedServices);
        alert("successfully added.")
          
      } catch (e) {
          alert(`can not add because of ${e}`);
      }

    }

    return(
      
        <>
        <h2>Project</h2>
        <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <CustomBtn OnClick={() => popupRef?.current?.openPopup(POPUP_TYPE.PROJECT)}>
            <span>Add Project</span>
          </CustomBtn>
        </div>
        <Table  name={POPUP_TYPE.PROJECT}
                renderTabs={visibleTabs}  
                data={project}
                supportedActions={{
                edit: handleEdit,
                delete: handleDelete
            }}
            />
            <Popup ref={popupRef} type={POPUP_TYPE.PROJECT} onSubmit={handleAddProject} />
          </div>
        </>
    )
}
export default Project;