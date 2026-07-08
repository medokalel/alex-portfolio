import React from 'react';
import styles from './TechStack.module.css';

const categories = [
  {
    id: 1,
    title: 'Languages',
    icon: 'fa-solid fa-terminal',
    iconColor: '#3b82f6',
    items: [
      { name: 'Python', years: '5yrs', color: '#3b82f6' },
      { name: 'TypeScript', years: '5yrs', color: '#3b82f6' },
      { name: 'Go', years: '3yrs', color: '#3b82f6' },
      { name: 'Java', years: '4yrs', color: '#3b82f6' },
      { name: 'Bash', years: '5yrs', color: '#3b82f6' }
    ]
  },
  {
    id: 2,
    title: 'Databases',
    icon: 'fa-solid fa-database',
    iconColor: '#22c55e',
    items: [
      { name: 'PostgreSQL', years: '5yrs', color: '#22c55e' },
      { name: 'MongoDB', years: '4yrs', color: '#22c55e' },
      { name: 'Redis', years: '4yrs', color: '#22c55e' },
      { name: 'ClickHouse', years: '2yrs', color: '#22c55e' },
      { name: 'Elasticsearch', years: '3yrs', color: '#22c55e' }
    ]
  },
  {
    id: 3,
    title: 'Infrastructure',
    icon: 'fa-solid fa-cloud',
    iconColor: '#a78bfa',
    items: [
      { name: 'Docker', years: '5yrs', color: '#a78bfa' },
      { name: 'Kubernetes', years: '3yrs', color: '#a78bfa' },
      { name: 'AWS', years: '4yrs', color: '#a78bfa' },
      { name: 'Terraform', years: '3yrs', color: '#a78bfa' },
      { name: 'GitHub Actions', years: '4yrs', color: '#a78bfa' }
    ]
  },
  {
    id: 4,
    title: 'Frameworks',
    icon: 'fa-solid fa-layer-group',
    iconColor: '#f59e0b',
    items: [
      { name: 'FastAPI', years: '3yrs', color: '#f59e0b' },
      { name: 'Express', years: '5yrs', color: '#f59e0b' },
      { name: 'Gin', years: '2yrs', color: '#f59e0b' },
      { name: 'Kafka', years: '3yrs', color: '#f59e0b' },
      { name: 'gRPC', years: '2yrs', color: '#f59e0b' }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="stack" className={styles.techStack}>
      <div className="container">
        {/* Label */}
        <span className={styles.label}>TECH STACK</span>
        
        {/* Title */}
        <h2 className={styles.title}>
          Tools of the <span className={styles.trade}>trade.</span>
        </h2>
        
        {/* Cards Grid */}
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-md-6 col-lg-3" key={category.id}>
              <div className={styles.card}>
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <i className={category.icon} style={{ color: category.iconColor }}></i>
                  <h3>{category.title}</h3>
                </div>
                
                {/* Items */}
                <div className={styles.items}>
                  {category.items.map((item, index) => (
                    <div className={styles.item} key={index}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span 
                        className={styles.itemYears}
                        style={{ color: item.color }}
                      >
                        {item.years}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;