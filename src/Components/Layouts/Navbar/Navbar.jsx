import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles["nav-info"]}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles["side-bar"]}>
            <ul className={styles.links}>
              <li>Home</li>
              <li>Find Jobs</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
            <div className={styles.actions}>
              <button className={styles["sign-up"]}>Register</button>
              <button className={styles.login}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
