"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">MCP Web Client</Link>
          </div>
          
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link 
                  href="/" 
                  className={pathname === '/' ? styles.active : ''}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/manage" 
                  className={pathname.startsWith('/manage') ? styles.active : ''}
                >
                  Manage
                </Link>
              </li>
              <li>
                <Link 
                  href="/settings" 
                  className={pathname.startsWith('/settings') ? styles.active : ''}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}