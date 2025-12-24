import React, { useState, useEffect } from 'react';
import { Github, Mail, Code2, CheckCircle2, ArrowUp } from 'lucide-react'; // ArrowUp 아이콘 추가
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { PROJECTS_DATA, ABOUT_ME, EXPERIENCES, EDUCATION, CERTIFICATIONS } from './data/projects';
import ProjectModal from './components/ProjectModal';

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // 시작 상태 (투명하고 아래에 위치)
      whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때 상태
      viewport={{ once: true, margin: "-10%" }} // 한 번만 실행, 화면 10% 지점 진입 시 시작
      transition={{ duration: 0.8, ease: "easeOut" }} // 부드러운 가속도
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  // 1. 스크롤 진행도를 추적하는 로직 추가
  const { scrollYProgress } = useScroll();
  
  // 2. 바가 움직일 때 약간의 탄성(Spring)을 주어 더 부드럽게 만듦
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // 강성
    damping: 30,    // 감쇠 (반동 조절)
    restDelta: 0.001
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false); // Top 버튼 표시 상태
  
  const INITIAL_LIMIT = 6;
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  // 1. 스크롤 감지 (Top 버튼 노출용)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [filterCategory, showFeaturedOnly]);

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const categoryMatch = filterCategory === 'All' || project.category === filterCategory;
    const featuredMatch = showFeaturedOnly ? project.isFeatured : true;
    return categoryMatch && featuredMatch;
  });

  const visibleProjects = filteredProjects.slice(0, limit);
  const categories = ['All', 'React', 'Shopify', 'Spring', 'Unity'];

  const handleLoadMore = () => setLimit(prev => prev + 4);
  
  // 2. 최상단 이동 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* 3. 스크롤 프로그레스 바 레이어 (최상단 고정) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-green-600 origin-left z-[100] shadow-[0_0_8px_rgba(37,99,235,0.5)]"
        style={{ scaleX }}
      />

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[60] border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* 로고 역할의 텍스트: 클릭 시 새로고침 */}
          <h1 
            onClick={() => window.location.reload()}
            className="text-lg font-bold tracking-tighter cursor-pointer hover:text-green-600 transition-colors duration-200 select-none"
          >
            프론트엔드 개발자 <span className="text-green-600">김한솔</span>
          </h1>
          <div className="hidden sm:flex space-x-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-green-600 transition">About</a>
            <a href="#projects" className="hover:text-green-600 transition">Projects</a>
            <a href="#contact" className="hover:text-green-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-5xl mx-auto px-5 pt-28 md:pt-40">
        {/* --- Hero Section --- */}
        <section id="about" className="mb-24 md:mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-green-600 font-bold mb-4 block tracking-widest text-xs uppercase">Front-end Developer</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[1.15] mb-8 tracking-tight break-keep text-slate-900">
              끊임없이 고민하고<br className="hidden sm:block" /> 꾸준히 완성하는<br />
              개발자 <span className="text-green-600">김한솔</span>입니다.
            </h2>
            <div className="flex gap-3">
              <a href="https://www.notion.so/Portfolio-22bb32efc7f6801daa7ffc7b13e9949a?source=copy_link" className="w-[40px] h-[40px] p-3 bg-slate-100 rounded-full hover:bg-green-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </a>
              <a href="mailto:idpw25@gmail.com" className="w-[40px] h-[40px] p-3 bg-slate-100 rounded-full hover:bg-green-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        {/* --- About Me & Experience & Education --- */}
        {/* (이 부분은 이전과 동일하므로 생략하지 않고 그대로 유지하세요) */}
        <FadeInSection>
        <section className="mb-24 md:mb-32 grid md:grid-cols-5 gap-12 md:gap-20">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6">About Me</h3>
            <p className="text-slate-600 leading-relaxed mb-6 break-keep text-lg font-medium">{ABOUT_ME.intro}</p>
            <div className="flex flex-wrap gap-2">
              {ABOUT_ME.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold">#{skill}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-10">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-slate-100 pb-2">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white border-2 border-green-600 rounded-full" />
                  <div className="mb-1 flex justify-between items-start flex-wrap gap-2">
                    <h4 className="font-black text-lg text-slate-800">{exp.company}</h4>
                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-green-600 font-bold text-sm mb-4">{exp.role}</p>
                  <ul className="space-y-2 text-slate-500 text-sm md:text-base">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex gap-2"><span className="text-green-300">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        </FadeInSection>

        {/* --- Education & Certifications --- */}
        <FadeInSection>
        <section className="mb-24 md:mb-32 grid md:grid-cols-5 gap-12 md:gap-20 border-t border-slate-50 pt-16">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-8">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu) => (
                <div key={edu.id}>
                  <p className="text-xs font-bold text-green-600 mb-1">{edu.period}</p>
                  <h4 className="font-black text-slate-800 text-lg">{edu.school}</h4>
                  <p className="text-slate-500 text-sm">{edu.major} · {edu.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-8">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-green-100 transition-colors">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{cert.date}</p>
                  <h4 className="font-bold text-slate-800 mb-1 break-keep leading-snug">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </FadeInSection>

        {/* --- Tech Stack --- */}
        <FadeInSection>
        <section className="mb-24 md:mb-32">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2 tracking-tight text-slate-800">
            <Code2 className="text-green-600" size={20} /> Tech Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {['개발 기술', '마크업 및 디자인', '관리 및 협업'].map((category) => (
              <div key={category} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">{category}</p>
                <ul className="space-y-3 font-bold text-slate-700 text-sm md:text-base">
                  {category === '개발 기술' && <><li>React</li><li>JavaScript</li><li>Spring</li><li>Unity</li></>}
                  {category === '마크업 및 디자인' && <><li>HTML5</li><li>CSS3</li><li>Tailwind CSS</li><li>Photoshop</li></>}
                  {category === '관리 및 협업' && <><li>Git</li><li>Figma</li><li>Zeplin</li><li>Notion</li></>}
                </ul>
              </div>
            ))}
          </div>
        </section>
        </FadeInSection>

        {/* --- Projects Section --- */}
        <FadeInSection>
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h3 className="text-2xl font-bold text-slate-900">My Projects</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex bg-slate-100 p-1 rounded-xl">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setFilterCategory(cat)} className={`px-4 py-2 text-xs font-bold rounded-lg transition ${filterCategory === cat ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>{cat}</button>
                ))}
              </div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" checked={showFeaturedOnly} onChange={(e) => setShowFeaturedOnly(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-blue-500 cursor-pointer" />
                <span className="text-sm font-bold text-slate-600 group-hover:text-green-600 transition">주요 프로젝트</span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[400px]">
            <AnimatePresence mode='popLayout'>
              {visibleProjects.map((project) => (
                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} key={project.id} onClick={() => openModal(project)} className="group flex flex-col p-6 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:border-blue-100 cursor-pointer transition-all duration-300">
                  {/* 이미지 썸네일 영역 */}
                  <div className="aspect-[16/9] w-full bg-slate-50 rounded-2xl mb-6 overflow-hidden border border-slate-100 relative">
                    {project.img ? (
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs font-medium">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex gap-2 mb-3">
                      <span className="text-[10px] font-black px-2 py-1 bg-green-50 text-green-600 rounded uppercase tracking-tighter">{project.category}</span>
                      {project.isFeatured && <span className="text-[10px] font-black px-2 py-1 bg-amber-50 text-amber-600 rounded uppercase tracking-tighter">★ Featured</span>}
                    </div>
                    <h4 className="text-xl font-black mb-2 group-hover:text-green-600 transition tracking-tight leading-tight">{project.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 break-keep">{project.desc}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-green-600 text-xs font-bold underline underline-offset-4 decoration-2">자세히 보기</span>
                      <div className="flex gap-1">{project.tags.slice(0, 2).map(tag => (<span key={tag} className="text-[10px] text-slate-400 font-medium tracking-tight">#{tag}</span>))}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProjects.length > limit && (
            <div className="flex justify-center mt-20">
              <button onClick={handleLoadMore} className="group flex flex-col items-center gap-3">
                <span className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-green-600 hover:shadow-2xl hover:shadow-green-200 transition-all duration-300 active:scale-95">더 많은 프로젝트 보기 ({filteredProjects.length - limit}+)</span>
                <div className="w-1 h-12 bg-slate-100 rounded-full overflow-hidden relative">
                  <motion.div animate={{ y: [0, 48, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute top-0 left-0 w-full h-1/3 bg-green-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                </div>
              </button>
            </div>
          )}
        </section>
        </FadeInSection>
      </main>

      {/* --- Footer --- */}
      <footer id="contact" className="w-full border-t border-slate-100 py-20 md:py-28 bg-slate-50 mt-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <p className="text-slate-400 text-xs md:text-sm mb-4 font-medium uppercase tracking-[0.2em]">Contact Me</p>
          <p className="text-2xl md:text-4xl font-black text-slate-800 hover:text-green-600 transition-colors cursor-pointer break-all">idpw25@gmail.com</p>
          <div className="mt-16 text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">© 2025 Hansol Kim. All rights Reserved.</div>
        </div>
      </footer>

      {/* --- Top 버튼 (조건부 노출) --- */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[70] p-4 bg-white border border-slate-100 text-slate-900 rounded-full shadow-2xl hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-90 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => { setSelectedProject(null); document.body.style.overflow = 'unset'; }} />
    </div>
  );
};

export default App;