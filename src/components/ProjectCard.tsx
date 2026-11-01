import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Copy } from '../hooks/Preferences';
import dokugoLogo from '../assets/dokugo-logo.png';
import mcciLogo from '../assets/MCCI-Logo.jfif';

export type Project = Copy['projectsData'][number];

export default function ProjectCard({ project, t }: { project: Project; t: Copy }) {
  return <article className="project-card">
    <Link to={`/projects/${project.id}`} className={`project-art art-${project.visual}`} aria-label={`${t.common.viewDetails}: ${project.title}`}>
      {project.id === 'dokugo' ? <img className="dokugo-logo" src={dokugoLogo} alt="DokuGo logo" loading="lazy" /> : project.id === 'industrial-early-detection' ? <>
        <img className="mcci-project-logo" src={mcciLogo} alt="MCCI — Merak Chemicals Indonesia" loading="lazy" />
      </> : project.id === 'hrdx' ? <>
        <img className="mcci-project-logo" src={mcciLogo} alt="MCCI — Merak Chemicals Indonesia" loading="lazy" />
      </> : <>
      <span className="art-code">{project.category.split(' / ')[0].toUpperCase()}</span>
        <div className="art-mark"><svg viewBox="0 0 300 90" role="img" aria-label={project.title}><polyline points="0,48 62,48 80,48 95,18 111,72 128,34 141,48 188,48 205,48 218,20 234,70 249,41 262,48 300,48" /></svg></div>
      </>}
      <span className="art-caption">{project.title}<ArrowUpRight size={17}/></span>
    </Link>
    <div className="project-card-copy">
      <div className="project-card-meta"><p className="project-category">{project.category}</p><span className={`project-status status-${project.status}`}>{t.projects.statuses[project.status]}</span></div>
      <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
      <p>{project.description}</p>
      <div className="tag-list">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        <Link to={`/projects/${project.id}`}>{t.common.viewDetails}<ArrowUpRight size={14}/></Link>
      </div>
    </div>
  </article>;
}
