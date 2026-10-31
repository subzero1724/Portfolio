import { Languages } from 'lucide-react';
import { usePreferences } from '../hooks/Preferences';
export default function LanguageSwitcher() {
  const { language, setLanguage, t } = usePreferences();
  return <button className="tool-button" aria-label={language === 'en' ? t.common.switchToIndonesian : t.common.switchToEnglish} onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}><Languages size={15} /><span>{language.toUpperCase()}</span></button>;
}
