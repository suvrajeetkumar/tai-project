import styles from './section2.module.css'
export default function MeetupItem(props) {
    return(
             <div  className={styles.section2wrapper}>
                 <h1 className={styles.headertext}>Science Made Fun!</h1>
                <div className={`${styles.section2} sectionwrapper`}>
               
                <div className={styles.wrapper2}><div className={styles.text}>Is your child frustrated with lockdown?
                     let your child experience the joy of immersing in science and technology in the easiest and fun way possible!</div>
                     <div><button>ENROLL YOUR CHILD</button></div></div>
                <div className={styles.kid}></div>
                </div>
                
                
                
            </div>
    )
}