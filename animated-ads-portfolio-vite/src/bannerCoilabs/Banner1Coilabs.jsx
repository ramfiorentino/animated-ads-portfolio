import React from 'react';
import styles from './banner1Coilabs.module.css';
import spiral from './coilabs-banner-assets/spiral.gif'

function Banner1Coilabs() {

  return (
    <>
      <div className={styles.banner}>

        <svg id={styles.coilabslogo} width="865" height="117" viewBox="0 0 865 117" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id={styles.C} d="M28 0H112V116.5H23.5C10.3 116.5 0.5 102.5 0.5 91.5V22.5C0.5 11 13.5 0 28 0Z" fill="black" />
          <path id={styles.O} d="M122 20C122 12.5 130 1.19103e-05 144 1.19103e-05H212C224 0 233 10.5 233 20V92C233 104.5 221.5 116 212 116H147.5C135.5 116 122 104 122 92V20Z" fill="black" />
          <path id={styles.I} d="M332 0H243V116H332V0Z" fill="black" />
          <path id={styles.L} d="M416.5 0H341.5V115.5H452.5V77H416.5V0Z" fill="black" />
          <path id={styles.A} d="M463.5 26.5V115.5H574V26.5C574 7 562.5 0 551.5 0H488.5C477 0 463.5 11 463.5 26.5Z" fill="black" />
          <path id={styles.B} d="M671.5 0.000488281H587V116C611.167 116 657.6 115.5 666 115.5C684 115.5 691.714 101.75 693.5 95.5C697.5 81.5 695.5 68.5 694.5 62.5C693.5 56.5 684.5 39.0005 670 39.0005C684.5 39.0005 688 25 688 20C688 6.99951 680 0.000421664 671.5 0.000488281Z" fill="black" />
          <path id={styles.S} d="M737 0H815.5V37.5H789.5C794.5 37.5 818 47 818 76.5C818 94.5 808.5 116 792 116H706V76.5H731C720 76.5 706 67 706 38.5C706 10 721.5 0 737 0Z" fill="black" />
          <rect id={styles.dot} x="840" y="92" width="25" height="25" fill="black" />
        </svg>

        <svg id={styles.smalltext} width="818" height="207" viewBox="0 0 818 207" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.95413 180H24.1413V205.224H4.97982C2.12183 205.224 0 202.193 0 199.811V184.872C0 182.382 2.81468 180 5.95413 180Z" fill="black" />
          <path d="M26.3064 184.33C26.3064 182.706 28.0385 180 31.0697 180H45.7926C48.3908 180 50.3394 182.273 50.3394 184.33V199.919C50.3394 202.626 47.8495 205.116 45.7926 205.116H31.8275C29.2293 205.116 26.3064 202.517 26.3064 199.919V184.33Z" fill="black" />
          <path d="M71.7744 180H52.5046V205.116H71.7744V180Z" fill="black" />
          <path d="M90.0697 180H73.8312V205.007H97.8642V196.672H90.0697V180Z" fill="black" />
          <path d="M100.246 185.738V205.007H124.171V185.738C124.171 181.516 121.681 180 119.299 180H105.659C103.169 180 100.246 182.382 100.246 185.738Z" fill="black" />
          <path d="M145.281 180H126.985V205.116C132.218 205.116 142.271 205.007 144.09 205.007C147.987 205.007 149.657 202.03 150.044 200.677C150.91 197.646 150.477 194.831 150.261 193.532C150.044 192.233 148.095 188.444 144.956 188.444C148.095 188.444 148.853 185.413 148.853 184.33C148.853 181.515 147.121 180 145.281 180Z" fill="black" />
          <path d="M159.462 180H176.459V188.119H170.829C171.912 188.119 177 190.176 177 196.563C177 200.461 174.943 205.116 171.371 205.116H152.75V196.563H158.163C155.782 196.563 152.75 194.506 152.75 188.336C152.75 182.165 156.106 180 159.462 180Z" fill="black" />
          <path d="M191.92 198.328V189.112C191.92 186.664 193.144 185.44 195.592 185.44H202.36L203.44 186.28V187.264H195.568C194.48 187.264 193.936 187.808 193.936 188.896V198.544C193.936 199.632 194.48 200.176 195.568 200.176H203.44V201.16L202.36 202H195.592C193.144 202 191.92 200.776 191.92 198.328ZM206.808 202V185.44H214.656C217.104 185.44 218.328 186.664 218.328 189.112V191.752C218.328 193.832 217.44 195.016 215.664 195.304L218.808 201.52L218.544 202H216.84L213.504 195.424H208.824V202H206.808ZM208.824 193.6H214.68C215.768 193.6 216.312 193.056 216.312 191.968V188.896C216.312 187.808 215.768 187.264 214.68 187.264H208.824V193.6ZM220.48 185.872L220.744 185.44H222.448L226.96 193.816L231.472 185.44H233.176L233.44 185.872L227.968 195.856V202H225.952V195.856L220.48 185.872ZM236.082 202V185.44H243.93C246.378 185.44 247.602 186.664 247.602 189.112V192.232C247.602 194.68 246.378 195.904 243.93 195.904H238.098V202H236.082ZM238.098 194.08H243.954C245.042 194.08 245.586 193.536 245.586 192.448V188.896C245.586 187.808 245.042 187.264 243.954 187.264H238.098V194.08ZM249.615 187.264V185.44H262.671V187.264H257.151V202H255.135V187.264H249.615ZM265.162 198.328V189.112C265.162 186.664 266.386 185.44 268.834 185.44H274.45C276.898 185.44 278.122 186.664 278.122 189.112V198.328C278.122 200.776 276.898 202 274.45 202H268.834C266.386 202 265.162 200.776 265.162 198.328ZM267.178 198.544C267.178 199.632 267.722 200.176 268.81 200.176H274.474C275.562 200.176 276.106 199.632 276.106 198.544V188.896C276.106 187.808 275.562 187.264 274.474 187.264H268.81C267.722 187.264 267.178 187.808 267.178 188.896V198.544ZM286.293 201.568L291.717 185.44H295.029L300.453 201.568L300.165 202H298.509L297.141 197.824H289.605L288.237 202H286.581L286.293 201.568ZM290.205 196H296.541L293.661 187.264H293.085L290.205 196ZM303.09 202V185.44H310.938C313.386 185.44 314.61 186.664 314.61 189.112V191.752C314.61 193.832 313.722 195.016 311.946 195.304L315.09 201.52L314.826 202H313.122L309.786 195.424H305.106V202H303.09ZM305.106 193.6H310.962C312.05 193.6 312.594 193.056 312.594 191.968V188.896C312.594 187.808 312.05 187.264 310.962 187.264H305.106V193.6ZM316.857 187.264V185.44H329.913V187.264H324.393V202H322.377V187.264H316.857ZM337.93 198.4V195.856C337.93 195.024 338.194 194.384 338.722 193.936L339.73 193.096L338.89 192.088C338.57 191.704 338.41 191.24 338.41 190.696V189.04C338.41 186.64 339.61 185.44 342.01 185.44H346.57L347.53 186.16V187.12H342.01C340.89 187.12 340.33 187.68 340.33 188.8V190.72C340.33 191.84 340.89 192.4 342.01 192.4H351.13V194.08H348.73V202H341.53C339.13 202 337.93 200.8 337.93 198.4ZM339.85 198.64C339.85 199.76 340.41 200.32 341.53 200.32H346.81V194.08H341.53C340.41 194.08 339.85 194.64 339.85 195.76V198.64ZM358.339 185.872L358.627 185.44H360.355L365.011 200.176H365.587L370.267 185.44H371.971L372.259 185.872L367.027 202H363.571L358.339 185.872ZM374.902 202V185.44H382.75C385.198 185.44 386.422 186.664 386.422 189.112V191.752C386.422 193.832 385.534 195.016 383.758 195.304L386.902 201.52L386.638 202H384.934L381.598 195.424H376.918V202H374.902ZM376.918 193.6H382.774C383.862 193.6 384.406 193.056 384.406 191.968V188.896C384.406 187.808 383.862 187.264 382.774 187.264H376.918V193.6ZM396.019 202V185.44H403.867C406.315 185.44 407.539 186.664 407.539 189.112V191.752C407.539 193.832 406.651 195.016 404.875 195.304L408.019 201.52L407.755 202H406.051L402.715 195.424H398.035V202H396.019ZM398.035 193.6H403.891C404.979 193.6 405.523 193.056 405.523 191.968V188.896C405.523 187.808 404.979 187.264 403.891 187.264H398.035V193.6ZM411.371 202V185.44H422.171V187.264H413.387V192.4H421.451V194.224H413.387V200.176H422.171V202H411.371ZM424.807 201.16V200.176H432.199C433.287 200.176 433.831 199.632 433.831 198.544V196.6C433.831 195.688 433.423 195.152 432.607 194.992L427.447 193.936C425.687 193.584 424.807 192.408 424.807 190.408V189.112C424.807 186.664 426.031 185.44 428.479 185.44H434.287L435.367 186.28V187.264H428.455C427.367 187.264 426.823 187.808 426.823 188.896V190.528C426.823 191.44 427.231 191.976 428.047 192.136L433.207 193.168C434.967 193.52 435.847 194.704 435.847 196.72V198.328C435.847 200.776 434.623 202 432.175 202H425.887L424.807 201.16ZM439.449 202V185.44H450.249V187.264H441.465V192.4H449.529V194.224H441.465V200.176H450.249V202H439.449ZM451.925 201.568L457.349 185.44H460.661L466.085 201.568L465.797 202H464.141L462.773 197.824H455.237L453.869 202H452.213L451.925 201.568ZM455.837 196H462.173L459.293 187.264H458.717L455.837 196ZM468.723 202V185.44H476.571C479.019 185.44 480.243 186.664 480.243 189.112V191.752C480.243 193.832 479.355 195.016 477.579 195.304L480.723 201.52L480.459 202H478.755L475.419 195.424H470.739V202H468.723ZM470.739 193.6H476.595C477.683 193.6 478.227 193.056 478.227 191.968V188.896C478.227 187.808 477.683 187.264 476.595 187.264H470.739V193.6ZM483.834 198.328V189.112C483.834 186.664 485.058 185.44 487.506 185.44H494.274L495.354 186.28V187.264H487.482C486.394 187.264 485.85 187.808 485.85 188.896V198.544C485.85 199.632 486.394 200.176 487.482 200.176H495.354V201.16L494.274 202H487.506C485.058 202 483.834 200.776 483.834 198.328ZM498.723 202V185.44H500.739V192.4H509.187V185.44H511.203V202H509.187V194.224H500.739V202H498.723ZM521.293 202V185.44H523.309V200.176H531.373V202H521.293ZM532.433 201.568L537.857 185.44H541.169L546.593 201.568L546.305 202H544.649L543.281 197.824H535.745L534.377 202H532.721L532.433 201.568ZM536.345 196H542.681L539.801 187.264H539.225L536.345 196ZM549.23 202V185.44H556.838C559.286 185.44 560.51 186.664 560.51 189.112V190.768C560.51 191.312 560.35 191.776 560.03 192.16L559.19 193.168L560.198 194.008C560.726 194.44 560.99 195.08 560.99 195.928V198.328C560.99 200.776 559.766 202 557.318 202H549.23ZM551.246 200.176H557.342C558.43 200.176 558.974 199.632 558.974 198.544V195.856C558.974 194.768 558.43 194.224 557.342 194.224H551.246V200.176ZM551.246 192.4H556.862C557.95 192.4 558.494 191.856 558.494 190.768V188.896C558.494 187.808 557.95 187.264 556.862 187.264H551.246V192.4ZM563.476 205.12H575.476V206.8H563.476V205.12ZM577.398 205.12H589.398V206.8H577.398V205.12ZM591.319 205.12H603.319V206.8H591.319V205.12Z" fill="black" />
          <path d="M646.954 0H665.141V25.2239H645.98C643.122 25.2239 641 22.1927 641 19.811V4.87156C641 2.38165 643.815 0 646.954 0Z" fill="black" />
          <path d="M667.306 4.33028C667.306 2.70642 669.039 2.57875e-06 672.07 2.57875e-06H686.793C689.391 0 691.339 2.2734 691.339 4.33028V19.9193C691.339 22.6257 688.85 25.1156 686.793 25.1156H672.828C670.229 25.1156 667.306 22.5174 667.306 19.9193V4.33028Z" fill="black" />
          <path d="M712.774 0H693.505V25.1156H712.774V0Z" fill="black" />
          <path d="M731.07 0H714.831V25.0073H738.864V16.6716H731.07V0Z" fill="black" />
          <path d="M741.246 5.73761V25.0073H765.171V5.73761C765.171 1.5156 762.681 0 760.299 0H746.659C744.169 0 741.246 2.38165 741.246 5.73761Z" fill="black" />
          <path d="M786.281 0H767.985V25.1156C773.218 25.1156 783.271 25.0072 785.09 25.0072C788.987 25.0072 790.657 22.0301 791.044 20.677C791.91 17.6458 791.477 14.8311 791.261 13.532C791.044 12.2329 789.095 8.44404 785.956 8.44404C789.095 8.44404 789.853 5.41274 789.853 4.33017C789.853 1.51538 788.121 -1.44236e-05 786.281 0Z" fill="black" />
          <path d="M800.462 0H817.459V8.11927H811.829C812.912 8.11927 818 10.1761 818 16.5633C818 20.4606 815.943 25.1156 812.371 25.1156H793.75V16.5633H799.163C796.782 16.5633 793.75 14.5064 793.75 8.33578C793.75 2.16514 797.106 0 800.462 0Z" fill="black" />
          <path d="M588.194 25.12H600.194V26.8H588.194V25.12ZM602.116 25.12H614.116V26.8H602.116V25.12ZM616.038 25.12H628.038V26.8H616.038V25.12Z" fill="black" />
        </svg>


        <img id={styles.spiral} src={spiral} />

      </div>
    </>
  )
}

export default Banner1Coilabs;