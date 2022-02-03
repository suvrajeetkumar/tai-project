import styles from './section11.module.css'
export default function MeetupItem(props) {
    return(
             <div className={styles.section1wrapper}>
                <div  className={`${styles.section1} sectionwrapper`}  >
                    <h1 className={styles.header1}>About us</h1>
                    <p>TAI is engineered for EXTREME academic success by a team of instructional design experts from Harvard, Stanford, IIT Delhi, and IIT Kharagpur. TAI is all about stronger roots, i.e., the basic fundamental skills are taken to a whole new level because we have proven again and again over the years (while implementing in some of the best schools and universities across the world) and transforming thousands of struggling students into exam toppers, that when a student has a strong foundation, no obstacle or barrier can stop him/her from achieving his/her dreams.
                    </p>
                </div>
            </div>
    )
} 