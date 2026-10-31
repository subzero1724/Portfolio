import { Github, Linkedin, Mail } from 'lucide-react';
import { usePreferences } from '../hooks/Preferences';
export default function SocialLinks() {
  const { t } = usePreferences();
  return <div className="social-links"><a className="social-card" href="mailto:raflitbl1724@gmail.com"><span><Mail size={18}/></span><b>{t.contact.email}</b><small>{t.contact.emailValue}</small></a><a className="social-card" href="https://github.com/subzero1724" target="_blank" rel="noreferrer"><span><Github size={18}/></span><b>GitHub</b><small>{t.contact.githubValue}</small></a><a className="social-card" href="https://www.linkedin.com/in/rafli-nur-rahman/" target="_blank" rel="noreferrer"><span><Linkedin size={18}/></span><b>LinkedIn</b><small>{t.contact.linkedinValue}</small></a></div>;
}
