import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        
        <div className={styles.div1}>
        <div className={styles.first}>
            <h1>VOYAGE <span>®</span></h1>
            <h5>©2024 VOYAGE. All Rights Reserved</h5>
        </div>
        </div>
        <div className={styles.div2}>
        <div className={styles.third}>
        <div className={styles.head2}>
            <h1>QUICK LINKS</h1>
            </div>
           <div className={styles.lists2}>
            <h4>Bagpacking</h4>
            <h4>Budget</h4>
            <h4>Family</h4>
            <h4>Groups</h4>
           </div>
        </div>
        <div className={styles.second}>
            <div className={styles.head1}>
            <h1>CONNECT WITH US</h1>
            </div>
           <div className={styles.lists}>
          <img src="assets/images/instagram.svg" alt="" />
          <img src="assets/images/twitter.svg" alt="" />
          <img src="assets/images/youtube.svg" alt="" />
          <img src="assets/images/linkedin.svg" alt="" />
           </div>
        </div>
        </div>
         
      </div>
    </>
  )
}
