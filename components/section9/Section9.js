import styles from './section9.module.css'
export default function MeetupItem(props) {
    return(
             <div className={styles.section1wrapper}>
                <div  className={`${styles.section1} sectionwrapper`}  >
                <div className={styles.header1}>Want to gift this for your loved ones or someone who needs it?</div>
                <div className={styles.contenttext}>Perfect choice to gift children for birthday, achievement or any occasion</div>
                <button className="button">Sent gift now</button>
                </div>
            </div>
    )
} 