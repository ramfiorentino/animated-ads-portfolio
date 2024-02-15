import banner5 from './sales-banner/sales-banner-bg-5.png'
import React from 'react';
import styles from './banner5sales.module.css';


function Banner5Sales() {

    return (
      <>
  <div className={styles.banner}>
    <div id={styles.bgcontainer}>
      <div className={styles.bggraphiccontainer}></div>
      <div className={styles.backgroundimages}>
        <img id={styles.bgimage} src={banner5} />
      </div>
      <div className={styles.textcontent}>
        <div className={styles.textcontent1}>
          <h1 id={styles.super} className={styles.extraboldtext}>
            SUPER
          </h1>
          <div id={styles.sale} className={styles.extraboldtext}>
            SALE
          </div>
          <p id={styles.weekend} className={styles.boldtext}>
            THIS WEEKEND ONLY
          </p>
          <p id={styles.upTo} className={styles.regulartext}>
            Up to 50% OFF
          </p>
        </div>
        <div className={styles.textcontent2}>
        <p id={styles.specialoffer} className={styles.boldtext}>
            SPECIAL <br/> OFFER!
          </p>
        </div>
      </div>
    </div>
  </div>
</>
    )
  }
  
  export default Banner5Sales;