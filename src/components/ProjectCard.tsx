import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Copy } from '../hooks/Preferences';
import dokugoLogo from '../assets/dokugo-logo.png';

export type Project = Copy['projectsData'][number];

export default function ProjectCard({ project, t }: { project: Project; t: Copy }) {
  return <article className="project-card">
    <Link to={`/projects/${project.id}`} className={`project-art art-${project.visual}`} aria-label={`${t.common.viewDetails}: ${project.title}`}>
      {project.id === 'dokugo' ? <img className="dokugo-logo" src={dokugoLogo} alt="DokuGo logo" loading="lazy" /> : <>
        <span className="art-code">ECG / ML</span>
        <div className="art-mark"><svg viewBox="0 0 300 90" role="img" aria-label="ECG waveform"><polyline points="0,48 62,48 80,48 95,18 111,72 128,34 141,48 188,48 205,48 218,20 234,70 249,41 262,48 300,48" /></svg></div>
      </>}
      <span className="art-caption">{project.title}<ArrowUpRight size={17}/></span>
    </Link>
    <div className="project-card-copy">
      <p className="project-category">{project.category}</p>
      <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
      <p>{project.description}</p>
      <div className="tag-list">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        <Link to={`/projects/${project.id}`}>{t.common.viewDetails}<ArrowUpRight size={14}/></Link>
        <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`${t.common.github}: ${project.title}`}><Github size={15}/></a>
      </div>
    </div>
  </article>;
}
