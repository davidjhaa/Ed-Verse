import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import Course from "../course/course";
import ContactForm from "../footer/contactForm";
import { useRef } from "react";

const Home = () => {
  const courseRef = useRef();
  const contactUsRef = useRef();
  const homeRef = useRef();

  const scrollHandler = (elemRef) => {
    elemRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.homePage}>
      <Navbar
        scrollToHome={() => scrollHandler(homeRef)}
        scrollToCourse={() => scrollHandler(courseRef)}
        scrollToContact={() => scrollHandler(contactUsRef)}
      />
      <div ref={homeRef} className={styles.content}>
        <img
          src="https://i.postimg.cc/yYz5Nnqw/lamp.png"
          alt=""
          class={styles.lamp}
        />
        <div className={styles.welcomeNote} >
          <h1 style={{ margin: "60px 0 0 0" }}>Welcome to <span> Ed_Verse</span></h1>
          <h2 style={{ margin: "10px 0 44px 0" }}>
            Your Gateway to Quality Education
          </h2>
          <p style={{ width: "500px", textAlign:'center' }}>
            Discover a world of knowledge with Ed Verse, offering expert-led
            courses and interactive tools to help you achieve your educational
            goals. Start learning today!
          </p>
        </div>
      </div>
      <div ref={courseRef}>
        <h1 style={{textAlign:'center', padding:'100px 0 40px 0', fontWeight:'500'}}>Checkout Our New Courses</h1>
        <div className={styles.courses} >
          <Course />
          <Course />
          <Course />
        </div>
      </div>
      <div ref={contactUsRef}>
        <div style={{padding:'100px 0 0 0'}}>
          <ContactForm  />
        </div>
      </div>
    </div>
  );
};

export default Home;
