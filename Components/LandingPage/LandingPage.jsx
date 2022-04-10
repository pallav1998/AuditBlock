/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Homepage.module.css";
// import video from "./hero.mp4";
import { Subjectimg, twiter } from "./Localdata";
import Link from "next/link";

function LandingPage() {
  return (
    <div className={styles.mainbox}>
      {/* <div
        style={{
          position: "relative",
          zIndex: "-1",
          width: "100%",
          height: "90%",
        }}
      >
        <video width="100%" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <div>
        {/* <div className={styles.Onvideo}>
          <h1 className={styles.contHeading}>
            <strong className={styles.heading}>Advance Your Skills</strong>
            <br />
            <span>with In-Depth, Modern</span>
            <br />
            <span>Front-End Engineering</span>
            <br />
            <div>
              <Link href="/">
                <button className={styles.button}>Join Now</button>
              </Link>
            </div>
          </h1>
        </div> */}
      </div>
      <div>
        <svg
          style={{
            height: "70px",
            width: "100%",
            zIndex: "5",
            marginBottom: "6px",
          }}
        >
          <polygon
            points="0,60 0,30 1700,60"
            style={{ fill: "#c76767", stroke: "none", strokeWidth: "1" }}
          />
        </svg>
      </div>

      <div className={styles.Subjectflex}>
        <div className={styles.Subject}>
          {Subjectimg.map((el) => (
            <div key={el.id}>
              <img id={styles.Subimage} src={el.image} alt="logo" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.MainImageBox}>
        <h1>
          Join thousands of professionals who already use XYZ to ace their
          interviews
        </h1>

        <div className={styles.ImageBox}>
          {twiter.map((item) => (
            <div key={item.id} className={styles.Combody}>
              <div className={styles.Imagebody}>
                <img src={item.img} alt="" />
                <h3 className={styles.Chead}>{item.name}</h3>
              </div>
              <div className={styles.Chead}>{item.des}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
