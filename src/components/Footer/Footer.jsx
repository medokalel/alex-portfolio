import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Left */}
          <div className={styles.left}>
            <a href="#" className={styles.logo}>
              <span className={styles.arrow}>{'>'}</span> alex.dev
            </a>
            <p className={styles.copyright}>
              © 2025 Alex Chen. Built with React + TypeScript + Tailwind.
            </p>
          </div>
          
          {/* Right */}
          <div className={styles.right}>
            <span className={styles.status}>
              <span className={styles.statusDot}></span>
              All systems operational
            </span>
            <button onClick={scrollToTop} className={styles.scrollTop}>
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;