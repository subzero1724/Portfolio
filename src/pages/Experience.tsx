import PageHeader from '../components/PageHeader';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { usePreferences } from '../hooks/Preferences';
export default function Experience() {
  const { t } = usePreferences();
  return <div className="container page-shell"><PageHeader eyebrow={t.experience.eyebrow} title={t.experience.title} intro={t.experience.intro}/><ExperienceTimeline entries={t.experienceData} types={t.experience.types} pending={t.experience.pending}/></div>;
}
