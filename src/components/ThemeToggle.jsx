/**
 * ThemeToggle.jsx — Dark/Light theme toggle with SVG icons
 */
import React from 'react';
import { IconSun, IconMoon } from '../utils/icons';

export default function ThemeToggle({ theme, onChange }) {
  return (
    <div className="theme-toggle-group">
      <button
        className={`theme-toggle-btn ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => onChange('dark')}
        title="Dark mode"
      >
        <IconMoon size={14} />
      </button>
      <button
        className={`theme-toggle-btn ${theme === 'light' ? 'active' : ''}`}
        onClick={() => onChange('light')}
        title="Light mode"
      >
        <IconSun size={14} />
      </button>
    </div>
  );
}
