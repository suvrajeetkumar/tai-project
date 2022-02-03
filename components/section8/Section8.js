import styles from './section8.module.css'
export default function MeetupItem(props) {
    return(
             <div  className={styles.section8wrapper}>
                 <h1 className={styles.headertext}>Pricing</h1>
                 <div className={styles.header2}>Affordable Packages</div>
                    <div className={styles.header3}>We’re mission-driven not money-driven.</div>
                 
                <div className={`${styles.cardsections} sectionwrapper`}>
                    <div className={`${styles.text} ${styles.cardsection}`}>TAI Invention Camp + Code-A-Thon Registration</div>
                     
                    <div className={styles.cardsection}>Group Registration</div>
                </div>
                
                
                
            </div>
    )
}