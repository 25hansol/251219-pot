// src/components/ProjectModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition text-slate-400">
              <X size={24} />
            </button>
            
            <div className="mb-10">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-extrabold px-3 py-1 bg-green-50 text-green-600 rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-slate-900 leading-tight">{project.title}</h3>
            </div>

            <div className="space-y-10">
              <section>
                <h4 className="text-sm font-black text-slate-400 uppercase mb-3 tracking-[0.2em]">🚀 Project Overview</h4>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{project.details}</p>
              </section>
              <section>
                <h4 className="text-sm font-black text-slate-400 uppercase mb-3 tracking-[0.2em]">🍎 Point</h4>
                <div className="bg-slate-50 border-l-4 border-green-600 p-6 rounded-r-xl">
                  <p className="text-slate-700 font-medium italic">"{project.troubleshooting}"</p>
                </div>
              </section>

              <div className="flex gap-4 pt-4">
                {/* <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition shadow-lg shadow-slate-200">
                  <Github size={18} /> Github
                </a> */}
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                  <ExternalLink size={18} /> 사이트로 이동
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;