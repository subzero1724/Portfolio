import PageHeader from '../components/PageHeader';
import SkillCategory from '../components/SkillCategory';
import { skillGroups } from '../data/skills';
import { usePreferences } from '../hooks/Preferences';
export default function Skills() {
  const { t } = usePreferences();
  return <div className="page-shell container"><PageHeader eyebrow={t.skills.eyebrow} title={t.skills.title} intro={t.skills.intro}/><div className="skills-grid">{skillGroups.map((group, index) => <SkillCategory key={group[0]} title={t.skills.categories[index]} skills={group} index={index}/>)}</div><p className="skills-note">* {t.skills.note}</p></div>;
}
