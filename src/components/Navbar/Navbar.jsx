import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ scrollToHome, scrollToCourse, scrollToContact }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.main} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/" onClick={scrollToHome}>Ed Verse</a>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="/" onClick={scrollToHome}>Home</a>
          </li>
          <li>
            <a href="#courses" onClick={scrollToCourse}>Courses</a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContact}>Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
