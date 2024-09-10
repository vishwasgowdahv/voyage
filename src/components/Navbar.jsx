import React from "react";
import styles from './Navbar.module.css'

export default function Navbar() {

  function handlemenuclick(){
    
    let d=document.getElementById('mobmenu');
    d.style.top='0vh';
    
  }
  function handlemobmenuclick(){
    let d=document.getElementById('mobmenu');
    d.style.top='-100vh';
  }
  return (
    <>
    <div id="mobmenu" className={styles.mobnav}>

    <div className={styles.mobleft}>
            <h1>VOYAGE</h1>
            <div onClick={handlemobmenuclick} className={styles.mobmenu}>
            <img src="public/assets/images/close.svg" alt="" />
          </div>
        </div>
        <div className={styles.mobright}>
       
          <div id="list" className={styles.moblist}>
            <li>HOME</li>
            <li>TRIPS</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
          </div>
         
        </div>

    </div>













      <nav id="nav">
        <div className={styles.left}>
            {/* <img src="public/assets/images/logo.png" alt="" /> */}
            <h1>VOYAGE</h1>
        </div>
        <div className={styles.right}>
        <div onClick={handlemenuclick} className={styles.menu}>
            <img src="public/assets/images/menu.png" alt="" />
          </div>
          <div id="list" className={styles.list}>
            <li>HOME</li>
            <li>TRIPS</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
          </div>
         
        </div>
      </nav>
    </>
  );
}
