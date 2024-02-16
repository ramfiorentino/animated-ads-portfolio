import lafatmaingif from './lafat-banner-assets/lafatmaingif.gif'
import React from 'react';
import styles from './banner1Lafat.module.css';

function Banner1Lafat() {

    return (
      <>
    <div className={styles.banner}>
        <img className={styles.lafatmaingif} src={lafatmaingif} />
    </div>
</>
    )
  }
  
  export default Banner1Lafat;