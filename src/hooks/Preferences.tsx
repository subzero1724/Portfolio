import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import en from '../i18n/en';
import id from '../i18n/id';

export type Language = 'en' | 'id';
export type Theme = 'light' | 'dark';
export type Copy = typeof en | typeof id;
type Preferences = { language: Language; setLanguage: (language: Language) => void; theme: Theme; toggleTheme: () => void; t: Copy };
const PreferencesContext = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('portfolio-language') === 'id' ? 'id' : 'en');
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light');
  useEffect(() => { localStorage.setItem('portfolio-language', language); document.documentElement.lang = language; }, [language]);
  useEffect(() => { localStorage.setItem('portfolio-theme', theme); document.documentElement.dataset.theme = theme; }, [theme]);
  const value = useMemo(() => ({ language, setLanguage, theme, toggleTheme: () => setTheme((current) => current === 'light' ? 'dark' : 'light'), t: language === 'en' ? en : id }), [language, theme]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error('usePreferences must be used inside PreferencesProvider');
  return value;
}
