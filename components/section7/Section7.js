import styles from './section7.module.css'
export default function MeetupItem(props) {
    return(
             <div className={`${styles.section7wrapper}`}>
                 <h1 className={styles.title}>Skill Based Activities</h1>
                 <div className={styles.leftsubsection}>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                 </div>
                 <div className={styles.rightsubsection}>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                 </div>
                 <div className={styles.leftsubsection}>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                     <div className={styles.subitem}></div>
                 </div>
            </div>
    )
} 