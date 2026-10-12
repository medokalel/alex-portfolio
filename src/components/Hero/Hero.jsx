import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const codeContent = [
  { num: 1, text: "// api/routes/users.ts", type: 'comment' },
  { num: 2, text: "import { Router } from 'express';", type: 'code' },
  { num: 3, text: "import { authenticate } from '../middleware';", type: 'code' },
  { num: 4, text: "import { UserService } from '../services';", type: 'code' },
  { num: 5, text: "", type: 'empty' },
  { num: 6, text: "const router = Router();", type: 'code' },
  { num: 7, text: "", type: 'empty' },
  { num: 8, text: "router.get('/users/:id',", type: 'code' },
  { num: 9, text: "  authenticate,", type: 'code' },
  { num: 10, text: "  async (req, res) => {", type: 'code' },
  { num: 11, text: "    const { id } = req.params;", type: 'code' },
  { num: 12, text: "    const user = await UserService", type: 'code' },
  { num: 13, text: "      .findById(id)", type: 'code' },
  { num: 14, text: "      .select('-password');", type: 'code' },
  { num: 15, text: "    if (!user) return res.status(404)", type: 'code' },
  { num: 16, text: "      .json({ error: 'Not found' });", type: 'code' },
];

const floatingTags = [
  { label: 'Node.js', color: '#22c55e', delay: '0s' },
  { label: 'TypeScript', color: '#60a5fa', delay: '0.5s' },
  { label: 'Python', color: '#818cf8', delay: '1s' },
  { label: 'AWS', color: '#f59e0b', delay: '1.5s' },
  { label: 'PostgreSQL', color: '#8b5cf6', delay: '2s' },
  { label: 'Redis', color: '#f87171', delay: '2.5s' },
  { label: 'Docker', color: '#60a5fa', delay: '3s' },
  { label: 'Kubernetes', color: '#818cf8', delay: '3.5s' },
];

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '50+', label: 'APIs Built' },
  { num: '99.9%', label: 'Avg Uptime' },
];

const CHAR_MS = 25;       // time per typed character
const LINE_PAUSE = 6;     // extra "ticks" of pause at the end of each line

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Total ticks needed to type everything (each character is one tick, plus a pause per line).
const TOTAL_TICKS = codeContent.reduce((sum, line) => sum + line.text.length + LINE_PAUSE, 0);

/** Which lines are visible, and how much of the current one is typed, after `ticks` ticks. */
function typedLines(ticks) {
  let remaining = ticks;
  return codeContent.map((line) => {
    if (remaining <= 0) return { ...line, display: '', visible: false };
    const chars = Math.min(line.text.length, remaining);
    remaining -= line.text.length + LINE_PAUSE;
    return { ...line, display: line.text.substring(0, chars), visible: true };
  });
}

const Hero = () => {
  // One counter drives the typing, so there is no state update inside an effect body.
  // Visitors who prefer reduced motion get the finished code straight away.
  const [ticks, setTicks] = useState(() => (prefersReducedMotion() ? TOTAL_TICKS : 0));
  const [showCursor, setShowCursor] = useState(true);
  const done = ticks >= TOTAL_TICKS;

  useEffect(() => {
    if (done) return;
    const timer = setInterval(() => setTicks((t) => t + 1), CHAR_MS);
    return () => clearInterval(timer);
  }, [done]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(timer);
  }, []);

  const lines = typedLines(ticks);
  const currentLine = done ? -1 : lines.reduce((last, line, i) => (line.visible ? i : last), 0);

  const renderLineText = (line) => {
    if (line.type === 'empty') return null;
    if (line.type === 'comment') {
      return <span className={styles.comment}>{line.display}</span>;
    }

    const text = line.display || '';
    
    // Highlight strings in quotes
    const parts = [];
    let lastIndex = 0;
    const regex = /('.*?')/g;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={lastIndex} className={styles.code}>
            {highlightKeywords(text.substring(lastIndex, match.index))}
          </span>
        );
      }
      parts.push(
        <span key={match.index} className={styles.string}>
          {match[1]}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < text.length) {
      parts.push(
        <span key={lastIndex} className={styles.code}>
          {highlightKeywords(text.substring(lastIndex))}
        </span>
      );
    }
    
    return parts.length > 0 ? parts : <span className={styles.code}>{text}</span>;
  };

  const highlightKeywords = (text) => {
    const keywords = ['import', 'from', 'const', 'async', 'await', 'if', 'return', 'function'];
    let result = text;
    
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      result = result.replace(regex, `{{KW:${kw}}}`);
    });
    
    const parts = result.split(/(\{\{KW:.*?\}\})/);
    return parts.map((part, i) => {
      const match = part.match(/^\{\{KW:(.*?)\}\}$/);
      if (match) {
        return <span key={i} className={styles.keyword}>{match[1]}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.stars}></div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100 pt-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className={styles.badge}>
              <span className={styles.dot}></span>
              Demo template · sample content
            </div>
            
            <h1 className={styles.title}>
              Building Robust<br />
              <span className={styles.gradient}>Systems & APIs</span>
            </h1>
            
            <p className={styles.description}>
              Backend engineer specializing in distributed systems, high-throughput APIs, 
              and cloud-native infrastructure. I turn complex requirements into reliable, scalable software.
            </p>
            
            <div className={styles.buttons}>
              <a href="#projects" className={styles.btnPrimary}>
                View Projects <i className="fas fa-chevron-right ms-2"></i>
              </a>
              <a href="https://github.com/medokalel/alex-portfolio" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                <i className="fab fa-github me-2"></i> Source code
              </a>
            </div>
            
            <div className={styles.stats}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Code Editor */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className={styles.editorContainer} aria-hidden="true">
              {/* Floating Tags - حول الـ editor */}
              <div className={styles.tagsContainer}>
                {floatingTags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={styles.floatingTag}
                    style={{ 
                      borderColor: tag.color,
                      color: tag.color,
                      animationDelay: tag.delay
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              
              <div className={styles.editor}>
                {/* Editor Header */}
                <div className={styles.editorHeader}>
                  <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.fileName}>api/routes/users.ts</span>
                  <span className={styles.langBadge}>TypeScript</span>
                </div>
                
                {/* Code Content */}
                <div className={styles.codeContent}>
                  {lines.map((line, i) => (
                    <div
                      key={i}
                      className={`${styles.codeLine} ${!line.visible ? styles.hidden : ''}`}
                    >
                      <span className={styles.lineNum}>{line.num}</span>
                      <span className={styles.lineText}>
                        {line.visible && renderLineText(line)}
                        {i === currentLine && showCursor && (
                          <span className={styles.cursor}>|</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;