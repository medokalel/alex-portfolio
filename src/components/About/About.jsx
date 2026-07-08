import React from 'react';
import styles from './About.module.css';
import aboutImg from '../../assets/images/pngtree-empty-computer-desk-with-wooden-table-and-supplies-for-montage-photo-image_50050390.png'; // حط صورتك هنا

const skills = [
  { name: 'Python / FastAPI', percent: 95, color: '#3b82f6' },
  { name: 'Node.js / TypeScript', percent: 92, color: '#22c55e' },
  { name: 'Go', percent: 78, color: '#06b6d4' },
  { name: 'PostgreSQL / MySQL', percent: 90, color: '#6366f1' },
  { name: 'Redis / Caching', percent: 87, color: '#ef4444' },
  { name: 'Docker / Kubernetes', percent: 84, color: '#3b82f6' },
  { name: 'AWS / GCP', percent: 80, color: '#f59e0b' },
];

const stats = [
  { num: '5+', label: 'Years', color: '#3b82f6' },
  { num: '50+', label: 'APIs', color: '#22c55e' },
  { num: '99.9%', label: 'Uptime', color: '#a78bfa' },
];

const tags = [
  { label: 'Server', color: '#3b82f6' },
  { label: 'Database', color: '#22c55e' },
  { label: 'Cloud', color: '#a78bfa' },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* Section Label */}
        <span className={styles.label}>ABOUT</span>
        
        {/* Title */}
        <h2 className={styles.title}>
          The engineer behind the <span className={styles.uptime}>uptime.</span>
        </h2>
        
        <div className="row g-5 align-items-start">
          {/* Left - Image & Stats */}
          <div className="col-lg-5">
            <div className={styles.imageWrapper}>
              <img src={aboutImg} alt="Alex Chen working" className={styles.aboutImg} />
              
              {/* Floating Tags */}
              <div className={styles.tags}>
                {tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={styles.tag}
                    style={{ borderColor: tag.color, color: tag.color }}
                  >
                    <span className={styles.dot} style={{ background: tag.color }}></span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className={styles.statsRow}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statNum} style={{ color: stat.color }}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="col-lg-7">
            <div className={styles.content}>
              <p className={styles.paragraph}>
                I'm <strong>Alex Chen</strong>, a backend-focused software engineer with 5+ years 
                building production systems that handle millions of requests daily. My work spans 
                fintech, SaaS, and infrastructure tooling — always with a focus on correctness, 
                observability, and pragmatic engineering.
              </p>
              
              <p className={styles.paragraph}>
                I care deeply about API design, database performance, and the kind of boring 
                reliability that lets teams sleep at night. When I'm not writing Go microservices, 
                I'm probably tuning PostgreSQL query plans or writing runbooks nobody reads until 3am.
              </p>
              
              {/* Skills */}
              <div className={styles.skills}>
                {skills.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent} style={{ color: skill.color }}>{skill.percent}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${skill.percent}%`, background: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Download Button */}
              <a href="#" download className={styles.downloadBtn}>
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;