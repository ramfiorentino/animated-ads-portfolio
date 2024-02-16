import lafatmaingif from './lafat-banner-assets/lafatmaingif.gif'
import lafatbook from './lafat-banner-assets/lafatbook.gif'
import bluestar from './lafat-banner-assets/lafatstar-blue.png'
import turquoisestar from './lafat-banner-assets/lafatstar-turquoise.png'
import blackstar from './lafat-banner-assets/lafatstar-black.png'
import React from 'react';
import styles from './banner5Lafat.module.css';

function Banner5Lafat() {

  return (
    <>
      <div className={styles.banner}>
        <img className={styles.lafatmaingif} src={lafatmaingif} />
        <div className={styles.container2}>
          <img className={styles.turquoisestar} src={turquoisestar} />
          <img className={styles.lafatbook} src={lafatbook} />
          <img className={styles.bluestar} src={bluestar} />
        </div>
        <div className={styles.container3}>
          <img className={styles.blackstar} src={blackstar} />
          <img className={styles.blackstar} src={blackstar} />
          <img className={styles.blackstar} src={blackstar} />
        </div>
      </div>
    </>
  )
}

export default Banner5Lafat;