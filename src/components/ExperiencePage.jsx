import React, { useState, useEffect } from 'react';
import { ArrowLeft, Briefcase, Calendar, MapPin, Award, Users, Code, Palette, CheckCircle, TrendingUp, ExternalLink, Download } from 'lucide-react';

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Experience data
  const experiences = [
    {
      id: 0,
      company: "PTCL Group",
      role: "Software Development Practices Intern",
      period: "June 2025 – Present",
      location: "Islamabad, Pakistan",
      type: "Telecommunications",
      current: true,
      description: "Contributing to the revamp of PTCL's legacy Order Management System, transitioning from .NET to a modern React.js and Tailwind CSS-based frontend.",
      achievements: [
        "Rebuilt core UI using React.js and Tailwind CSS, creating 10+ reusable components",
        "Applied DRY principles to ensure high maintainability and eliminate code redundancy",
        "Implemented advanced routing practices in React for efficient navigation",
        "Worked collaboratively in an Agile development team",
        "Ensured clean, well-documented code for future system updates",
        "Supported development of mission-critical internal tools"
      ],
      skills: ["React.js", "Tailwind CSS", "Agile", "Component Architecture"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 1,
      company: "Media Initiation",
      role: "Front-End Development Team Lead & UI/UX Designer",
      period: "March 2024 – January 2025",
      location: "Islamabad, Pakistan",
      type: "Digital Marketing Agency",
      description: "Led hybrid design-development initiatives for 8+ client projects, merging UI/UX expertise with technical execution.",
      achievements: [
        "Reduced project delivery timelines by 25% through integrated workflows",
        "Boosted user retention by 25% via intuitive interfaces and A/B testing",
        "Increased usability scores by 40% through comprehensive research",
        "Mentored 3-5 developers per project, improving code quality by 40%",
        "Slashed post-deployment bugs by 35% via rigorous code reviews",
        "Drove 30% higher mobile engagement through responsive standards",
        "Maintained 95% on-time delivery for concurrent projects"
      ],
      skills: ["React.js", "Figma", "Adobe XD", "Team Leadership", "Agile"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      company: "System Cube",
      role: "UI/UX Designer (Intern)",
      period: "Oct 2023 – Feb 2024",
      location: "Islamabad, Pakistan",
      type: "Software Development Agency",
      description: "Worked as a UX/UI Designer, contributing to user experience research, wireframing, and testing to create seamless digital interactions.",
      achievements: [
        "Assisted in redesigning company websites, reducing bounce rates by 20%",
        "Conducted usability testing and improved interface responsiveness",
        "Designed UX flows and wireframes for mobile and web applications",
        "Developed interactive prototypes for user testing",
        "Created style guides and component libraries for design consistency",
        "Presented design solutions to stakeholders and refined strategies"
      ],
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 3,
      company: "Plan D Studio",
      role: "Web Development Intern",
      period: "July 2022 – Sep 2022 & July 2023 – Sep 2023",
      location: "Islamabad, Pakistan",
      type: "Software Development Agency",
      description: "Gained practical hands-on experience in modern web development, working with React.js, HTML, CSS, Bootstrap, and JavaScript.",
      achievements: [
        "Built 4+ responsive web pages using HTML, CSS, and Bootstrap",
        "Developed 8+ reusable React components under supervision",
        "Implemented basic interactive features using JavaScript",
        "Assisted in application testing across multiple browsers",
        "Collaborated closely with team members to meet client requirements",
        "Participated in code reviews and learned industry best practices"
      ],
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
      color: "from-amber-600 to-orange-600"
    }
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Development",
      skills: ["React.js", "JavaScript", "PHP", "MySQL", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      icon: Code
    },
    {
      title: "UI/UX Design",
      skills: ["Wireframing", "Prototyping", "Usability Research", "Accessibility", "Figma", "Adobe XD", "Sketch"],
      icon: Palette
    },
    {
      title: "Core Skills",
      skills: ["Client Requirements", "UI/UX Best Practices", "Agile Methodology", "Component-Based Development"],
      icon: Award
    }
  ];

  // Stats
  const stats = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Delivered", value: "50+", icon: Briefcase },
    { label: "Client Satisfaction", value: "95%", icon: TrendingUp },
    { label: "Team Members Led", value: "15+", icon: Users }
  ];

  // Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Briefcase className="w-12 h-12 text-emerald-400 animate-pulse mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Loading Experience...</h2>
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
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
              Professional Experience
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            My career journey, achievements, and professional milestones in design and development. 
            Building intuitive interfaces and scalable applications with a focus on user experience.
          </p>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-emerald-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Download Full Resume</span>
          </a>
        </header>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-emerald-500/50'
            }`}
          >
            Timeline View
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'skills'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-emerald-500/50'
            }`}
          >
            Skills & Tools
          </button>
        </div>

        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <section className="mb-20">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400 hidden lg:block"></div>
              
              {/* Experience items */}
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:flex-row animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div
                      className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedExperience(exp.id)}
                    >
                      {/* Company header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                            {exp.company}
                          </h3>
                          <p className="text-emerald-400 font-medium">{exp.role}</p>
                          <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {exp.description}
                      </p>
                      
                      {/* Key achievement */}
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{exp.achievements[0]}</span>
                      </div>
                      
                      {/* View more indicator */}
                      <div className="mt-4 text-emerald-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                        View Details →
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="w-full lg:w-2/12"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills View */}
        {activeTab === 'skills' && (
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tools Section */}
            <div className="mt-12 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-6">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React.js', 'jQuery', 'Git/GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'SQL', 'Tableau', 'Tailwind CSS', 'Bootstrap'].map((tool, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-gray-800/50 rounded-lg text-center text-gray-400 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Experience Detail Modal */}
        {selectedExperience !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}
          >
            <div 
              className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {experiences[selectedExperience].company}
                  </h2>
                  <p className="text-emerald-400 text-lg">{experiences[selectedExperience].role}</p>
                  <p className="text-gray-500">{experiences[selectedExperience].period}</p>
                </div>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">{experiences[selectedExperience].description}</p>
              
              <h3 className="text-lg font-bold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3 mb-6">
                {experiences[selectedExperience].achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {experiences[selectedExperience].skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Google Data Analytics Professional Certificate</h3>
                  <p className="text-gray-400">2025</p>
                </div>
                <Award className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-gray-300 text-sm">Data Analysis, Visualization, SQL, Tableau</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Google UX Design Certification</h3>
                  <p className="text-gray-400">Coursera, 2023</p>
                </div>
                <Award className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-gray-300 text-sm">Key Achievement: Created a mobile app UI improving onboarding completion by 35%</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-900">
          <p className="text-gray-500 mb-2">Building the future, one project at a time</p>
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

export default ExperiencePage;