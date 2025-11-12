// src/scripts/theme-switcher.ts

const THEME_KEY = 'theme';
const THEME_SYSTEM = 'system';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

let currentTheme: string = getInitialTheme();

function getInitialTheme(): string {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    return storedTheme;
  }
  return THEME_SYSTEM;
}

function applyTheme(theme: string): void {
  const root = document.documentElement;

  if (theme === THEME_SYSTEM) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(prefersDark ? 'theme-dark' : 'theme-light');
  } else {
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(theme === THEME_DARK ? 'theme-dark' : 'theme-light');
  }
}

function setTheme(theme: string): void {
  currentTheme = theme;
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

function setupThemeSwitcher(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return; // Do not run on server-side or environments without DOM
  }

  const initializeTheme = () => {
    applyTheme(currentTheme);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
  } else {
    initializeTheme();
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e: MediaQueryListEvent) => {
    if (currentTheme === THEME_SYSTEM) {
      applyTheme(THEME_SYSTEM);
    }
  });
}

// Export functions to be used in React components
export { setTheme, setupThemeSwitcher, getInitialTheme, THEME_SYSTEM, THEME_LIGHT, THEME_DARK };
