import React from "react";
import Video1 from "/assets/videos/hampi1.mp4";
import Styles from "./Hampi.module.css";
import map from '/assets/images/map.svg';
import { Link } from "react-router-dom";
export default function Hampi() {
  return (
    <>
      <div className={Styles.heading}>
        {" "}
        <h1>HAMPI</h1>{" "}
      </div>
      <div className={Styles.content1}>
        <div className={Styles.left}>
          <h3>
            Pack your bags to witness the Ancient Marvel Architecture of
            Vijaynar Empire
          </h3>
        </div>
        <div className={Styles.right}>
          <video src={Video1} autoPlay muted loop></video>
        </div>
      </div>
      <div className={Styles.spline1}></div>
      <div className={Styles.content2}>
      <h3>PLACES TO VISIT</h3>
        <div className={Styles.subcont2}>
        <div className={Styles.left2}>
          <ul className={Styles.ul}>
            <li>Megalithic site.</li>
            <li>Coracle ride.</li>
            <li>Cliff Jumping. </li>
            <li>Krishna Temple.</li>
            <li>Anjanadri Hill.</li>
            <li>Stone Chariot. </li>
            <li>Vijaya Vittala Temple </li>
            <li>Lakshmi Narasimha Temple. </li>
            <li>Virupaksha Temple </li>
            <li>Stepped Tank</li>
          </ul>
        </div>
        <div className={Styles.right2}>
          <img src={map} alt="" />
        </div>
        </div>
      </div>
      <div className={Styles.spline1}></div>
      <div className={Styles.content3}>
      <h3>ITINERARY</h3>
        <div className={Styles.left3}>
        
          <div className={Styles.subcont3}>
            <h5>DAY 0</h5>
            <ul>
              <li>Depart from Bengaluru by 10PM. </li>
              <li>Overnight journey along with music and cool breeze. </li>
            </ul>
          <h5>DAY 1</h5>
          <ul className={Styles.ul}>
            <li>Reach the homestay and freshen up. </li>
            <li>Breakfast in homestay. </li>
            <li>Start towards megalithic site. </li>
            <li>Hike to the largest megalithic site of India. </li>
            <li>Lunch ( self-sponsored ) </li>
            <li>Reach Sanapura lake, relax by the lakeside or take a dive or go for a coracle ride and cliff jumping (self-sponsored ) </li>
            <li>Trek up the small hill nearby to the northen banks of the Thungabhadra river to witness beautiful sunset. </li>
            <li>It’s time to get back to the stay to laze around.</li>
            <li> Dinner with tales of the group.</li>
          </ul>

          <h5>DAY 2</h5>
          <ul className={Styles.ul}>
          <li>Wake up early morning and freshen up. </li>
          <li>Hike up to Anjanadri Hill to watch the sunrise.</li>
          <li>Have breakfast at stay. </li>
          <li>Day begins by visiting different historical sites of Hampi along with the guide’s information. </li>
          <li>Virupaksha temple </li>
          <li>Vijaya Vittala temple </li>
          <li>Stone chariot </li>
          <li>Narasimha statue </li>
          <li>Badavi linga. </li>
          <li>Lotus mahal </li>
          <li>Stepped tank and many more. </li>
          <li>Lunch stop ( self- sponsored ) </li>
          <li>Take a stroll to the flea market and shop the things you want to. </li>
          <li>Journey back to Bengaluru. </li>
          <li>Reach Bengaluru by 10:30PM.</li>
          </ul>
          </div>
        </div>
        <div className={Styles.right3}></div>
      </div>
      <div className={Styles.content4}>
      <h3>INCLUSIONS & EXCLUSIONS</h3>
        <div className={Styles.left4}>
        
          <div className={Styles.subcont4}>
          
          <h5>INCLUSIONS</h5>
          <ul className={Styles.ul}>
          <li>Entire travel by Tempo Traveller/Mini bus.</li>
          <li>Stay at campsite. </li>
          <li>3 meals— 2 Breakfast & 1 Dinner. </li>
          <li>Trip leader throughout the trip. </li>
          <li>Entry tickets are included.</li>
          <li>Government approved guide. </li>
          <li>Local transportation for sightseeing. </li>
          <li>Accommodation on sharing basis.</li>
          </ul>

          <h5>EXCLUSIONS</h5>
          <ul className={Styles.ul}>
          <li>Travel, Accidental, and Medical Insurance. </li>
          <li>Cost arises due to uncontrollable circumstances like bad weather conditions, landslides, or some public protest. </li>
          <li>Water sports or any activity other than mentioned in the Itinerary. </li>
          <li>Food - which are mentioned as self sponsored. </li>
          <li>Anything not mentioned under “inclusions”</li>
          </ul>
          </div>
        </div>
        <div className={Styles.right4}></div>
      </div>


      <div className={Styles.content5}>
      <h3>THINGS TO CARRY</h3>
        <div className={Styles.subcont5}>
        <div className={Styles.left5}>
          <ul className={Styles.ul}>
          <li>Soft copy of your Aadhar/Voter ID ( Mandatorily required for permits) </li>
          <li>Small backpack to carry your essentials during the trek. </li>
          <li>Water bottles - 2 ( 1L each ) </li>
          <li>Lunch box and spoon to carry your packed lunch.</li>
          <li>Rain coat / Bag covers in case ofrains.</li>
          <li>A comfortable pair of shoes with good grip fortrekking Flip flops for lazing around the campsite. </li>
          <li>Torch / Head lamp to be used at night. </li>
          <li>Power bank. </li>
          <li>Extra pair of clothes to change into once wet </li>
          <li>Polybags to pack your wet clothes. </li>
          <li>Extra cash for meals not included in the itinerary. </li>
          <li>Shampoo / dettol antiseptic liquid / Sneezing ( Nashe ) powderto stay safe fromleeches. </li>
          <li>Personal medical kit. Speaker</li>
          <li>Hat, Sweater & Umbrella.</li>
          <li>AND MOST IMPORTANTLY YOUR SENSE OF HUMOUR AND THE SPIRIT OF ADVENTURE.</li>
          </ul>
        </div>
        <div className={Styles.right5}></div>
        </div>
      </div>

      <div className={Styles.bookbtn}><button><Link to='book' className={Styles.bookbtnlink} >Book Now</Link></button></div>
    </>
  );
}
