import banner3 from './sales-banner/sales-banner-bg-3.png'
import React from 'react';
import styles from './banner3sales.module.css';


function Banner3Sales() {

    return (
      <>
  <div className={styles.banner3}>
    <div id={styles.bgcontainer3}>
      <div className={styles.backgroundimages}>
        <img id={styles.bgimage3} src={banner3} />
      </div>
      <div className={styles.textcontent}>
        <div className={styles.textcontent1}>
        <p id={styles.specialoffer} className={styles.boldtext}>
            SPECIAL OFFER!
          </p>
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
      </div>
    </div>
  </div>
</>
    )
  }
  
  export default Banner3Sales;