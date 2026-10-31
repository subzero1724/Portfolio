import { Moon, Sun } from 'lucide-react';
import { usePreferences } from '../hooks/Preferences';
export default function ThemeToggle() {
  const { theme, toggleTheme, t } = usePreferences();
  return <button className="tool-button theme-button" aria-label={theme === 'light' ? t.common.switchToDark : t.common.switchToLight} onClick={toggleTheme}>{theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}</button>;
}
