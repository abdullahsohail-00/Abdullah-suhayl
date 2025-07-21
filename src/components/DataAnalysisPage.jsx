import React, { useState, useEffect } from 'react';
import { ArrowLeft, BarChart3, TrendingUp, Database, FileSpreadsheet, Award, ExternalLink, Users, Briefcase, Calendar, ChevronRight, LineChart, PieChart, Activity, CheckCircle } from 'lucide-react';

const DataAnalysisPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Analysis projects data
  const projects = [
    {
      id: 1,
      title: "Gender Disparities in Pakistan's Workforce",
      subtitle: "2014-2018 Analysis",
      description: "Examining gender distribution across Pakistan's key industries using official government labor force survey data.",
      longDescription: "As my very first data visualization and analysis project, I dove into examining gender distribution across Pakistan's key industries using official government labor force survey data. This analysis reveals crucial patterns in workforce participation and highlights areas where policy intervention could promote greater gender equity.",
      status: "completed",
      tools: ["Excel", "Tableau", "Statistical Analysis"],
      icon: Users,
      gradient: "from-purple-600 to-pink-600",
      insights: [
        {
          icon: "🌾",
          title: "Agriculture Sector Shift",
          description: "Female participation decreased from 72.7% to 67.2% between 2014-2018"
        },
        {
          icon: "🏗️",
          title: "Male-Dominated Industries",
          description: "Construction and Transport remain >90% male, indicating significant gender barriers"
        },
        {
          icon: "⚖️",
          title: "Manufacturing Balance",
          description: "Most equitable sector with 16.1% male vs 16.0% female participation"
        },
        {
          icon: "📈",
          title: "Community Services Growth",
          description: "Female participation grew remarkably from 11.3% to 14.6%"
        }
      ],
      dataSource: "Pakistan Labor Force Survey 2014-2018",
      link: "#" // Add your Tableau/project link here
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      subtitle: "Coming Soon",
      description: "Using clustering algorithms to identify distinct customer segments for targeted marketing strategies.",
      status: "upcoming",
      tools: ["Python", "SQL", "Power BI"],
      icon: PieChart,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Sales Forecasting Model",
      subtitle: "Coming Soon",
      description: "Time series analysis and predictive modeling for accurate sales forecasting.",
      status: "upcoming",
      tools: ["Python", "Tableau", "Machine Learning"],
      icon: TrendingUp,
      gradient: "from-emerald-600 to-green-600"
    },
    {
      id: 4,
      title: "Healthcare Data Analysis",
      subtitle: "Coming Soon",
      description: "Analyzing patient data to identify trends and improve healthcare outcomes.",
      status: "upcoming",
      tools: ["R", "SQL", "Tableau"],
      icon: Activity,
      gradient: "from-red-600 to-orange-600"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      subtitle: "Coming Soon",
      description: "Interactive dashboard for financial KPIs and business intelligence.",
      status: "upcoming",
      tools: ["Power BI", "SQL", "DAX"],
      icon: LineChart,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Supply Chain Analytics",
      subtitle: "Coming Soon",
      description: "Optimizing supply chain operations through data-driven insights.",
      status: "upcoming",
      tools: ["Python", "SQL", "Tableau"],
      icon: Database,
      gradient: "from-amber-600 to-yellow-600"
    }
  ];

  // Certifications data - Add your certifications here
  const certifications = [
    {
      id: 1,
      title: "Google Data Analytics Professional Certificate",
      provider: "Google & Coursera",
      completionDate: "January 2025",
      credentialId: "YOUR_CREDENTIAL_ID", // Add your credential ID
      description: "Comprehensive 8-course program covering the entire data analysis process from data preparation to visualization and presentation. This certificate demonstrates proficiency in data analytics tools and methodologies used by professional analysts.",
      
      // What you learned
      courseModules: [
        "Foundations: Data, Data, Everywhere",
        "Ask Questions to Make Data-Driven Decisions",
        "Prepare Data for Exploration",
        "Process Data from Dirty to Clean",
        "Analyze Data to Answer Questions",
        "Share Data Through the Art of Visualization",
        "Data Analysis with R Programming",
        "Google Data Analytics Capstone: Complete a Case Study"
      ],
      
      // Skills gained
      skillsGained: {
        technical: ["SQL", "R Programming", "Tableau", "Spreadsheets", "Data Cleaning", "Data Visualization"],
        analytical: ["Data Analysis", "Statistical Analysis", "Problem Solving", "Critical Thinking"],
        professional: ["Data Ethics", "Presentation Skills", "Stakeholder Communication", "Project Management"]
      },
      
      // Key projects or achievements
      keyAchievements: [
        "Completed hands-on case study analyzing real-world data",
        "Created interactive dashboards in Tableau",
        "Wrote complex SQL queries for data extraction",
        "Developed R scripts for statistical analysis"
      ],
      
      icon: BarChart3,
      color: "from-blue-600 to-cyan-600",
      certificateUrl: "#", // Add your certificate URL/link if available
      linkedinBadge: true // Set to true if you have the LinkedIn badge
    },
    {
      id: 2,
      title: "SQL for Data Science",
      provider: "UC Davis & Coursera",
      completionDate: "November 2024",
      credentialId: "YOUR_CREDENTIAL_ID",
      description: "Mastered SQL fundamentals and advanced querying techniques for data science applications. Learned to extract, manipulate, and analyze data from complex databases.",
      
      courseModules: [
        "Getting Started and Selecting & Retrieving Data with SQL",
        "Filtering, Sorting, and Calculating Data with SQL",
        "Subqueries and Joins in SQL",
        "Modifying and Analyzing Data with SQL"
      ],
      
      skillsGained: {
        technical: ["SQL", "Database Management", "Data Manipulation", "Complex Joins", "Subqueries", "Window Functions"],
        analytical: ["Data Mining", "Query Optimization", "Database Design"],
        professional: ["Problem Solving", "Analytical Thinking"]
      },
      
      keyAchievements: [
        "Built complex queries joining multiple tables",
        "Optimized slow-running queries for better performance",
        "Created stored procedures and functions",
        "Analyzed real-world datasets using SQL"
      ],
      
      icon: Database,
      color: "from-emerald-600 to-green-600",
      certificateUrl: "#",
      linkedinBadge: false
    },
    {
      id: 3,
      title: "Data Visualization with Tableau",
      provider: "Tableau & Coursera",
      completionDate: "December 2024",
      credentialId: "YOUR_CREDENTIAL_ID",
      description: "Learned to create impactful visualizations and interactive dashboards using Tableau. Mastered the art of visual storytelling with data.",
      
      courseModules: [
        "Fundamentals of Visualization",
        "Visual Analytics with Tableau",
        "Creating Dashboards and Stories",
        "Advanced Tableau Features"
      ],
      
      skillsGained: {
        technical: ["Tableau Desktop", "Dashboard Design", "Data Blending", "Calculated Fields", "Parameters"],
        analytical: ["Visual Analytics", "Data Storytelling", "Trend Analysis", "Pattern Recognition"],
        professional: ["Presentation Design", "Business Intelligence", "Stakeholder Communication"]
      },
      
      keyAchievements: [
        "Created 10+ interactive dashboards",
        "Designed executive-level data stories",
        "Implemented advanced calculated fields",
        "Built real-time data connections"
      ],
      
      icon: PieChart,
      color: "from-purple-600 to-pink-600",
      certificateUrl: "#",
      linkedinBadge: true
    },
    {
      id: 4,
      title: "Python for Data Science",
      provider: "IBM & Coursera",
      completionDate: "October 2024",
      credentialId: "YOUR_CREDENTIAL_ID",
      description: "Comprehensive Python programming for data analysis, visualization, and machine learning basics. Built a strong foundation in Python for data science applications.",
      
      courseModules: [
        "Python Basics and Data Structures",
        "Python Data Science Libraries",
        "Data Analysis with Python",
        "Data Visualization with Python",
        "Machine Learning with Python (Basics)"
      ],
      
      skillsGained: {
        technical: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebooks", "Scikit-learn basics"],
        analytical: ["Data Wrangling", "Statistical Analysis", "Exploratory Data Analysis", "Basic ML Algorithms"],
        professional: ["Code Documentation", "Version Control", "Reproducible Research"]
      },
      
      keyAchievements: [
        "Built data analysis pipelines in Python",
        "Created custom visualization functions",
        "Performed EDA on multiple datasets",
        "Implemented basic machine learning models"
      ],
      
      icon: FileSpreadsheet,
      color: "from-indigo-600 to-purple-600",
      certificateUrl: "#",
      linkedinBadge: true
    }
  ];

  // Loading Screen
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <BarChart3 className="w-12 h-12 text-indigo-400 animate-pulse mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Loading Analytics...</h2>
      </div>
    </div>
  );

  // Project Detail Modal
  const ProjectModal = ({ project, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-4xl w-full my-8 border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 text-lg">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Long Description */}
        <div className="mb-8">
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>

        {/* Key Insights */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.insights.map((insight, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{insight.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{insight.title}</h4>
                    <p className="text-sm text-gray-400">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Data Source */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Data Source</h4>
            <p className="text-gray-300">{project.dataSource}</p>
          </div>
        </div>

        {/* View Project Button */}
        <div className="flex justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            <span>View Full Analysis</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
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
        <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 animate-gradient">
                Data Analysis Portfolio
              </span>
            </h1>
            <div className="absolute -top-6 -right-6 text-6xl opacity-20 animate-bounce">
              📊
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming raw data into actionable insights. Currently working on multiple analytics projects 
            that uncover patterns, trends, and stories hidden within the numbers.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500/50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Analytics Projects</span>
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500/50'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certifications</span>
          </button>
        </div>

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isCompleted = project.status === 'completed';
              
              return (
                <div
                  key={project.id}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  <div
                    className={`relative block h-full p-8 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                      isCompleted ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'
                    }`}
                    onClick={() => isCompleted && setSelectedProject(project)}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                        backgroundSize: '200% 200%',
                        animation: isCompleted ? 'shimmer 3s infinite' : 'none'
                      }}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and status */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {!isCompleted && (
                          <span className="px-3 py-1 bg-gray-800/50 text-gray-500 rounded-full text-xs">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-indigo-400 text-sm mb-3">{project.subtitle}</p>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-400 rounded-lg text-xs border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      {/* View link */}
                      {isCompleted && (
                        <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                          <span>View Analysis</span>
                          <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                    
                    {/* Hover accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <div className="space-y-8 mb-20">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header Section */}
                  <div className="p-8 pb-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-4 bg-gradient-to-r ${cert.color} rounded-xl shadow-lg self-start`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Title and Basic Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                              <span>{cert.provider}</span>
                              <span>•</span>
                              <span>Completed: {cert.completionDate}</span>
                              {cert.credentialId && (
                                <>
                                  <span>•</span>
                                  <span>ID: {cert.credentialId}</span>
                                </>
                              )}
                            </div>
                          </div>
                          {cert.linkedinBadge && (
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                              LinkedIn Badge
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Content */}
                  <div className="p-8 space-y-6">
                    {/* Course Modules */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                        Course Modules
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {cert.courseModules.map((module, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-indigo-400 mt-1">•</span>
                            <span>{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Gained */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                        Skills Gained
                      </h4>
                      <div className="space-y-3">
                        {/* Technical Skills */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">Technical Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skillsGained.technical.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Analytical Skills */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">Analytical Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skillsGained.analytical.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Professional Skills */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">Professional Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skillsGained.professional.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {cert.keyAchievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Link (if available) */}
                    {cert.certificateUrl && cert.certificateUrl !== "#" && (
                      <div className="pt-4 border-t border-gray-800">
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            More Insights Coming Soon
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently working on several exciting data analysis projects. 
            Check back soon to see more visualizations and insights!
          </p>
          <div className="flex justify-center gap-2 text-2xl">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>📊</span>
            <span className="animate-bounce" style={{ animationDelay: '200ms' }}>📈</span>
            <span className="animate-bounce" style={{ animationDelay: '400ms' }}>📉</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-900">
          <p className="text-gray-500 mb-2">Turning data into decisions</p>
          <p className="text-gray-600 text-sm">© 2025 Abdullah Sohail. All rights reserved.</p>
        </footer>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

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

export default DataAnalysisPage;