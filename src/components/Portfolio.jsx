import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Play, Pause, Github, Linkedin, Twitter, Mail, Download, ExternalLink, Camera, Code, Palette, Smartphone, Brush, Beaker, Sparkles, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const audioRef = useRef(null);

  // Portfolio items with enhanced visual design - reordered as per sketch
  const portfolioItems = useMemo(() => [
    {
      id: 0,
      title: "Professional Experience",
      description: "My career journey, achievements, and professional milestones in design and development",
      link: "/experience",
      techStack: ["Leadership", "Project Management", "Team Collaboration"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M8 6v10a2 2 0 002 2h4a2 2 0 002-2V6" />
        </svg>
      ),
      gradient: "from-emerald-600 to-teal-600",
      shadowColor: "shadow-emerald-500/25"
    },
    {
      id: 1,
      title: "Data Analysis Portfolio",
      description: "Interactive dashboards and insightful data visualizations showcasing analytics expertise",
      link: "/data-analysis",
      techStack: ["Python", "Tableau", "Power BI", "SQL"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-indigo-600 to-purple-600",
      shadowColor: "shadow-indigo-500/25"
    },
    {
      id: 2,
      title: "Websites Portfolio",
      description: "Modern, responsive websites built with cutting-edge technologies and best practices",
      link: "/websites",
      techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: "from-blue-600 to-cyan-500",
      shadowColor: "shadow-blue-500/25"
    },
    {
      id: 3,
      title: "Experiments Lab",
      description: "Creative coding experiments, interactive demos, and learning projects",
      link: "/playground",
      techStack: ["Three.js", "WebGL", "Creative Coding"],
      icon: Beaker,
      gradient: "from-amber-600 to-yellow-500",
      shadowColor: "shadow-amber-500/25"
    },
    {
      id: 4,
      title: "GitHub Profile",
      description: "Open source contributions and development projects showcasing code quality",
      link: "https://github.com/abdullahsohail-00",
      techStack: ["JavaScript", "Python", "Open Source"],
      icon: Github,
      gradient: "from-gray-700 to-gray-900",
      shadowColor: "shadow-gray-700/25"
    },
    {
      id: 5,
      title: "Behance Profile",
      description: "UI/UX designs, user research, and design thinking case studies",
      link: "https://www.behance.net/absohail",
      techStack: ["Figma", "Adobe XD", "Prototyping"],
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-blue-400",
      shadowColor: "shadow-blue-500/25"
    },
    {
      id: 6,
      title: "Graphic Design Work",
      description: "Brand identity, marketing materials, and creative visual storytelling",
      link: "/graphic-design",
      techStack: ["Illustrator", "Photoshop", "InDesign"],
      icon: Brush,
      gradient: "from-pink-600 to-rose-500",
      shadowColor: "shadow-pink-500/25"
    },
  
  ], []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Audio control
  const toggleAudio = useCallback(() => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  }, [isAudioPlaying]);

  // Attractive Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 opacity-30 blur-3xl animate-pulse"></div>
        
        {/* Loading content */}
        <div className="relative text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-black rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold mb-2 animate-fade-in">Abdullah Suhayl</h2>
          <p className="text-gray-400 animate-fade-in animation-delay-200">Transforming Ideas into Reality</p>
        </div>
      </div>
    </div>
  );

  // Enhanced Portfolio Item Component
  const PortfolioItem = React.memo(({ item, index }) => {
    const Icon = item.icon;
    const isActive = activeCard === item.id;

    return (
      <div
        className="relative group"
        onMouseEnter={() => setActiveCard(item.id)}
        onMouseLeave={() => setActiveCard(null)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 ${item.shadowColor}`}></div>
        
        <a
          href={item.link}
          target={item.link.startsWith('/') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="relative block h-full p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {typeof Icon === 'function' ? <Icon /> : <Icon className="w-6 h-6 text-white" />}
              </div>
              <ExternalLink className={`w-5 h-5 text-gray-500 transform transition-all duration-300 ${isActive ? 'translate-x-1 -translate-y-1 text-white' : ''}`} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
              {item.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {item.techStack.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full text-xs border border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
              <span>View {item.link.startsWith('/') ? 'Portfolio' : 'Profile'}</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </a>
      </div>
    );
  });

  // Social links
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-sohail", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Github, href: "https://github.com/abdullahsohail-00", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Twitter, href: "https://twitter.com/absohail", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:abdullahsohailas00@gmail.com", label: "Email", color: "hover:text-red-400" }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Audio Player */}
      <audio ref={audioRef} loop className="hidden">
        <source src="/background.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Audio Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-40 shadow-2xl shadow-purple-500/25 group"
        aria-label="Toggle background music"
      >
        {isAudioPlaying ? (
          <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 max-w-7xl">
        {/* Hero Section */}
        <header className="mb-20 text-center relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="block text-gray-400 text-2xl md:text-3xl font-normal mb-2">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Abdullah Suhayl
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Software Developer | UI/UX Designer | Business Intelligence Enthusiast
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Open to new opportunities</span>
            </div>
          </div>
        </header>

        {/* Portfolio Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Featured Projects
            </h2>
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Hover to explore</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                About Me
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Results-driven Full-Stack Developer with 3+ years of expertise in React.js, JavaScript, PHP, and MySQL, 
                complemented by strong UI/UX design skills. I've delivered 50+ web projects with 95%+ client satisfaction, 
                specializing in creating intuitive interfaces and building scalable applications.
              </p>
              <p>
                Currently working as a Software Development Practices Intern at{' '}
                <a href="https://ptcl.com.pk" target="_blank" rel="noopener noreferrer" 
                   className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                  PTCL Group
                </a>
                , contributing to the modernization of enterprise-level systems. Previously led front-end development initiatives at{' '}
                <a href="https://mediainitiation.com" target="_blank" rel="noopener noreferrer" 
                   className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold hover:from-pink-400 hover:to-purple-400 transition-all duration-300">
                  Media Initiation
                </a>
                , where I managed cross-functional teams and delivered 8+ client projects.
              </p>
              <p>
                My journey includes valuable experiences at{' '}
                <a href="https://www.instagram.com/systemcube.co/" target="_blank" rel="noopener noreferrer" 
                   className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold hover:from-purple-400 hover:to-indigo-400 transition-all duration-300">
                  SystemCube
                </a>{' '}
                as a UI/UX Design Intern and{' '}
                <a href="https://plandstudios.com" target="_blank" rel="noopener noreferrer" 
                   className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300">
                  Plan D Studio
                </a>{' '}
                as a Web Development Intern. I'm also passionate about data analytics, holding a Google Data Analytics Professional Certificate 
                and actively working on data visualization projects.
              </p>
              <p className="text-base">
                Beyond coding, I explore the world through photography, capturing the beauty of Islamabad, and continuously expand my skill set 
                through creative experiments and open-source contributions. I believe in merging technical excellence with design thinking to 
                create digital solutions that truly make a difference.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="/cv.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Download CV</span>
                <Download className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-pink-900">
              <img 
                src={process.env.PUBLIC_URL + "/profile.jpg"} 
                alt="Abdullah Suhayl" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <span class="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">AS</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-900">
          <p className="text-gray-500 mb-2">Designed & Built with 💜 by Abdullah Suhayl</p>
          <p className="text-gray-600 text-sm">© 2025 All rights reserved.</p>
        </footer>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
