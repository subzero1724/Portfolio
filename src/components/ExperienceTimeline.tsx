import { BookOpen, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import type { Copy } from '../hooks/Preferences';
type Entry = Copy['experienceData'][number];
const typeIcons = [BriefcaseBusiness, GraduationCap, BookOpen];
export default function ExperienceTimeline({ entries, types, pending }: { entries: readonly Entry[]; types: readonly string[]; pending: string }) {
  return <div className="timeline">{entries.map((entry) => { const typeIndex = entry.type === 'Professional' ? 0 : entry.type === 'Training program' ? 2 : 1; const Icon = typeIcons[typeIndex]; return <article className="timeline-entry" key={entry.id}><div className="timeline-marker"><Icon size={17}/></div><div className="timeline-content"><div className="timeline-top"><span className="timeline-type">{types[typeIndex]}</span><span className="timeline-date">{entry.date || pending}</span></div><h2>{entry.title}</h2>{entry.organization && <p className="timeline-org">{entry.organization}</p>}<p>{entry.details}</p></div></article>; })}</div>;
}
