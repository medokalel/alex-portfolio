import { useState } from 'react';
import styles from './DemoBanner.module.css';

// Everything on this site (name, companies, numbers, links) is sample content. Say so, once, clearly.
export default function DemoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <aside className={styles.banner} aria-label="Demo notice">
      <p>
        <strong>Demo template.</strong> The name, companies, numbers and links on this page are sample content.
        UI built by{' '}
        <a href="https://github.com/medokalel" target="_blank" rel="noopener noreferrer">Mohamed Khalil</a>.
      </p>
      <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Dismiss notice">
        <i className="fas fa-xmark" aria-hidden="true"></i>
      </button>
    </aside>
  );
}
