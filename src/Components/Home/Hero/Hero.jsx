import React from 'react'
import styles from "./Hero.module.css"
import hero from "../../../assets/hero.png"
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-md-center ">
          <div className="col-12 col-md-5">
            <h2 className={`${styles.text} fw-bolder fs-1`}>
              The <span>#1</span> Job Board for Hiring or Find your next job in
              <span> Egypt</span>
            </h2>
            <p className={`${styles.p} fs-6 fw-light`}>
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
          </div>
          <div className='col-12 col-md-2'></div>
          <div className="col-12 col-md-5">
            <img src={hero} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero