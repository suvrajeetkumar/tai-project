import styles from './section5.module.css'
export default function MeetupItem(props) {
    return(
             <div className='sectionwrapper'>
                <h1>Watch TAI Code-A-Thon Demo</h1>
                <div className={styles.videoframe}></div>
                <h1>What makes TAI ‘Invention + Code-A-Thon’ Camp special?</h1>
                <p>After 9 years of research, TAI camps were developed by a team of educators from Harvard-Stanford-IIT. The program is so easy that even a child of 6 years old can learn very fast, through amazing games. Every class of TAI is highly outcome-based - you can track progress after every single class.

                    Each game level is carefully designed to pinpoint and solve skill and concept gaps to succeed in product, website or game development. TAI success coaches are highly qualified, trained and certified through state-of-the-art training processes at TAI.

                    TAI is very affordable but the quality of learning and outcomes is far higher than any other substandard or money-focused coding or science camps available in the market.</p>
            </div>
    )
} 