import React from 'react';
import styles from './banner3Coilabs.module.css';
import spiral from './coilabs-banner-assets/spiral.gif'

function Banner3Coilabs() {

  return (
    <>

      <div id={styles.logocontainer}>
        <svg id={styles.coilabslogo3} width="226" height="535" viewBox="0 0 226 535" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <path id={styles.C} d="M27.5 0H111.5V116.5H23C9.8 116.5 0 102.5 0 91.5V22.5C0 11 13 0 27.5 0Z" fill="black" />
          <path id={styles.O} d="M115 21C115 13.5 123 1.00001 137 1.00001H205C217 1 226 11.5 226 21V93C226 105.5 214.5 117 205 117H140.5C128.5 117 115 105 115 93V21Z" fill="black" />
          <path id={styles.I} d="M89 140H0V256H89V140Z" fill="black" />
          <path id={styles.L} d="M168 141H93V256.5H204V218H168V141Z" fill="black" />
          <path id={styles.A} d="M0 306.5V395.5H110.5V306.5C110.5 287 99 280 88 280H25C13.5 280 0 291 0 306.5Z" fill="black" />
          <path id={styles.B} d="M198.5 280H114V396C138.167 396 184.6 395.5 193 395.5C211 395.5 218.714 381.749 220.5 375.5C224.5 361.5 222.5 348.5 221.5 342.5C220.5 336.5 211.5 319 197 319C211.5 319 215 305 215 300C215 286.999 207 280 198.5 280Z" fill="black" />
          <path id={styles.S} d="M31 419H109.5V456.5H83.5C88.5 456.5 112 466 112 495.5C112 513.5 102.5 535 86 535H0V495.5H25C14 495.5 0 486 0 457.5C0 429 15.5 419 31 419Z" fill="black" />
          <rect id={styles.dot} fill="black" x="140" y="515" width="20" height="20" />

        </svg>
      </div>

      <div className={styles.banner}>


        <svg id={styles.smalltext} width="156" height="557" viewBox="0 0 156 557" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M155.224 5.95413L155.224 24.1413L130 24.1413L130 4.97982C130 2.12183 133.031 -9.70072e-07 135.413 -8.65967e-07L150.352 -2.12943e-07C152.842 -1.04105e-07 155.224 2.81468 155.224 5.95413Z" fill="black" />
          <path d="M150.894 26.3064C152.517 26.3064 155.224 28.0385 155.224 31.0697L155.224 45.7926C155.224 48.3908 152.95 50.3394 150.894 50.3394L135.305 50.3394C132.598 50.3394 130.108 47.8495 130.108 45.7926L130.108 31.8275C130.108 29.2293 132.706 26.3064 135.305 26.3064L150.894 26.3064Z" fill="black" />
          <path d="M155.224 71.7744L155.224 52.5046L130.108 52.5046L130.108 71.7744L155.224 71.7744Z" fill="black" />
          <path d="M155.224 90.0698L155.224 73.8313L130.217 73.8313L130.217 97.8643L138.552 97.8643L138.552 90.0698L155.224 90.0698Z" fill="black" />
          <path d="M149.486 100.246L130.217 100.246L130.217 124.171L149.486 124.171C153.708 124.171 155.224 121.681 155.224 119.299L155.224 105.659C155.224 103.169 152.842 100.246 149.486 100.246Z" fill="black" />
          <path d="M155.224 145.281L155.224 126.985L130.108 126.985C130.108 132.218 130.217 142.271 130.217 144.09C130.217 147.987 133.194 149.657 134.547 150.044C137.578 150.91 140.393 150.477 141.692 150.261C142.991 150.044 146.78 148.095 146.78 144.956C146.78 148.095 149.811 148.853 150.894 148.853C153.708 148.853 155.224 147.121 155.224 145.281Z" fill="black" />
          <path d="M155.224 159.462L155.224 176.459L147.105 176.459L147.105 170.829C147.105 171.912 145.048 177 138.661 177C134.763 177 130.108 174.943 130.108 171.371L130.108 152.75L138.661 152.75L138.661 158.163C138.661 155.782 140.717 152.75 146.888 152.75C153.059 152.75 155.224 156.106 155.224 159.462Z" fill="black" />
          <path d="M41.8731 437.328V428.112C41.8731 425.664 43.0971 424.44 45.5451 424.44H52.3131L53.3931 425.28V426.264H45.5211C44.4331 426.264 43.8891 426.808 43.8891 427.896V437.544C43.8891 438.632 44.4331 439.176 45.5211 439.176H53.3931V440.16L52.3131 441H45.5451C43.0971 441 41.8731 439.776 41.8731 437.328ZM56.7616 441V424.44H64.6096C67.0576 424.44 68.2816 425.664 68.2816 428.112V430.752C68.2816 432.832 67.3936 434.016 65.6176 434.304L68.7616 440.52L68.4976 441H66.7936L63.4576 434.424H58.7776V441H56.7616ZM58.7776 432.6H64.6336C65.7216 432.6 66.2656 432.056 66.2656 430.968V427.896C66.2656 426.808 65.7216 426.264 64.6336 426.264H58.7776V432.6ZM70.4331 424.872L70.6971 424.44H72.4011L76.9131 432.816L81.4251 424.44H83.1291L83.3931 424.872L77.9211 434.856V441H75.9051V434.856L70.4331 424.872ZM86.035 441V424.44H93.883C96.331 424.44 97.555 425.664 97.555 428.112V431.232C97.555 433.68 96.331 434.904 93.883 434.904H88.051V441H86.035ZM88.051 433.08H93.907C94.995 433.08 95.539 432.536 95.539 431.448V427.896C95.539 426.808 94.995 426.264 93.907 426.264H88.051V433.08ZM99.5682 426.264V424.44H112.624V426.264H107.104V441H105.088V426.264H99.5682ZM115.115 437.328V428.112C115.115 425.664 116.339 424.44 118.787 424.44H124.403C126.851 424.44 128.075 425.664 128.075 428.112V437.328C128.075 439.776 126.851 441 124.403 441H118.787C116.339 441 115.115 439.776 115.115 437.328ZM117.131 437.544C117.131 438.632 117.675 439.176 118.763 439.176H124.427C125.515 439.176 126.059 438.632 126.059 437.544V427.896C126.059 426.808 125.515 426.264 124.427 426.264H118.763C117.675 426.264 117.131 426.808 117.131 427.896V437.544ZM28.1988 470.568L33.6228 454.44H36.9348L42.3588 470.568L42.0708 471H40.4148L39.0468 466.824H31.5108L30.1428 471H28.4868L28.1988 470.568ZM32.1108 465H38.4468L35.5668 456.264H34.9908L32.1108 465ZM44.9959 471V454.44H52.8439C55.2919 454.44 56.5159 455.664 56.5159 458.112V460.752C56.5159 462.832 55.6279 464.016 53.8519 464.304L56.9959 470.52L56.7319 471H55.0279L51.6919 464.424H47.0119V471H44.9959ZM47.0119 462.6H52.8679C53.9559 462.6 54.4999 462.056 54.4999 460.968V457.896C54.4999 456.808 53.9559 456.264 52.8679 456.264H47.0119V462.6ZM58.7635 456.264V454.44H71.8195V456.264H66.2995V471H64.2835V456.264H58.7635ZM79.8363 467.4V464.856C79.8363 464.024 80.1003 463.384 80.6283 462.936L81.6363 462.096L80.7963 461.088C80.4763 460.704 80.3163 460.24 80.3163 459.696V458.04C80.3163 455.64 81.5163 454.44 83.9163 454.44H88.4763L89.4363 455.16V456.12H83.9163C82.7963 456.12 82.2363 456.68 82.2363 457.8V459.72C82.2363 460.84 82.7963 461.4 83.9163 461.4H93.0363V463.08H90.6363V471H83.4363C81.0363 471 79.8363 469.8 79.8363 467.4ZM81.7563 467.64C81.7563 468.76 82.3163 469.32 83.4363 469.32H88.7163V463.08H83.4363C82.3163 463.08 81.7563 463.64 81.7563 464.76V467.64ZM100.246 454.872L100.534 454.44H102.262L106.918 469.176H107.494L112.174 454.44H113.878L114.166 454.872L108.934 471H105.478L100.246 454.872ZM116.808 471V454.44H124.656C127.104 454.44 128.328 455.664 128.328 458.112V460.752C128.328 462.832 127.44 464.016 125.664 464.304L128.808 470.52L128.544 471H126.84L123.504 464.424H118.824V471H116.808ZM118.824 462.6H124.68C125.768 462.6 126.312 462.056 126.312 460.968V457.896C126.312 456.808 125.768 456.264 124.68 456.264H118.824V462.6ZM12.6522 501V484.44H20.5002C22.9482 484.44 24.1722 485.664 24.1722 488.112V490.752C24.1722 492.832 23.2842 494.016 21.5082 494.304L24.6522 500.52L24.3882 501H22.6842L19.3482 494.424H14.6682V501H12.6522ZM14.6682 492.6H20.5242C21.6122 492.6 22.1562 492.056 22.1562 490.968V487.896C22.1562 486.808 21.6122 486.264 20.5242 486.264H14.6682V492.6ZM28.0038 501V484.44H38.8038V486.264H30.0198V491.4H38.0838V493.224H30.0198V499.176H38.8038V501H28.0038ZM41.44 500.16V499.176H48.832C49.92 499.176 50.464 498.632 50.464 497.544V495.6C50.464 494.688 50.056 494.152 49.24 493.992L44.08 492.936C42.32 492.584 41.44 491.408 41.44 489.408V488.112C41.44 485.664 42.664 484.44 45.112 484.44H50.92L52 485.28V486.264H45.088C44 486.264 43.456 486.808 43.456 487.896V489.528C43.456 490.44 43.864 490.976 44.68 491.136L49.84 492.168C51.6 492.52 52.48 493.704 52.48 495.72V497.328C52.48 499.776 51.256 501 48.808 501H42.52L41.44 500.16ZM56.0819 501V484.44H66.8819V486.264H58.0979V491.4H66.1619V493.224H58.0979V499.176H66.8819V501H56.0819ZM68.5581 500.568L73.9821 484.44H77.2941L82.7181 500.568L82.4301 501H80.7741L79.4061 496.824H71.8701L70.5021 501H68.8461L68.5581 500.568ZM72.4701 495H78.8061L75.9261 486.264H75.3501L72.4701 495ZM85.3553 501V484.44H93.2033C95.6513 484.44 96.8753 485.664 96.8753 488.112V490.752C96.8753 492.832 95.9873 494.016 94.2113 494.304L97.3553 500.52L97.0913 501H95.3873L92.0513 494.424H87.3713V501H85.3553ZM87.3713 492.6H93.2273C94.3153 492.6 94.8593 492.056 94.8593 490.968V487.896C94.8593 486.808 94.3153 486.264 93.2273 486.264H87.3713V492.6ZM100.467 497.328V488.112C100.467 485.664 101.691 484.44 104.139 484.44H110.907L111.987 485.28V486.264H104.115C103.027 486.264 102.483 486.808 102.483 487.896V497.544C102.483 498.632 103.027 499.176 104.115 499.176H111.987V500.16L110.907 501H104.139C101.691 501 100.467 499.776 100.467 497.328ZM115.355 501V484.44H117.371V491.4H125.819V484.44H127.835V501H125.819V493.224H117.371V501H115.355ZM47.0116 531V514.44H49.0276V529.176H57.0916V531H47.0116ZM58.1519 530.568L63.5759 514.44H66.8879L72.3119 530.568L72.0239 531H70.3679L68.9999 526.824H61.4639L60.0959 531H58.4399L58.1519 530.568ZM62.0639 525H68.3999L65.5199 516.264H64.9439L62.0639 525ZM74.9491 531V514.44H82.5571C85.0051 514.44 86.2291 515.664 86.2291 518.112V519.768C86.2291 520.312 86.0691 520.776 85.7491 521.16L84.9091 522.168L85.9171 523.008C86.4451 523.44 86.7091 524.08 86.7091 524.928V527.328C86.7091 529.776 85.4851 531 83.0371 531H74.9491ZM76.9651 529.176H83.0611C84.1491 529.176 84.6931 528.632 84.6931 527.544V524.856C84.6931 523.768 84.1491 523.224 83.0611 523.224H76.9651V529.176ZM76.9651 521.4H82.5811C83.6691 521.4 84.2131 520.856 84.2131 519.768V517.896C84.2131 516.808 83.6691 516.264 82.5811 516.264H76.9651V521.4ZM89.1944 534.12H101.194V535.8H89.1944V534.12ZM103.116 534.12H115.116V535.8H103.116V534.12ZM117.038 534.12H129.038V535.8H117.038V534.12Z" fill="black" />
        </svg>


        <img id={styles.spiral} src={spiral} />

      </div>
    </>
  )
}

export default Banner3Coilabs;