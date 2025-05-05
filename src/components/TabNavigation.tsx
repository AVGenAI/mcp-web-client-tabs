"use client";

import { ReactNode } from 'react';
import { useMCPStore } from '@/store/mcpStore';
import styles from './TabNavigation.module.css';

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabNavigationProps = {
  tabs: Tab[];
};

export default function TabNavigation({ tabs }: TabNavigationProps) {
  const { activeTabIndex, setActiveTab } = useMCPStore();
  
  // Ensure activeTabIndex is within bounds
  const safeActiveIndex = activeTabIndex >= 0 && activeTabIndex < tabs.length ? activeTabIndex : 0;
  
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${index === safeActiveIndex ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[safeActiveIndex].content}
      </div>
    </div>
  );
}