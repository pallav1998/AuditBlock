/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./Navbar.module.css";
import { cardBgColor } from "../Colors/colors";

function Navbar({ Address, ConnectWallet, DisconnectWallet }) {
  return (
    <div className={styles.Navbody}>
      <div className={styles.Navbars}>
        <Link href="/">
          <img
            height="40px"
            src="https://images.vexels.com/media/users/3/216751/raw/a525182aedd0f213326b3682eabfa5ee-online-study-logo-template.jpg"
            alt="LOGO"
          />
        </Link>

        <div
          style={{
            width: "400px",
            justifyContent: "space-between",
            display: "flex",
            minWidth: "400px",
            paddingTop: "10px",
          }}
        >
          <div className={styles.hover}>
            <Link href="/dashboard" className={styles.links}>
              Dashboard
            </Link>
          </div>
          <div className={styles.hover}>
            <Link href="/" className={styles.links}>
              Learn
            </Link>
          </div>
          <div className={styles.hover}>
            <Link href="/" className={styles.links}>
              Guides
            </Link>
          </div>
          <div className={styles.hover}>
            {!Address ? (
              <button className={styles.buttonlink} onClick={ConnectWallet}>
                Login
              </button>
            ) : (
              <button onClick={DisconnectWallet} className={styles.buttonlink}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <svg
        style={{
          height: "70px",
          width: "100%",
          zIndex: "1",
          marginTop: "-2px",
        }}
      >
        <polygon
          points="-300,0 1400,-30 1700,20"
          style={{ fill: { cardBgColor }, stroke: "none", strokeWidth: "1" }}
        />
      </svg>
    </div>
  );
}

export default Navbar;
