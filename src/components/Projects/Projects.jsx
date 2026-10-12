import { useState } from 'react';
import styles from './Projects.module.css';

const categories = ['All', 'APIs', 'Microservices', 'Databases', 'DevOps'];

const projects = [
  {
    id: 1,
    title: 'GraphQL API Gateway',
    description: 'Federated GraphQL gateway handling 2M+ requests/day with real-time subscriptions, rate limiting, and distributed tracing.',
    category: 'APIs',
    tags: ['Node.js', 'GraphQL', 'Redis', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Event-Driven Order System',
    description: 'CQRS + event sourcing architecture for e-commerce orders. Kafka-backed, 99.99% durability, idempotent consumers.',
    category: 'Microservices',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'Docker']
  },
  {
    id: 3,
    title: 'TimeSeries Analytics DB',
    description: 'Custom time-series storage layer on top of PostgreSQL with hypertable partitioning, 10x query improvement over naive schema.',
    category: 'Databases',
    tags: ['Python', 'TimescaleDB', 'Redis', 'FastAPI']
  },
  {
    id: 4,
    title: 'K8s Multi-Tenant Platform',
    description: 'Self-service Kubernetes namespace provisioning with RBAC, network policies, and cost allocation for 50+ engineering teams.',
    category: 'DevOps',
    tags: ['Kubernetes', 'Terraform', 'Go', 'Prometheus']
  },
  {
    id: 5,
    title: 'Auth Service (OIDC/OAuth2)',
    description: 'Production-grade identity service with PKCE, refresh token rotation, and SSO integration for 12 internal applications.',
    category: 'APIs',
    tags: ['Node.js', 'TypeScript', 'Redis', 'JWT']
  },
  {
    id: 6,
    title: 'Database Migration CLI',
    description: 'Zero-downtime schema migration tool with rollback support, dry-run mode, and automated compatibility checks.',
    category: 'Databases',
    tags: ['Go', 'PostgreSQL', 'CLI', 'Docker']
  }
];

const categoryIcons = {
  APIs: 'fa-solid fa-plug',
  Microservices: 'fa-solid fa-cubes',
  Databases: 'fa-solid fa-database',
  DevOps: 'fa-solid fa-server'
};

const categoryColors = {
  APIs: '#60a5fa',
  Microservices: '#22c55e',
  Databases: '#c4b5fd',
  DevOps: '#f59e0b'
};

const tagColors = {
  'Node.js': '#60a5fa',
  'GraphQL': '#f472b6',
  'Redis': '#f87171',
  'PostgreSQL': '#818cf8',
  'Go': '#06b6d4',
  'Kafka': '#22c55e',
  'Docker': '#60a5fa',
  'Python': '#f59e0b',
  'TimescaleDB': '#f87171',
  'FastAPI': '#22c55e',
  'Kubernetes': '#60a5fa',
  'Terraform': '#c4b5fd',
  'TypeScript': '#60a5fa',
  'JWT': '#f59e0b',
  'CLI': '#94a3b8',
  'Prometheus': '#f87171'
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
                {/* Sample projects have no screenshots or links: a category icon stands in for the image */}
                <div className={styles.imageWrapper}>
                  <div className={styles.placeholder} style={{ color: categoryColors[project.category] }} aria-hidden="true">
                    <i className={categoryIcons[project.category]}></i>
                  </div>
                  <span
                    className={styles.categoryBadge}
                    style={{ color: categoryColors[project.category] }}
                  >
                    {project.category}
                  </span>
                  <span className={styles.sampleBadge}>Sample project</span>
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