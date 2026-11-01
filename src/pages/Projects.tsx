import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { usePreferences } from '../hooks/Preferences';
import dokugoLogo from '../assets/dokugo-logo.png';
import mcciLogo from '../assets/MCCI-Logo.jfif';

export default function Projects() {
  const { t } = usePreferences();
  const { projectId } = useParams();
  const [filter, setFilter] = useState(0);
  const project = t.projectsData.find((item) => item.id === projectId);
  const projects = useMemo(() => {
    if (filter === 0) return t.projectsData;
    const matchingIds: Record<number, string[]> = { 1: ['cardioai'], 2: ['industrial-early-detection', 'dokugo', 'hrdx'], 3: ['cardioai'], 4: ['dokugo', 'hrdx'] };
    return t.projectsData.filter((item) => matchingIds[filter]?.includes(item.id));
  }, [filter, t]);

  if (projectId) {
    if (!project) return <div className="container page-shell"><PageHeader eyebrow={t.projects.eyebrow} title="404" intro={t.projects.disclaimer}/><Link to="/projects" className="inline-link"><ArrowLeft size={15}/>{t.nav.projects}</Link></div>;
    const projectIndex = t.projectsData.findIndex((item) => item.id === projectId);
    const previous = t.projectsData[(projectIndex - 1 + t.projectsData.length) % t.projectsData.length];
    const next = t.projectsData[(projectIndex + 1) % t.projectsData.length];
    return <div className="container page-shell project-detail">
      <Link to="/projects" className="inline-link"><ArrowLeft size={15}/>{t.projects.back}</Link>
      <PageHeader eyebrow={`${t.projects.eyebrow} / ${project.category}`} title={project.title} intro={project.subtitle}/>
      <div className="detail-meta"><span className={`project-status status-${project.status}`}>{t.projects.statuses[project.status]}</span><span>{project.category}</span></div>
      <div className={`detail-art project-art art-${project.visual}`}>
        {project.id === 'dokugo' ? <img className="dokugo-detail-logo" src={dokugoLogo} alt="DokuGo logo" /> : project.id === 'industrial-early-detection' || project.id === 'hrdx' ? <img className="mcci-detail-logo" src={mcciLogo} alt="MCCI — Merak Chemicals Indonesia" /> : <><span className="art-code">{project.category.toUpperCase()}</span><span className="detail-art-title">{project.title}</span></>}
      </div>
      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-section"><p className="eyebrow">01 — {t.projects.details.toUpperCase()}</p><h2>{t.projects.details}</h2><p className="detail-description">{project.details}</p></section>
          <section className="detail-section"><h2>{t.projects.problem}</h2><p>{project.problem}</p></section>
          <section className="detail-section"><h2>{t.projects.objectives}</h2><ul className="feature-list">{project.objectives.map((item) => <li key={item}><Check size={15}/>{item}</li>)}</ul></section>
          <section className="detail-section"><h2>{t.projects.methodology}</h2><p>{project.methodology}</p></section>
          <section className="detail-section"><h2>{t.projects.contribution}</h2><p>{project.contribution}</p></section>
          <section className="detail-section"><h2>{t.projects.progress}</h2><p>{project.results}</p><p className="detail-progress">{project.progress}</p></section>
          <section className="detail-section"><h2>{t.common.focus}</h2><ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul></section>
        </div>
        <aside className="detail-side"><p className="eyebrow">{t.projects.stack.toUpperCase()}</p><div className="tag-list detail-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></aside>
      </div>
      <nav className="project-pagination" aria-label={t.projects.eyebrow}><Link to={`/projects/${previous.id}`}><ArrowLeft size={15}/><span><small>{t.projects.previous}</small>{previous.title}</span></Link><Link to={`/projects/${next.id}`}><span><small>{t.projects.next}</small>{next.title}</span><ArrowRight size={15}/></Link></nav>
    </div>;
  }

  return <div className="container page-shell"><PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro}/><div className="filter-row" role="group" aria-label={t.projects.eyebrow}>{t.projects.filters.map((item, index) => <button className={`filter-chip ${filter === index ? 'active' : ''}`} key={item} onClick={() => setFilter(index)} aria-pressed={filter === index}>{item}</button>)}</div><div className="project-grid projects-page-grid">{projects.map((item) => <ProjectCard key={item.id} project={item} t={t}/>)}</div><p className="project-disclaimer">{t.projects.disclaimer}</p></div>;
}
