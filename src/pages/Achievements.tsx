import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { usePreferences } from '../hooks/Preferences';
const icons = [GraduationCap, BadgeCheck, Award, BadgeCheck];
export default function Achievements() {
  const { t } = usePreferences();
  return <div className="container page-shell"><PageHeader eyebrow={t.achievements.eyebrow} title={t.achievements.title} intro={t.achievements.intro}/><div className="achievement-grid">{t.achievementData.map((item, index) => { const Icon = icons[index]; return <article className="achievement-card" key={item.id}><div className={`certificate-placeholder certificate-${index}`}><div className="certificate-lines"><i/><i/><i/></div><div className="certificate-seal"><Icon size={25}/></div><span>{item.kind.toUpperCase()}</span></div><div className="achievement-copy"><p className="eyebrow">{item.kind}</p><h2>{item.title}</h2><p>{item.detail}</p><small>{t.achievements.noProof}</small></div></article>; })}</div></div>;
}
