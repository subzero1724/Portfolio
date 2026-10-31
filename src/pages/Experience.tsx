import { CalendarClock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { usePreferences } from '../hooks/Preferences';
export default function Experience() {
  const { t } = usePreferences();
  return <div className="container page-shell"><PageHeader eyebrow={t.experience.eyebrow} title={t.experience.title} intro={t.experience.intro}/><div className="experience-note"><CalendarClock size={17}/><span>{t.experience.pending}</span></div><ExperienceTimeline entries={t.experienceData} types={t.experience.types} pending={t.experience.pending}/></div>;
}
