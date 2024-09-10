import React from 'react'
import styles from './Hero.module.css'
export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.left}>
            <h4>Explore the Places like Never Before</h4>
        </div>
        <div className={styles.right}>
          <div className={styles.img1}>
            <img src="public/assets/images/sk2.png" alt="" />
          </div>
          <div className={styles.img2}>
            <img src="public/assets/images/mob-1.png" alt="" />
          </div>
        </div>
        
      </div>
      <div className={styles.endline}></div>
    </>
  )
}
