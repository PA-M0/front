import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';
import { IoIosClose, IoIosMenu } from 'react-icons/io';


const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <button className={styles.drawerToggleBtn} onClick={toggleDrawer}>
        {isOpen ? ( <IoIosClose color={'#000'} size={30} /> ) : ( <IoIosMenu color={'#000'} size={30} /> )} 
      </button>
      
      
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
      <button className={styles.drawerToggleBtn} onClick={toggleDrawer}>
        {isOpen ? ( <IoIosClose  color={'#000'} size={30} /> ) : ( <IoIosMenu size={30} /> )} 
      </button>
        <ul className={styles.drawerUl}>
          <li className={styles.drawerLi}><Link to="/" className={styles.drawerLink}>Home</Link></li>
          <li className={styles.drawerLi}><Link to="/projects" className={styles.drawerLink}>Projects</Link></li>
          <li className={styles.drawerLi}><Link to="/contacts" className={styles.drawerLink}>Contacts</Link></li>
          <li className={styles.drawerLi}><Link to="/employees" className={styles.drawerLink}>Employees</Link></li>
          <li className={styles.drawerLi}><Link to="/customer" className={styles.drawerLink}>Customers</Link></li>
          <li className={styles.drawerLi}><Link to="/services" className={styles.drawerLink}>Services</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;
