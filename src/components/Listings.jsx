import React, { Component } from "react";
import styles from './Listings.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Listings() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
      };
  return (
    <>
    <div className={styles.heading}><h1>VOYAGES</h1></div>
    <div className={styles.listings}>

        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/hampi/hampi1.jfif" alt="" /></div>
                <div><img src="assets/images/trips/hampi/hampi2.jpg" alt="" /></div>
                <div><img src="assets/images/trips/hampi/hampi3.jpg" alt="" /></div>
                <div><img src="assets/images/trips/hampi/hampi4.jpg" alt="" /></div>
                <div><img src="assets/images/trips/hampi/hampi5.jpg" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>HAMPI</h5></div>
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>










        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/gokarna/gokarna1.jfif" alt="" /></div>
                <div><img src="assets/images/trips/gokarna/gokarna2.jfif" alt="" /></div>
                <div><img src="assets/images/trips/gokarna/gokarna3.jfif" alt="" /></div>
                <div><img src="assets/images/trips/gokarna/gokarna4.jpg" alt="" /></div>
                <div><img src="assets/images/trips/gokarna/gokarna5.jpg" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>GOKARNA</h5></div>
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>













        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/chikkmangaluru/chikkmangaluru1.webp" alt="" /></div>
                <div><img src="assets/images/trips/chikkmangaluru/chikkmangaluru2.jpg" alt="" /></div>
                <div><img src="assets/images/trips/chikkmangaluru/chikkmangaluru3.jpg" alt="" /></div>
                <div><img src="assets/images/trips/chikkmangaluru/chikkmangaluru4.jpg" alt="" /></div>
                <div><img src="assets/images/trips/chikkmangaluru/chikkmangaluru5.jpg" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>CHIKKAMANGALURU</h5></div>
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>















        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/coorg/coorg1.jpg" alt="" /></div>
                <div><img src="assets/images/trips/coorg/coorg2.jpg" alt="" /></div>
                <div><img src="assets/images/trips/coorg/coorg3.webp" alt="" /></div>
                <div><img src="assets/images/trips/coorg/coorg4.jpg" alt="" /></div>
                <div><img src="assets/images/trips/coorg/coorg5.jpg" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>COORG</h5></div>
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>














        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/mysore/mysore1.jfif" alt="" /></div>
                <div><img src="assets/images/trips/mysore/mysore2.jpg" alt="" /></div>
                <div><img src="assets/images/trips/mysore/mysore3.jfif" alt="" /></div>
                <div><img src="assets/images/trips/mysore/mysore4.jfif" alt="" /></div>
                <div><img src="assets/images/trips/mysore/mysore5.jpg" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>MYSORE</h5></div>
                {/* <div className={styles.desc}>Witness the Marvel Architectures of Vijayanaga Empires</div> */}
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>










        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/dandeli/dandeli1.jpg" alt="" /></div>
                <div><img src="assets/images/trips/dandeli/dandeli2.jpg" alt="" /></div>
                <div><img src="assets/images/trips/dandeli/dandeli3.jpeg" alt="" /></div>
                <div><img src="assets/images/trips/dandeli/dandeli4.jpg" alt="" /></div>
                <div><img src="assets/images/trips/dandeli/dandeli5.webp" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>DANDELI</h5></div>
                {/* <div className={styles.desc}>Witness the Marvel Architectures of Vijayanaga Empires</div> */}
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>
















        <div className={styles.list}>
        <Slider {...settings}>
                <div><img src="assets/images/trips/udupi/udupi1.jfif" alt="" /></div>
                <div><img src="assets/images/trips/udupi/udupi2.jpg" alt="" /></div>
                <div><img src="assets/images/trips/udupi/udupi3.jpg" alt="" /></div>
                <div><img src="assets/images/trips/udupi/udupi4.jpg" alt="" /></div>
                <div><img src="assets/images/trips/udupi/udupi5.webp" alt="" /></div>
                
            </Slider>
            <div className={styles.bottom}>
                <div className={styles.badge}>
                    <h4>Bagpacking</h4>
                </div>
                <div className={styles.header}><h5>UDUPI</h5></div>
                {/* <div className={styles.desc}>Witness the Marvel Architectures of Vijayanaga Empires</div> */}
                <div className={styles.info}>
                <div className={styles.duration}>2 Days 1 Night</div>
                <div className={styles.cost}><h4>₹ 2,999 </h4><h5> ₹ 4,999</h5></div>
                </div>
                <div className={styles.btns}>
                <div className={styles.details}>View Details &gt;&gt;</div>
                <div className={styles.bookbtn}><button>Book Now</button></div>
                </div>
            </div>
        </div>

       
    </div>
      
    </>
  )
}
