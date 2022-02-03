import styles from './section3.module.css'
export default function MeetupItem(props) {
    return(
             <div className={`${styles.section3wrapper} sectionwrapper`}>
                 <h1 className={styles.headertext}>Program — Curriculum</h1>
                 <div >In just 2 months your child will be mastering coding, web development, game development and how to design, build and launch a product. The program strengthens math, IQ, logical reasoning, problem solving, focus, etc., that not only helps your child to succeed in school but also ensures a strong foundation for successful careers in the future.</div>

                <div  className={styles.section3}  >
                <div className={styles.halfsections}>
                    <h1>Fostering Innovation</h1>
                    <p>Students will be learning the process of innovation and the science behind innovation.

                        INVENTIVE MINDSET
                        HOW INVENTIONS HAPPENED?
                        INNOVATION PROJECT
                    </p>
                </div>
                <div className={styles.halfsections}>
                    <h1>Code-A-Thon</h1>
                    <p>
                    Students will be learning coding, game development and web development in less than 2 months. Coding develops logic and reasoning skills, math and very vital learning skills. Students learn basic to very advanced coding skills independently by playing amazing games. No coding knowledge is required to start.

                    CODING
                    WEB DEVELOPMENT
                    GAME DEVELOPMENT
                    </p>
                </div>
                </div>

                <div  className={styles.section3}  >
                <div className={styles.halfsections}>
                    <h1>UI/UX and Design</h1>
                    <p>Students will be learning the process of innovation and the science behind innovation.

                        INVENTIVE MINDSET
                        HOW INVENTIONS HAPPENED?
                        INNOVATION PROJECT
                    </p>
                </div>
                <div className={styles.halfsections}>
                    <h1>Learning Skills</h1>
                    <p>
                    Students will be learning coding, game development and web development in less than 2 months. Coding develops logic and reasoning skills, math and very vital learning skills. Students learn basic to very advanced coding skills independently by playing amazing games. No coding knowledge is required to start.

                    CODING
                    WEB DEVELOPMENT
                    GAME DEVELOPMENT
                    </p>
                </div>
                </div>


                <button className='button'>Enroll Now</button>

            </div>
    )
} 