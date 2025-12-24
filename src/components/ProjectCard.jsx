import { CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => (
  <div 
    onClick={onClick}
    className="group cursor-pointer grid md:grid-cols-2 gap-8 items-center p-6 rounded-3xl transition hover:bg-slate-50 border border-transparent hover:border-slate-100"
  >
    <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
      Project Image
    </div>
    <div>
      <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">{project.title}</h4>
      <p className="text-slate-600 mb-6 leading-relaxed">{project.desc}</p>
      <div className="flex items-center gap-4 text-sm font-bold text-blue-600">
        <span className="bg-blue-50 px-3 py-1 rounded-full">자세히 보기</span>
        <span className="flex items-center gap-1 text-emerald-600 ml-auto">
          <CheckCircle2 size={16}/> Performance {project.performance}
        </span>
      </div>
    </div>
  </div>
);

export default ProjectCard;