import React from "react";
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import logo from "/assets/images/shipstearing.svg"
import moblogo from "/assets/images/shipstearingwhite.svg"
import closesvg from "/assets/images/close.svg";
import mobmenu from "/assets/images/menu.png";

export default function Navbar() {

  function handlemenuclick(){
    
    let d=document.getElementById('mobmenu');
    d.style.top='0vh';
    
  }
  function handlemobmenuclick(){
    let d=document.getElementById('mobmenu');
    d.style.top='-100vh';
  }
  function handlemoblink(){
    let d=document.getElementById('mobmenu');
    d.style.top='-100vh';
  }
  return (
    <>
    <div id="mobmenu" className={styles.mobnav}>

    <div className={styles.mobleft}>
    <Link onClick={handlemoblink} className={styles.moblogolink} to='/voyage/'>  <h1>V<span><img src={moblogo}alt="" /></span>YAGE</h1></Link>
            <div onClick={handlemobmenuclick} className={styles.mobmenu}>
            <img src={closesvg} alt="" />
          </div>
        </div>
        <div className={styles.mobright}>
       
          <div id="list" className={styles.moblist}>
          <li><Link onClick={handlemoblink} className={styles.moblink} to='/voyage/'>HOME</Link></li>
            <li><Link onClick={handlemoblink} className={styles.moblink} to='trips'>TRIPS</Link></li>
            <li><Link onClick={handlemoblink} className={styles.moblink} to='contact'>CONTACT</Link></li>
            <li><Link onClick={handlemoblink} className={styles.moblink} to='about'>ABOUT</Link></li>
          </div>
         
        </div>

    </div>













      <nav id="nav">
        <div className={styles.left}>
            {/* <img src="assets/images/logo.png" alt="" /> */}
           <Link className={styles.logolink} to='/voyage/'> <h1>V<span><img src={logo} alt="" /></span>YAGE</h1></Link>
        </div>
        <div className={styles.right}>
        <div onClick={handlemenuclick} className={styles.menu}>
            <img src={mobmenu} alt="" />
          </div>
          <div id="list" className={styles.list}>
          <li><Link className={styles.link} to='/voyage/'>HOME</Link></li>
            <li><Link className={styles.link} to='trips'>TRIPS</Link></li>
            <li><Link className={styles.link} to='contact'>CONTACT</Link></li>
            <li><Link className={styles.link} to='about'>ABOUT</Link></li>
          </div>
         
        </div>
      </nav>
    </>
  );
}
