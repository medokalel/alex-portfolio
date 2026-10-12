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
            <a href="#home" className={styles.logo}>
              <span className={styles.arrow}>{'>'}</span> alex.dev
            </a>
            <p className={styles.copyright}>
              Sample content · UI by Mohamed Khalil · Built with React, Vite and Bootstrap.
            </p>
          </div>
          
          {/* Right */}
          <div className={styles.right}>
            <span className={styles.status}>
              <span className={styles.statusDot}></span>
              All systems operational (demo)
            </span>
            <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Back to top">
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;