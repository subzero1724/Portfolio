import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import { usePreferences } from './hooks/Preferences';

function ScrollReset() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return null;
}

export default function App() {
  const { t, language } = usePreferences();
  const location = useLocation();
  useEffect(() => {
    const section = location.pathname.split('/')[1] ?? 'home';
    const labels: Record<string, string> = { home: t.nav.home, about: t.nav.about, skills: t.nav.skills, projects: t.nav.projects, experience: t.nav.experience, achievements: t.nav.achievements, contact: t.nav.contact };
    document.title = `${labels[section] ?? t.nav.home} — Rafli Nur Rahman | AI & Machine Learning Engineer`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', `${t.home.name} — ${t.home.eyebrow}. ${t.home.intro}`);
    document.documentElement.lang = language;
  }, [language, location.pathname, t]);
  return <><a className="skip-link" href="#main">{t.common.skip}</a><ScrollReset/><Navbar/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:projectId" element={<Projects/>}/><Route path="/experience" element={<Experience/>}/><Route path="/achievements" element={<Achievements/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/></>;
}
