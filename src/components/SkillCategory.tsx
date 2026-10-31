import { Braces, BrainCircuit, Code2, Database, Wrench } from 'lucide-react';
const icons = [Code2, BrainCircuit, Braces, Database, Wrench];
export default function SkillCategory({ title, skills, index }: { title: string; skills: readonly string[]; index: number }) {
  const Icon = icons[index] ?? Code2;
  return <article className="skill-category"><div className="skill-icon"><Icon size={19} strokeWidth={1.7}/><span>0{index + 1}</span></div><h2>{title}</h2><ul>{skills.map((skill) => <li key={skill}>{skill}<span className="skill-dot"/></li>)}</ul></article>;
}
