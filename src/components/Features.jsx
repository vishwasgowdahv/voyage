import React from 'react'
import styles from './Features.module.css'

export default function Features() {
  return (
    <>
      <div className={styles.heading}><h1>WHY TO CHOOSE US</h1></div>
      <div className={styles.contents}>
        <div className={styles.con}>
            <div className={styles.sticker}>
                <img src="assets/images/certificate.svg" alt="" />
            </div>
            <div className={styles.desc}>
                <h5>Certified Mountaineer lead for all Mountain Trekkings</h5>
            </div>
        </div>









        <div className={styles.con}>
            <div className={styles.sticker}>
                <img src="assets/images/teamlead.svg" alt="" />
            </div>
            <div className={styles.desc}>
                <h5>Supportive and Motivative Team Leaders through out your Trip</h5>
            </div>
        </div>







        <div className={styles.con}>
            <div className={styles.sticker}>
                <img src="assets/images/budget.svg" alt="" />
            </div>
            <div className={styles.desc}>
                <h5>Best Pricing options from all other Agencies out there</h5>
            </div>
        </div>









        <div className={styles.con}>
            <div className={styles.sticker}>
                <img src="assets/images/gifts.svg" alt="" />
            </div>
            <div className={styles.desc}>
                <h5>Specially Crafted souvenirs of the covered Places</h5>
            </div>
        </div>



       




        

      </div> 
    </>
  )
}
