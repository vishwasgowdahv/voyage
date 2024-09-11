import React from 'react'
import styles from './RecentTrips.module.css'
export default function RecentTrips() {
  return (
    <>
      <div className={styles.heading}><h1>RECENT TRAVEL STORIES</h1></div> 

      <div className={styles.trips}>
        <div className={styles.trip}>
            <div className={styles.imgdiv}>
                <img src="assets/images/trips/gokarna/gokarna3.jfif" alt="" />
                <h5>View Story &gt;&gt;</h5>
            </div>
            <div className={styles.place}>
                <h3>GOKARNA</h3>
            </div>
        </div>
        

        <div className={styles.trip}>
            <div className={styles.imgdiv}>
                <img src="assets/images/trips/hampi/hampi3.jpg" alt="" />
                <h5>View Story &gt;&gt;</h5>
            </div>
            <div className={styles.place}>
                <h3>HAMPI</h3>
            </div>
        </div>

        <div className={styles.trip}>
            <div className={styles.imgdiv}>
                <img src="assets/images/trips/dandeli/dandeli1.jpg" alt="" />
                <h5>View Story &gt;&gt;</h5>
            </div>
            <div className={styles.place}>
                <h3>DANDELI</h3>
            </div>
        </div>

        <div className={styles.trip}>
            <div className={styles.imgdiv}>
                <img src="assets/images/trips/mysore/mysore3.jfif" alt="" />
                <h5>View Story &gt;&gt;</h5>
            </div>
            <div className={styles.place}>
                <h3>MYSORE</h3>
            </div>
        </div>
      </div>
    </>
  )
}
