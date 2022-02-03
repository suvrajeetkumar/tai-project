import styles from './section6.module.css'
export default function MeetupItem(props) {
    return(
             <div  className={styles.section6wrapper}>
                 <h1 className={styles.headertext}>TAI STEAM Invention camp has three important focus areas for a child’s wholesome growth.</h1>
                <div>

                <div className={`${styles.section6} sectionwrapper`}>
                <div className={`${styles.kid} ${styles.leftsubsection1}`}></div>
                <div className={`${styles.text} ${styles.rightsubsection1}`}>Is your child frustrated with lockdown?
                    let your child experience the joy of immersing in science and technology in the easiest and fun way possible!</div>
                </div>
                
                </div>
                <div>
                    
                <div className={`${styles.section6} sectionwrapper`}>
                <div className={`${styles.text} ${styles.leftsubsection2}`}>Is your child frustrated with lockdown?
                    let your child experience the joy of immersing in science and technology in the easiest and fun way possible!</div>
                <div className={`${styles.kid} ${styles.rightsubsection2}`}></div>
                </div>
                
                </div>

                <div>

                <div className={`${styles.section6} sectionwrapper`}>
                <div className={`${styles.kid} ${styles.leftsubsection1}`}></div>
                <div className={`${styles.text} ${styles.rightsubsection1}`}>Is your child frustrated with lockdown?
                    let your child experience the joy of immersing in science and technology in the easiest and fun way possible!</div>
                </div>

                </div>
                
                
            </div>
    )
}