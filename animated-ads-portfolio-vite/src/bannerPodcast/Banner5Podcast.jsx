import bg from './podcast-banner/podcast-banner-bg-5.png'
import img from './podcast-banner/podcast-banner-img-5.png'
import React from 'react';
import styles from './banner5podcast.module.css';


function Banner5Podcast() {

    return (
      <>
    <div className={styles.banner}>
    <div id={styles.bgcontainer}>
      <div className={styles.backgroundimages}>
        <img id={styles.bgimage1} src={img} />
        <img id={styles.bgimage2} src={bg} />
      </div>
      <div className={styles.textcontent}>
        <div className={styles.textcontent1}>

        <p id={styles.optimal} className={styles.boldtext}>
        OPTIMAL ALLIANCE</p>
        <p id={styles.newpodcast} className={styles.regulartext}>
          New Podcast on
          <i className="fa-brands fa-spotify" id={styles.icon}></i>
          <i className="fa-solid fa-podcast" id={styles.icon}></i>
          </p>
          <h1 id={styles.meetthe} className={styles.extraboldtext}>
          MEET <br/> THE GAME <br/> CHANGERS</h1>
          <p id={styles.with} className={styles.regulartext}>
          With Alycia Rubeth</p>

        </div>
      </div>
    </div>
  </div>
</>
    )
  }
  
  export default Banner5Podcast;