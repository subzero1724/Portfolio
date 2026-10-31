import { ArrowUp } from 'lucide-react';
import { usePreferences } from '../hooks/Preferences';
export default function BackToTop() {
  const { t } = usePreferences();
  return <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.common.backTop}<ArrowUp size={14} /></button>;
}
