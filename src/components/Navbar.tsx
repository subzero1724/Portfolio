import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { usePreferences } from '../hooks/Preferences';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const routes = ['/', '/about', '/skills', '/projects', '/experience', '/achievements', '/contact'] as const;
const keys = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'] as const;

export default function Navbar() {
  const { t } = usePreferences();
  const [open, setOpen] = useState(false);
  return <header className="navbar"><div className="nav-inner">
    <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Rafli Nur Rahman — home"><span className="brand-mark">R<span>.</span></span><span className="brand-name">RAFLI NUR RAHMAN<small>AI &amp; MACHINE LEARNING</small></span></Link>
    <button className="mobile-menu icon-button" onClick={() => setOpen(!open)} aria-label={open ? t.common.close : t.common.menu} aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">{routes.map((route, index) => <NavLink key={route} to={route} end={route === '/'} onClick={() => setOpen(false)}>{t.nav[keys[index]]}</NavLink>)}
      <div className="nav-tools"><LanguageSwitcher/><ThemeToggle/></div>
    </nav>
  </div></header>;
}
