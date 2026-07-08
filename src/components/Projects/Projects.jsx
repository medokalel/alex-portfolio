import React, { useState } from 'react';
import styles from './Projects.module.css';
import projectImg from '../../assets/images/pngtree-empty-computer-desk-with-wooden-table-and-supplies-for-montage-photo-image_50050390.png'

const categories = ['All', 'APIs', 'Microservices', 'Databases', 'DevOps'];

const projects = [
  {
    id: 1,
    title: 'GraphQL API Gateway',
    description: 'Federated GraphQL gateway handling 2M+ requests/day with real-time subscriptions, rate limiting, and distributed tracing.',
    image: projectImg,
    category: 'APIs',
    tags: ['Node.js', 'GraphQL', 'Redis', 'PostgreSQL'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Event-Driven Order System',
    description: 'CQRS + event sourcing architecture for e-commerce orders. Kafka-backed, 99.99% durability, idempotent consumers.',
    image: projectImg,
    category: 'Microservices',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'Docker'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'TimeSeries Analytics DB',
    description: 'Custom time-series storage layer on top of PostgreSQL with hypertable partitioning, 10x query improvement over naive schema.',
    image: projectImg,
    category: 'Databases',
    tags: ['Python', 'TimescaleDB', 'Redis', 'FastAPI'],
    github: '#',
    live: '#'
  },
  {
    id: 4,
    title: 'K8s Multi-Tenant Platform',
    description: 'Self-service Kubernetes namespace provisioning with RBAC, network policies, and cost allocation for 50+ engineering teams.',
    image: projectImg,
    category: 'DevOps',
    tags: ['Kubernetes', 'Terraform', 'Go', 'Prometheus'],
    github: '#',
    live: '#'
  },
  {
    id: 5,
    title: 'Auth Service (OIDC/OAuth2)',
    description: 'Production-grade identity service with PKCE, refresh token rotation, and SSO integration for 12 internal applications.',
    image: projectImg,
    category: 'APIs',
    tags: ['Node.js', 'TypeScript', 'Redis', 'JWT'],
    github: '#',
    live: '#'
  },
  {
    id: 6,
    title: 'Database Migration CLI',
    description: 'Zero-downtime schema migration tool with rollback support, dry-run mode, and automated compatibility checks.',
    image: projectImg,
    category: 'Databases',
    tags: ['Go', 'PostgreSQL', 'CLI', 'Docker'],
    github: '#',
    live: '#'
  }
];

const categoryColors = {
  APIs: '#3b82f6',
  Microservices: '#22c55e',
  Databases: '#a78bfa',
  DevOps: '#f59e0b'
};

const tagColors = {
  'Node.js': '#3b82f6',
  'GraphQL': '#e535ab',
  'Redis': '#ef4444',
  'PostgreSQL': '#6366f1',
  'Go': '#06b6d4',
  'Kafka': '#22c55e',
  'Docker': '#3b82f6',
  'Python': '#f59e0b',
  'TimescaleDB': '#ef4444',
  'FastAPI': '#22c55e',
  'Kubernetes': '#3b82f6',
  'Terraform': '#a78bfa',
  'TypeScript': '#3b82f6',
  'JWT': '#f59e0b',
  'CLI': '#64748b',
  'Prometheus': '#ef4444'
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Label */}
        <span className={styles.label}>PROJECTS</span>
        
        {/* Title */}
        <h2 className={styles.title}>
          Work that ships to <span className={styles.gradient}>production.</span>
        </h2>
        
        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  
                  {/* Overlay */}
                  <div className={styles.overlay}>
                    <a href={project.github} className={styles.iconBtn} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.live} className={styles.iconBtn} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  
                  {/* Category Badge */}
                  <span 
                    className={styles.categoryBadge}
                    style={{ color: categoryColors[project.category] }}
                  >
                    {project.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  {/* Tags */}
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={styles.tag}
                        style={{ color: tagColors[tag] || '#94a3b8' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;