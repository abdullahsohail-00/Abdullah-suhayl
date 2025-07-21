import React, { useState, useEffect } from 'react';
import { ArrowLeft, Palette, Monitor, Smartphone, FileText, Sparkles, ExternalLink, Download, Mail } from 'lucide-react';

const GraphicDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Portfolio categories
  const categories = [
    { id: 'all', name: 'All Work', icon: Sparkles },
    { id: 'branding', name: 'Brand Identity', icon: Palette },
    { id: 'social', name: 'Social Media', icon: Monitor },
    { id: 'print', name: 'Print Design', icon: FileText },
    { id: 'digital', name: 'Digital Design', icon: Smartphone }
  ];

  // Portfolio projects
  const projects = [
    // Brand Identity Projects
    {
      id: 1,
      title: "Morphix Solutions",
      category: "branding",
      description: "Complete brand identity for tech startup",
      image: "/Morpix Solutions. USA.svg",
      color: "from-red-600 to-orange-600",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      id: 2,
      title: "Green Initiatives",
      category: "branding",
      description: "Eco-friendly company brand redesign",
      image: "/Safaah Associates Ltd. Riyadh.svg",
      color: "from-green-600 to-emerald-600",
      tags: ["Logo", "Sustainability", "Brand Strategy"]
    },
    {
      id: 3,
      title: "Mega Engineering",
      category: "branding",
      description: "Industrial company visual identity",
      image: "/Mega Engineering Solution Pvt Ltd, PK.svg",
      color: "from-blue-600 to-indigo-600",
      tags: ["Corporate Identity", "Logo Design"]
    },
    {
      id: 4,
      title: "DSD Recruitment",
      category: "branding",
      description: "Employee Recruitment Company",
      image: "/DSD Recruitment, PK.svg",
      color: "from-purple-600 to-pink-600",
      tags: ["Food Industry", "Brand Design"]
    },
    {
      id: 5,
      title: "Macedonia Pizza",
      category: "branding",
      description: "Pizzeria brand identity and packaging",
      image: "/Macedonia Pizza Ltd Islamabad. PK.svg",
      color: "from-red-600 to-yellow-600",
      tags: ["Restaurant", "Packaging", "Logo"]
    },
    {
      id: 6,
      title: "TrendyShe",
      category: "branding",
      description: "Fashion brand visual identity",
      image: "/TredyShe Ecommerce Store, PK.svg",
      color: "from-pink-600 to-rose-600",
      tags: ["Fashion", "Lifestyle", "Branding"]
    },
    {
      id: 7,
      title: "Expressive Edge",
      category: "branding",
      description: "Creative agency brand guidelines",
      image: "/Expressive Edge Blogging Website.svg",
      color: "from-amber-600 to-orange-600",
      tags: ["Agency", "Creative", "Guidelines"]
    },
    // Social Media Projects
    {
      id: 8,
      title: "Roof Masters Campaign",
      category: "social",
      description: "Social media campaign for roofing company",
      image: "/Roof.svg",
      color: "from-blue-600 to-cyan-600",
      tags: ["Social Media", "Campaign", "Marketing"]
    },
    {
      id: 9,
      title: "Media Initiation Posts",
      category: "social",
      description: "Digital marketing agency social presence",
      image: "/Media.svg",
      color: "from-purple-600 to-blue-600",
      tags: ["Instagram", "LinkedIn", "Content"]
    },
    // Print & Digital
    {
      id: 10,
      title: "Royal Hotels Brochure",
      category: "print",
      description: "Luxury hotel chain marketing materials",
      image: "/Custom.svg",
      color: "from-amber-600 to-yellow-600",
      tags: ["Brochure", "Print", "Hospitality"]
    },
    {
      id: 11,
      title: "Metal Masters Flyer",
      category: "print",
      description: "Industrial company promotional design",
      image: "/Line & Shape Builders Pvt Ltd PK.svg",
      color: "from-gray-600 to-gray-800",
      tags: ["Flyer", "Industrial", "Marketing"]
    },
    {
      id: 12,
      title: "Strategy Mobile App",
      category: "digital",
      description: "UI design for business strategy app",
      image: "/Triangle.svg",
      color: "from-indigo-600 to-purple-600",
      tags: ["Mobile UI", "App Design", "Strategy"]
    }
  ];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Palette className="w-12 h-12 text-pink-400 animate-pulse mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Loading Designs...</h2>
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
        <div className="absolute top-20 -left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
              Graphic Design Work
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Playing around with modern graphic design techniques, visual branding, digital illustrations, 
            UI/UX design, and anything creative that sparks my interest.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                20+
              </div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                10+
              </div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                1+
              </div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Design and Content Creation
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I excel at delivering leading-edge digital solutions, combining technical expertise with a strong focus 
              on design and content creation. I produce high-quality content, including creative ad copy writing 
              services, helping you establish thought leadership and attract organic traffic. Specializing in graphic 
              design, branding identity, marketing content for your business requirements. I also provide web designs.
            </p>
          </div>
        </section>

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
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${project.color}">
                          <span class="text-4xl font-bold text-white/20">${project.title.charAt(0)}</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-xs border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Design Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Social Media Design</h3>
              <p className="text-gray-400 text-sm">
                Compelling and creative marketing posts that effectively communicate brand messages. 
                Work for Roof Masters and Media Initiation showcases impactful designs with strategic messaging.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Designs</h3>
              <p className="text-gray-400 text-sm">
                From brochures to posters, I create professional marketing materials for various industries. 
                My work includes designs for Royal Hotels, Metal Masters, reflecting high standards of creativity.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brand Strategy</h3>
              <p className="text-gray-400 text-sm">
                My approach integrates strategy, content, and design to ensure every project aligns with 
                the client's goals and industry trends. Creating cohesive brand experiences.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Looking for a creative partner to bring your brand vision to life? 
            Let's collaborate on your next design project.
          </p>
          <a
            href="mailto:abdullah.sohail@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-purple-500/25"
          >
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-900">
          <p className="text-gray-500 mb-2">Crafted with creativity and passion</p>
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

export default GraphicDesign;