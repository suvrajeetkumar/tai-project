import styles from './dropdownmodel.module.css'
import {useState,useEffect} from "react";
import  ReactDOM  from 'react-dom';
export default function MeetupItem({show,onClose}) {
    const[isBrowser,setBrowser] = useState(false);
    useEffect(()=>{
        setBrowser(true);
    },[]);

    const handleClose = (e) =>{
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        
        <div className={styles.section1wrapper}>
          
           
           <div className={styles.modal}>
                <div className={styles.subsectionswrapper}>
                    <div className={styles.subsections}><div className={styles.kid}></div></div>
                    <div className={styles.subsections}>
                        <h2>Join the League of Successful TAI Students & Parents Globally!!</h2>
                        <div className={styles.inputwrapper}>
                        <div>Student Name</div>
                        <input className={styles.input}/>
                        </div>
                        <div className={styles.inputwrapper}>
                        <div>Student Name</div>
                        <input className={styles.input}/>
                        </div>
                        <div className={styles.inputwrapper}>
                        <div>Student Name</div>
                        <input className={styles.input}/>
                        </div>
                    </div>
                        
                </div>
               
                <button onClick={handleClose} className={styles.buttonstyle}>close</button>
           </div>
           <a onClick={handleClose} className={styles.backdrop}></a> 
        </div>
    ) : null; 
        
    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else{
        return null;
    }
    
} 