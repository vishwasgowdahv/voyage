import React from 'react'
import styles from './Book.module.css';
import whatsapp from '/assets/images/whatsapp.svg';
import call from '/assets/images/call.svg';

export default function Book() {
  return (
    <div>
      <h2 className={styles.heading} >BOOKINGS</h2>
      <h3 className={styles.subheading} >ALL BOOKINGS ARE ONLY DONE THROUGH WHATSAPP OR VIA CALL</h3>
      <div className={styles.images}>
        <div className={styles.left}>
          <img src={whatsapp} alt="" />
          <h4>+91 8431705783</h4>
        </div>
        <div className={styles.right}>
          <img src={call} alt="" />
          <h4>+91 8431705783</h4>
        </div>
      </div>
    </div>
  )
}
