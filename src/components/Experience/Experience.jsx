import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    title: 'Senior Backend Engineer',
    type: 'Full-time',
    typeColor: '#3b82f6',
    company: 'Stripe',
    companyColor: '#3b82f6',
    period: '2022 – Present',
    icon: 'fa-solid fa-briefcase',
    iconColor: '#3b82f6',
    points: [
      'Led migration of payment routing service from monolith to microservices (30% latency reduction)',
      'Designed idempotency layer handling 8M transactions/day',
      'Mentored 4 junior engineers, drove team RFC process'
    ]
  },
  {
    id: 2,
    title: 'Backend Engineer',
    type: 'Full-time',
    typeColor: '#3b82f6',
    company: 'Vercel',
    companyColor: '#3b82f6',
    period: '2020 – 2022',
    icon: 'fa-solid fa-briefcase',
    iconColor: '#3b82f6',
    points: [
      'Built edge function execution runtime (Node.js + Go)',
      'Reduced cold-start time by 60% via pre-warming strategy',
      'Shipped deployment rollback API used by 200k+ teams'
    ]
  },
  {
    id: 3,
    title: 'API Consultant',
    type: 'Freelance',
    typeColor: '#22c55e',
    company: 'Various Clients',
    companyColor: '#22c55e',
    period: '2019 – 2020',
    icon: 'fa-solid fa-user-tie',
    iconColor: '#22c55e',
    points: [
      'Delivered 12 REST & GraphQL APIs across fintech, healthtech, and logistics',
      'Implemented HIPAA-compliant data pipeline for health startup',
      'Reduced client AWS costs by avg 40% via architecture review'
    ]
  },
  {
    id: 4,
    title: 'Backend Contributor',
    type: 'Open Source',
    typeColor: '#a78bfa',
    company: 'Open Source',
    companyColor: '#a78bfa',
    period: '2018 – Present',
    icon: 'fa-solid fa-code-branch',
    iconColor: '#a78bfa',
    points: [
      'Maintainer of pg-migrate (4.2k GitHub stars)',
      'Contributed to FastAPI, Express, and Kubernetes ecosystem',
      'Authored 15+ technical articles on distributed systems'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        {/* Label */}
        <span className={styles.label}>EXPERIENCE</span>
        
        {/* Title */}
        <h2 className={styles.title}>
          Where I've shipped <span className={styles.real}>real things.</span>
        </h2>
        
        {/* Timeline */}
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div className={styles.timelineItem} key={exp.id}>
              {/* Timeline Line & Dot */}
              <div className={styles.timelineLeft}>
                <div 
                  className={styles.dot}
                  style={{ borderColor: exp.iconColor }}
                >
                  <i className={exp.icon} style={{ color: exp.iconColor }}></i>
                </div>
                {index !== experiences.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>
              
              {/* Card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <span 
                    className={styles.typeBadge}
                    style={{ 
                      color: exp.typeColor,
                      borderColor: `${exp.typeColor}40`,
                      background: `${exp.typeColor}15`
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
                
                <div className={styles.companyRow}>
                  <span className={styles.company} style={{ color: exp.companyColor }}>
                    {exp.company}
                  </span>
                  <span className={styles.period}>
                    <i className="far fa-calendar"></i> {exp.period}
                  </span>
                </div>
                
                <ul className={styles.points}>
                  {exp.points.map((point, i) => (
                    <li key={i} className={styles.point}>
                      <span className={styles.bullet} style={{ color: exp.iconColor }}>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;