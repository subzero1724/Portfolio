import { Award, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { usePreferences } from '../hooks/Preferences';
import bangkitCertificate from '../assets/Sertifikat_Bangkit.jfif';
import labCertificate from '../assets/Sertifikat_Aslab.jfif';
import mentorCertificate from '../assets/Sertifikat_Mentor_SC.jfif';
import dcmlCertificate from '../assets/Sertifikat_DCML.pdf';

const certificates: Record<string, { src: string; pdf?: boolean }> = {
  bangkit: { src: bangkitCertificate },
  labkom: { src: labCertificate },
  mentor: { src: mentorCertificate },
  dcml: { src: dcmlCertificate, pdf: true },
};

export default function Achievements() {
  const { t } = usePreferences();
  return <div className="container page-shell">
    <PageHeader eyebrow={t.achievements.eyebrow} title={t.achievements.title} intro={t.achievements.intro}/>
    <div className="achievement-grid">{t.achievementData.map((item) => {
      const certificate = certificates[item.id];
      return <article className="achievement-card" key={item.id}>
        <div className="achievement-certificate">
          {certificate.pdf ? <a className="certificate-pdf" href={certificate.src} target="_blank" rel="noreferrer"><Award size={30}/><span>{t.achievements.certificatePdf}<ExternalLink size={14}/></span></a> : <a href={certificate.src} target="_blank" rel="noreferrer" aria-label={`${t.achievements.viewCertificate}: ${item.title}`}><img src={certificate.src} alt={`${item.title} certificate`} loading="lazy"/></a>}
        </div>
        <div className="achievement-copy"><p className="eyebrow">{item.kind}</p><h2>{item.title}</h2><p>{item.detail}</p><small>{t.achievements.viewCertificate}</small></div>
      </article>;
    })}</div>
  </div>;
}
