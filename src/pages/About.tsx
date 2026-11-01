import { BookOpen, Compass, GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { usePreferences } from '../hooks/Preferences';
import profilePhoto from '../assets/Rafli_Nur_Rahman.JPG';

export default function About() {
  const { t } = usePreferences();
  return <div className="page-shell container">
    <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro}/>
    <div className="about-layout">
      <div className="about-main">
        <section className="content-section"><p className="eyebrow">01 — {t.about.storyTitle.toUpperCase()}</p><h2>{t.about.storyTitle}</h2><p>{t.about.story}</p></section>
        <section className="content-section interest-section"><div><p className="eyebrow">02 — {t.about.research.toUpperCase()}</p><h2>{t.about.research}</h2></div><div className="interest-list">{t.about.researchItems.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><BookOpen size={16}/></div>)}</div></section>
      </div>
      <aside className="about-aside">
        <div className="info-card"><div className="info-card-icon"><GraduationCap size={20}/></div><p className="eyebrow">{t.about.education}</p><h3>{t.about.degree}</h3><p>{t.about.field}</p><span className="info-muted">{t.about.institution}</span><span className="info-muted">{t.about.studyPeriod}</span></div>
        <div className="info-card career-card"><div className="info-card-icon"><Compass size={20}/></div><p className="eyebrow">{t.about.career}</p><p>{t.about.careerText}</p></div>
        <div className="about-monogram"><img className="about-profile-image" src={profilePhoto} alt="Rafli Nur Rahman"/><small>INFORMATICS<br/>ENGINEERING</small></div>
      </aside>
    </div>
  </div>;
}
