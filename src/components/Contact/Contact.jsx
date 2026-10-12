import styles from './Contact.module.css';

const links = [
  {
    icon: 'fa-brands fa-github',
    label: 'github.com/medokalel',
    href: 'https://github.com/medokalel',
    color: '#c4b5fd',
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'linkedin.com/in/mohamed-khalel1',
    href: 'https://www.linkedin.com/in/mohamed-khalel1/',
    color: '#60a5fa',
  },
  {
    icon: 'fa-solid fa-globe',
    label: 'medo-kalel-portfolio.vercel.app',
    href: 'https://medo-kalel-portfolio.vercel.app/',
    color: '#4ade80',
  },
];

// This section is the one place with real contact details: the person who built the template.
const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <span className={styles.label}>ABOUT THIS TEMPLATE</span>

        <h2 className={styles.title}>
          Like the design? <span className={styles.together}>Let's talk.</span>
        </h2>

        <p className={styles.subtitle}>
          Alex Chen and everything on this page is sample content. The interface, animations and
          code were built by Mohamed Khalil, a front-end developer from Tanta, Egypt.
        </p>

        <div className="row">
          <div className="col-lg-7">
            <div className={styles.socialCard}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span className={styles.iconWrapper} style={{ color: link.color }}>
                    <i className={link.icon} aria-hidden="true"></i>
                  </span>
                  <span className={styles.linkLabel}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
