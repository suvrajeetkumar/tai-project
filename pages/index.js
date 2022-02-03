import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Section1 from '../components/section1/Section1'
import Section2 from '../components/section2/Section2'
import Section3 from '../components/section3/Section3'
import Section4 from '../components/section4/Section4'
import Section5 from '../components/section5/Section5'
import Section6 from '../components/section6/Section6'
import Section7 from '../components/section7/Section7'
import Section8 from '../components/section8/Section8'
import Section9 from '../components/section9/Section9'
import Section10 from '../components/section10/Section10'
import Section11 from '../components/section11/Section11'
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className='container'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      </div>
      
      
      
    </div>
  )
}
