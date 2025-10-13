import { ExternalLink, Github, Eye } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import traival from '../assets/traival.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Som Travel project",
      description: "Som Travel is a travel website designed to simplify tourism and trip planning within Somalia. It allows people to explore tourist destinations, book travel services, and access information about the most popular attractions. It was built with a modern frontend, focusing on a simple, user-friendly design and providing an excellent user experience.",
      image: "src/assets/traival.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Context API", "Local Storage"],
      githubUrl: "https://github.com/munawarabdilaahi/Somalia-Travel",
      liveUrl: "https://somalia-travel-ejtd.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Bizpro project",
      description: "BizPro is a modern business solution platform designed to help companies grow faster. It provides services such as consulting, design, and digital marketing to support businesses in building their brand, reaching more customers, and streamlining operations. The platform is built with a clean and professional frontend, ensuring a user-friendly experience for business owners.",
      image: "src/assets/Bizpro.png",
      technologies: ["React", "TypeScript", "Drag & Drop API", "Local Storage", "Chakra UI"],
      githubUrl: "https://github.com/munawarabdilaahi/practice",
      liveUrl: "https://practice-nine-gilt.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Dhismo homes website",
      description: "Dhismo Homes is a modern company specializing in the construction and design of homes.",
      image: "src/assets/Dhismahomes.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      githubUrl: "https://github.com/munawarabdilaahi/dhisma-homes",
      liveUrl: "https://dhisma-homes.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
      githubUrl: "https://github.com/munawar/portfolio",
      liveUrl: "https://munawar.dev",
      featured: false
    },
    {
      id: 5,
      title: "flow-pilot-project",
      description: "Design no-code workflows that route tasks, send alerts, and eliminate busywork.",
      image: "src/assets/Screenshot 2025-09-22 203541.png",
      technologies: ["HTML/CSS", "JS", "My first project"],
      githubUrl: "https://github.com/munawarabdilaahi/FlowPilot-project.",
      liveUrl: "https://flow-pilot-project-ydqf.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce-store",
      description: "Curated selection of the finest products for your lifestyle. Experience quality, style, and innovation in every purchase.",
      image: "src/assets/Screenshot 2025-09-23 210720.png",
      technologies: ["React", "Spoonacular API", "Redux", "Styled Components"],
      githubUrl: "https://github.com/munawarabdilaahi/e-commerce",
      liveUrl: "https://e-commerce-pi-wheat-55.vercel.app/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional web experiences
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 animate-slide-up">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="card-gradient rounded-2xl overflow-hidden group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section>
            <h2 className="text-3xl font-bold mb-8 animate-slide-up">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="card-gradient rounded-xl overflow-hidden group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 text-sm bg-accent hover:bg-primary hover:text-primary-foreground rounded transition-all duration-300"
                      >
                        <Github size={14} />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 text-sm bg-primary hover:bg-primary-glow text-primary-foreground rounded transition-all duration-300"
                      >
                        <Eye size={14} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20 space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Like What You See?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always working on new projects and exploring innovative ideas.
              Let's collaborate on your next project!
            </p>
            <a href="/contact" className="btn-hero inline-flex items-center gap-2">
              Start a Project
            </a>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
