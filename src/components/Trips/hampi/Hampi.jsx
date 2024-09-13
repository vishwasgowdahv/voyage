import React from 'react'
import Video1 from '/assets/videos/hampi1.mp4'
import Styles from './Hampi.module.css'
export default function Hampi() {
  return (
    <>
      <div className={Styles.heading}> <h1>HAMPI</h1> </div>
      <div className={Styles.content1}>
        <div className={Styles.left}>
          <h3>Pack your bags to witness the Ancient Marvel Architecture of Vijaynar Empire</h3>
        </div>
      <div className={Styles.right}><video src={Video1} autoPlay muted loop></video></div>
      </div>
    </>
  )
}
