import React, { useState, useEffect } from 'react';
import { ArrowLeft, Globe, Code, Smartphone, Search, ExternalLink, Github, Layers, Zap } from 'lucide-react';

const WebsitesPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Removed searchTerm state
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: Layers, count: 15 },
    { id: 'insurance', name: 'Insurance', icon: Globe, count: 5 },
    { id: 'business', name: 'Business', icon: Zap, count: 7 },
    { id: 'apps', name: 'Applications', icon: Smartphone, count: 2 },
    { id: 'tools', name: 'Tools', icon: Code, count: 1 }
  ];

  // Website projects
  const projects = [
    {
      id: 1,
      title: "Agile Coverage 2.0",
      category: "insurance",
      description: "Compare insurance plans easily with a responsive modern interface",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Font Awesome"],
      link: "https://abdullahsohail-00.github.io/Agile-Coverage-2.0/",
      color: "from-blue-600 to-cyan-600",
      featured: true
    },
    {
      id: 2,
      title: "Elite Medicare Assist 3.0",
      category: "insurance",
      description: "Medicare info site with forms, legal pages, and branding",
      techStack: ["HTML5", "CSS3", "Bootstrap 5.3.2", "JavaScript"],
      link: "https://abdullahsohail-00.github.io/EliteMedicareAssist3.0/",
      color: "from-emerald-600 to-green-600"
    },
    {
      id: 3,
      title: "Health4You",
      category: "insurance",
      description: "Responsive health insurance site with forms and animations",
      techStack: ["HTML5", "SCSS/CSS3", "Bootstrap 5", "jQuery", "Owl Carousel", "WOW.js"],
      link: "https://abdullahsohail-00.github.io/health4you-Ver-2.0/",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "My Old Portfolio",
      category: "business",
      description: "Personal portfolio showcasing web development skills and projects",
      techStack: ["HTML5", "CSS3", "Bootstrap", "FontAwesome", "Responsive Design"],
      link: "https://abdullahsohail-00.github.io/abdullahsohail-old-portfolio/",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 5,
      title: "Royal Hostel Pvt Ltd",
      category: "business",
      description: "Modern hostel site with rooms, services, booking, and contact",
      techStack: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Owl Carousel", "WOW.js"],
      link: "https://abdullahsohail-00.github.io/Royal-Hostels-Pvt-Ltd-Website/",
      color: "from-amber-600 to-orange-600"
    },
    {
      id: 6,
      title: "CPM Insurance Website",
      category: "insurance",
      description: "Multi-page insurance site with smooth UI, forms, and animations",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "WOW.js", "Animate.css"],
      link: "https://abdullahsohail-00.github.io/CPM-Ver-4.0/",
      color: "from-red-600 to-pink-600"
    },
    {
      id: 7,
      title: "Being Insured",
      category: "insurance",
      description: "Responsive insurance site with quote forms and service sliders",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Owl Carousel", "Animate.css"],
      link: "https://abdullahsohail-00.github.io/Being-Insurance-Website/",
      color: "from-teal-600 to-cyan-600"
    },
    {
      id: 8,
      title: "Grape Detection System",
      category: "business",
      description: "Modern website promoting grape health benefits with blog and services",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "PHP", "Mailchimp"],
      link: "https://abdullahsohail-00.github.io/Grape-Detection-Website/",
      color: "from-purple-600 to-violet-600"
    },
    {
      id: 9,
      title: "CallerQuest",
      category: "business",
      description: "Dynamic people search website with tabbed search forms",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Bootstrap Icons"],
      link: "https://abdullahsohail-00.github.io/Caller-Quest-Website/",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 10,
      title: "Serene Cars",
      category: "business",
      description: "Car rental website with tour packages and booking system",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Lightbox2", "Font Awesome"],
      link: "https://abdullahsohail-00.github.io/Serene-Cars-Static-Website/",
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 11,
      title: "Media Initiation",
      category: "business",
      description: "Digital agency website with portfolio, services, and animations",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "WOW.js", "Isotope", "Lightbox2"],
      link: "https://abdullahsohail-00.github.io/Media-Initiation-Agency-Dynamic-Website/",
      color: "from-pink-600 to-purple-600",
      featured: true
    },
    {
      id: 12,
      title: "EMAAR AL MAJD",
      category: "business",
      description: "Mobile accessories company with product showcase and Arabic support",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Google Translate API"],
      link: "https://abdullahsohail-00.github.io/Emaar-Al-Majd-Static-Website/",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 13,
      title: "Khanda Mobile",
      category: "business",
      description: "Mobile phone company site with enhanced UI and smooth scrolling",
      techStack: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Lightbox", "Waypoints"],
      link: "https://abdullahsohail-00.github.io/Khanda-General-Trading-Company-Limited-Static-Website/",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 14,
      title: "Google Maps Scraper",
      category: "tools",
      description: "Python scraper for extracting business data from Google Maps",
      techStack: ["Python", "Selenium", "BeautifulSoup", "Pandas", "Regex", "CSV"],
      link: "https://github.com/abdullahsohail-00/Google-Maps-Web-Scraper",
      github: true,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 15,
      title: "Gym Freak App",
      category: "apps",
      description: "Flutter fitness app with AI-powered exercise monitoring features",
      techStack: ["Flutter", "Dart", "Custom Widgets", "fl_chart", "Camera API"],
      link: "https://github.com/abdullahsohail-00/Gym-Freak-An-AI-Powered-Exercise-Monitoring-Application.git",
      github: true,
      color: "from-red-600 to-orange-600",
      featured: true
    }
  ];

  // Filter projects (search removed)
  const filteredProjects = projects.filter(project => {
    return selectedCategory === 'all' || project.category === selectedCategory;
  });

  // Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Globe className="w-12 h-12 text-blue-400 animate-pulse mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Loading Projects...</h2>
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
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-gradient">
              Websites Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Modern, responsive websites built with cutting-edge technologies. From insurance platforms 
            to business websites, each project showcases clean code and thoughtful design.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-8">
            <strong>Note:</strong> These are just a few of my projects that are not under NDA. Many more projects (35+) have been built for clients under confidentiality agreements and cannot be publicly displayed.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                35+
              </div>
              <div className="text-sm text-gray-500">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                15+
              </div>
              <div className="text-sm text-gray-500">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                100%
              </div>
              <div className="text-sm text-gray-500">Responsive Design</div>
            </div>
          </div>
        </header>

        {/* Search Bar removed */}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-60">({category.count})</span>
              </button>
            );
          })}
        </div>

        {/* Featured Projects */}
        {filteredProjects.some(p => p.featured) && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.filter(p => p.featured).map((project) => (
                <div
                  key={project.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                        {project.title}
                      </h3>
                      {project.github ? <Github className="w-6 h-6 text-gray-400" /> : <Globe className="w-6 h-6 text-gray-400" />}
                    </div>
                    
                    <p className="text-gray-400 mb-6 text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 5).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-3 py-1 text-gray-500 text-sm">
                          +{project.techStack.length - 5} more
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {selectedCategory === 'all' ? 'All Projects' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.id}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-1">
                  {/* Color strip */}
                  <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                        {project.title}
                      </h3>
                      {project.github ? 
                        <Github className="w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors" /> : 
                        <Globe className="w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors" />
                      }
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-gray-600 text-xs">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <span>View {project.github ? 'Repository' : 'Live Site'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </section>

        {/* Technologies Section */}
        <section className="mt-20 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Technologies I Work With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'React', 'Flutter', 'Python', 'PHP', 'Tailwind CSS', 'SCSS', 'Git'].map((tech, i) => (
              <div
                key={i}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-900">
          <p className="text-gray-500 mb-2">Crafted with clean code and creativity</p>
          <p className="text-gray-600 text-sm">© 2025 Abdullah Sohail. All rights reserved.</p>
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

export default WebsitesPortfolio;