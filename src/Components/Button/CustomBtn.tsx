import React, { Children, ReactNode } from 'react';
import styles from './CustomBtn.module.css'
interface Props {
    OnClick: Function
    children: ReactNode

}

const CustomBtn = (props: Props) => {

    const {children, OnClick} = props;
    return (
     
     <>
      <button className={styles.button} onClick={OnClick}>{children}</button>
      </>  
    )
}
export default CustomBtn;