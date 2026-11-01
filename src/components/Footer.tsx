import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { usePreferences } from '../hooks/Preferences';
import BackToTop from './BackToTop';
import profilePhoto from '../assets/Rafli_Nur_Rahman.JPG';

export default function Footer() {
  const { t } = usePreferences();
  return <footer className="footer"><div className="footer-inner"><div><Link className="brand footer-brand" to="/"><img className="brand-avatar" src={profilePhoto} alt=""/><span className="brand-name">RAFLI NUR RAHMAN<small>{t.footer.role.toUpperCase()}</small></span></Link><p>{t.footer.note}</p></div><div className="footer-right"><div className="social-row" aria-label={t.contact.social}><a href="mailto:raflitbl1724@gmail.com" aria-label={t.contact.email}><Mail size={16} /></a><a href="https://github.com/subzero1724" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href="https://www.linkedin.com/in/rafli-nur-rahman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a></div><BackToTop/></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RAFLI NUR RAHMAN</span><span>INDONESIA</span></div></footer>;
}
