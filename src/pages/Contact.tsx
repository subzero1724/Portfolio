import { MapPin, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SocialLinks from '../components/SocialLinks';
import { usePreferences } from '../hooks/Preferences';
export default function Contact() {
  const { t } = usePreferences();
  return <div className="container page-shell contact-page"><PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro}/><div className="contact-location"><span><MapPin size={18}/></span><div><small>{t.contact.location}</small><b>Indonesia</b></div></div><p className="eyebrow contact-profiles">{t.contact.social.toUpperCase()}</p><SocialLinks/><div className="contact-email-cta"><div><p className="eyebrow">{t.contact.email.toUpperCase()}</p><h2>{t.contact.emailValue}</h2></div><a className="button button-primary" href={`mailto:raflitbl1724@gmail.com?subject=${encodeURIComponent(t.contact.emailSubject)}`}>{t.contact.emailCta}<Send size={15}/></a></div></div>;
}
