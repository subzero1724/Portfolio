import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { usePreferences } from '../hooks/Preferences';
import dokugoLogo from '../assets/dokugo-logo.png';

export default function Projects() {
  const { t } = usePreferences();
  const { projectId } = useParams();
  const [filter, setFilter] = useState(0);
  const project = t.projectsData.find((item) => item.id === projectId);
  const projects = useMemo(() => filter === 0 ? t.projectsData : t.projectsData.filter((item) => item.category.toLowerCase().includes(t.projects.filters[filter].toLowerCase()) || (filter === 1 && item.id === 'cardioai') || (filter === 2 && item.id === 'dokugo') || (filter === 3 && item.id === 'cardioai') || (filter === 4 && item.id === 'dokugo')), [filter, t]);

  if (projectId) {
    if (!project) return <div className="container page-shell"><PageHeader eyebrow={t.projects.eyebrow} title="404" intro={t.projects.disclaimer}/><Link to="/projects" className="inline-link"><ArrowLeft size={15}/>{t.nav.projects}</Link></div>;
    return <div className="container page-shell project-detail">
      <Link to="/projects" className="inline-link"><ArrowLeft size={15}/>{t.nav.projects}</Link>
      <PageHeader eyebrow={`${t.projects.eyebrow} / ${project.category}`} title={project.title} intro={project.description}/>
      <div className={`detail-art project-art art-${project.visual}`}>
        {project.id === 'dokugo' ? <img className="dokugo-detail-logo" src={dokugoLogo} alt="DokuGo logo" /> : <><span className="art-code">{project.category.toUpperCase()}</span><span className="detail-art-title">{project.title}</span></>}
      </div>
      <div className="detail-layout">
        <section><p className="eyebrow">01 — {t.projects.details.toUpperCase()}</p><h2>{t.projects.details}</h2><p className="detail-description">{project.details}</p><h3>{t.common.focus}</h3><ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul></section>
        <aside className="detail-side"><p className="eyebrow">{t.common.technologies.toUpperCase()}</p><div className="tag-list detail-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="detail-links"><a href={project.repository} target="_blank" rel="noreferrer"><Github size={16}/><span>{t.common.github}</span><small>{project.repository.replace('https://', '')}</small></a><div><ArrowUpRight size={16}/><span>{t.common.demo}</span><small>{t.common.placeholder}</small></div></div></aside>
      </div>
    </div>;
  }

  return <div className="container page-shell"><PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro}/><div className="filter-row" role="group" aria-label={t.projects.eyebrow}>{t.projects.filters.map((item, index) => <button className={`filter-chip ${filter === index ? 'active' : ''}`} key={item} onClick={() => setFilter(index)} aria-pressed={filter === index}>{item}</button>)}</div><div className="project-grid projects-page-grid">{projects.map((item) => <ProjectCard key={item.id} project={item} t={t}/>)}</div><p className="project-disclaimer">{t.projects.disclaimer}</p></div>;
}
