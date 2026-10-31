import { motion } from 'framer-motion';
export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <motion.div className="page-header" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></motion.div>;
}
