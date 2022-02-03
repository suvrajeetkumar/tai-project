import styles from './section10.module.css'
export default function MeetupItem(props) {
    return(
             <div className={`${styles.section7wrapper}`}>
                 <h1 className={styles.title}>FAQs</h1>
                 <h1 className={styles.title}>Skill Based Activities</h1>
                 <div className={styles.leftsubsection}>
                 <div className={styles.leftsubsection1}>
                     <div className={styles.header1}>Who can attend this Invention Camp?</div>
                     <div className={styles.subitem}>All students from the age group of 6-18 years can enroll for the STEAM Invention Camp. Kids of age 2-6 can enroll for TAI Junior Invention Camp.</div>
                     
                 </div>
                 </div>
                
                 <div className={styles.rightsubsection}>
                 <div className={styles.rightsubsection1}>
                     <div className={styles.header1}>Where is the Invention Camp held?</div>
                     <div className={styles.subitem}>You can register here or call us on +91-8686766753. We are also having on-spot registrations at various schools. You can contact your school administration.</div>
                     
                 </div>
                 </div>

                 <div className={styles.rightsubsection}>
                 <div className={styles.rightsubsection1}>
                     <div className={styles.header1}>How do I enroll in the camp?</div>  
                     <div className={styles.subitem}>You can register here or call us on +91-8686766753. We are also having on-spot registrations at various schools. You can contact your school administration.</div>
                     
                 </div>
                 </div>
            </div>
    )
} 