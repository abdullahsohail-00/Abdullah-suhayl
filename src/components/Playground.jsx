import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowLeft, Code, Sparkles, Globe, Gamepad2, Calculator, Clock, Orbit } from 'lucide-react';

const Playground = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Playground projects data
  const playgroundProjects = [
    {
      id: 1,
      title: "Solar System",
      description: "A recreation of a solar system in pure CSS with realistic orbital animations.",
      link: "https://abdullahsohail-00.github.io/Planetery-System/",
      tech: ["CSS", "Animation", "3D Transform"],
      icon: Orbit,
      gradient: "from-purple-600 to-blue-600",
      category: "Creative"
    },
    {
      id: 2,
      title: "CSS Clock",
      description: "A simple CSS and pure JS clock with smooth animations.",
      link: "https://abdullahsohail-00.github.io/Css-clock/",
      tech: ["CSS", "JavaScript", "DOM"],
      icon: Clock,
      gradient: "from-cyan-600 to-blue-600",
      category: "Interactive"
    },
    {
      id: 3,
      title: "JavaScript Calculator",
      description: "A sleek, mobile-friendly calculator built with JavaScript and CSS.",
      link: "https://abdullahsohail-00.github.io/JavaScript-Calculator/",
      tech: ["JavaScript", "CSS", "Responsive"],
      icon: Calculator,
      gradient: "from-green-600 to-emerald-600",
      category: "Tools"
    },
    {
      id: 4,
      title: "Guess The Number Game",
      description: "An interactive vanilla JS number guessing game with score tracking.",
      link: "https://abdullahsohail-00.github.io/guess_the_number-master/",
      tech: ["JavaScript", "Game Logic", "DOM"],
      icon: Gamepad2,
      gradient: "from-pink-600 to-rose-600",
      category: "Games"
    },
    {
      id: 5,
      title: "Google Maps Scraper",
      description: "Efficient data extraction tool for Google Maps business data with CSV export.",
      link: "https://github.com/abdullahsohail-00/Google-Maps-Web-Scraper",
      tech: ["Python", "Selenium", "BeautifulSoup", "CSV"],
      icon: Globe,
      gradient: "from-orange-600 to-red-600",
      category: "Automation"
    },
    {
      id: 6,
      title: "Hostel Management System",
      description: "C++ system for managing hostel operations with secure login and file storage.",
      link: "https://github.com/abdullahsohail-00/Hostel-Management-System-C-",
      tech: ["C++", "OOP", "File Handling", "Data Structures"],
      icon: Code,
      gradient: "from-amber-600 to-yellow-600",
      category: "Systems"
    }
  ];

  // Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Sparkles className="w-12 h-12 text-amber-400 animate-pulse mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Loading Playground...</h2>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Navigation */}
        <nav className="mb-12">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Portfolio</span>
          </a>
        </nav>

        {/* Header */}
        <header className="mb-16 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 animate-gradient">
                My Playground
              </span>
            </h1>
            <div className="absolute -top-6 -right-6 text-6xl opacity-20 animate-bounce">
              🎮
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here you'll find me playing around and experimenting with modern web technologies, 
            creative coding, and anything I find interesting.
          </p>
        </header>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Creative', 'Interactive', 'Tools', 'Games', 'Automation', 'Systems'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-sm hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {playgroundProjects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-full p-8 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                      backgroundSize: '200% 200%',
                      animation: isHovered ? 'shimmer 3s infinite' : 'none'
                    }}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and category */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-400 rounded-lg text-xs border border-gray-700/50 group-hover:border-gray-600 group-hover:text-gray-300 transition-all duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View project link */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 group-hover:text-amber-400 transition-colors duration-300">
                        View Project
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-amber-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-900">
          <div className="mb-6">
            <p className="text-gray-400 text-lg mb-2">More experiments coming soon...</p>
            <div className="flex justify-center gap-2 text-2xl">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>🚀</span>
              <span className="animate-bounce" style={{ animationDelay: '200ms' }}>✨</span>
              <span className="animate-bounce" style={{ animationDelay: '400ms' }}>🎨</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">© 2025 Abdullah Sohail. Built with curiosity.</p>
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
        
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Playground;