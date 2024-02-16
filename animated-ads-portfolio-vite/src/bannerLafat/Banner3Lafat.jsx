import lafatmaingif from './lafat-banner-assets/lafatmaingif.gif'
import lafatbook from './lafat-banner-assets/lafatbook.gif'
import bluestar from './lafat-banner-assets/lafatstar-blue.png'
import turquoisestar from './lafat-banner-assets/lafatstar-turquoise.png'
import React from 'react';
import styles from './banner3Lafat.module.css';

function Banner3Lafat() {

    return (
      <>
    <div className={styles.banner}>
        <img className={styles.lafatmaingif} src={lafatmaingif} />
        <img className={styles.turquoisestar} src={turquoisestar} />
        <img className={styles.lafatbook} src={lafatbook} />
        <img className={styles.bluestar} src={bluestar} />
        <img className={styles.lafatmaingif} src={lafatmaingif} />
    </div>
</>
    )
  }
  
  export default Banner3Lafat;