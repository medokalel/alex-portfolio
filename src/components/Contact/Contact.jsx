import React, { useState } from 'react';
import styles from './Contact.module.css';

const socialLinks = [
  {
    icon: 'fa-regular fa-envelope',
    label: 'alex@example.dev',
    href: 'mailto:alex@example.dev',
    color: '#3b82f6'
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'linkedin.com/in/alexchen',
    href: 'https://linkedin.com/in/alexchen',
    color: '#3b82f6'
  },
  {
    icon: 'fa-brands fa-github',
    label: 'github.com/alexchen',
    href: 'https://github.com/alexchen',
    color: '#a78bfa'
  },
  {
    icon: 'fa-brands fa-twitter',
    label: '@alexchen_dev',
    href: 'https://twitter.com/alexchen_dev',
    color: '#3b82f6'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        {/* Label */}
        <span className={styles.label}>CONTACT</span>
        
        {/* Title */}
        <h2 className={styles.title}>
          Let's build something <span className={styles.together}>together.</span>
        </h2>
        
        <p className={styles.subtitle}>
          Whether it's a new system, a tough scaling problem, or just a technical 
          question — my inbox is open.
        </p>
        
        <div className="row g-5">
          {/* Left - Form */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className={styles.inputLabel}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Alex Johnson"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className={styles.inputLabel}>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-3">
                <label className={styles.inputLabel}>Message</label>
                <textarea
                  name="message"
                  placeholder="Hey, I have a project I'd love to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
          
          {/* Right - Info */}
          <div className="col-lg-5">
            {/* Social Links */}
            <div className={styles.socialCard}>
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span 
                    className={styles.iconWrapper}
                    style={{ color: link.color }}
                  >
                    <i className={link.icon}></i>
                  </span>
                  <span className={styles.linkLabel}>{link.label}</span>
                </a>
              ))}
            </div>
            
            {/* Location Card */}
            <div className={styles.locationCard}>
              <div className={styles.locationOverlay}>
                <div className={styles.locationPin}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.locationText}>
                  <span className={styles.city}>San Francisco, CA</span>
                  <span className={styles.remote}>Open to remote worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;