import { useState, useEffect } from 'react';
import { Code, Palette, Database, Globe, Zap, Wrench } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-primary" size={32} />,
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-yellow-300" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-cyan-400" },
        { name: "HTML5/CSS3", level: 98, color: "from-orange-500 to-red-500" }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="text-secondary" size={32} />,
      skills: [
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Adobe XD", level: 80, color: "from-pink-500 to-purple-500" },
        { name: "Responsive Design", level: 95, color: "from-green-500 to-teal-500" },
        { name: "User Experience", level: 88, color: "from-indigo-500 to-purple-500" }
      ]
    },
    {
      title: "State Management & APIs",
      icon: <Database className="text-primary" size={32} />,
      skills: [
        { name: "Redux/Zustand", level: 85, color: "from-purple-600 to-purple-400" },
        { name: "Context API", level: 92, color: "from-blue-600 to-blue-400" },
        { name: "REST APIs", level: 88, color: "from-green-500 to-green-300" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-pink-300" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-secondary" size={32} />,
      skills: [
        { name: "Git & GitHub", level: 92, color: "from-gray-700 to-gray-500" },
        { name: "Vite", level: 88, color: "from-purple-600 to-purple-400" },
        { name: "Webpack", level: 75, color: "from-blue-600 to-blue-400" },
        { name: "Docker", level: 70, color: "from-blue-500 to-cyan-500" }
      ]
    }
  ];

  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "TypeScript", logo: "🔷" },
    { name: "JavaScript", logo: "💛" },
    { name: "Tailwind", logo: "🎨" },
    { name: "Redux", logo: "🔄" },
    { name: "Git", logo: "📦" },
    { name: "Figma", logo: "🎭" },
    { name: "API", logo: "🔗" }
  ];

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <div className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to create amazing digital experiences
            </p>
          </div>

          {/* Tech Stack Icons */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-8 animate-slide-up">Tech Stack</h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="card-gradient p-4 rounded-xl text-center group hover:scale-110 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skill Categories */}
          <section className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="card-gradient p-8 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  {category.icon}
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 5 + skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Additional Skills */}
          <section className="text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">What I Bring to the Table</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-gradient p-6 rounded-xl space-y-4 hover:scale-105 transition-all duration-300">
                <Globe className="text-primary mx-auto" size={48} />
                <h3 className="text-xl font-bold">Modern Web Development</h3>
                <p className="text-muted-foreground">
                  Creating responsive, accessible, and performant web applications using the latest technologies and best practices.
                </p>
              </div>
              
              <div className="card-gradient p-6 rounded-xl space-y-4 hover:scale-105 transition-all duration-300">
                <Zap className="text-secondary mx-auto" size={48} />
                <h3 className="text-xl font-bold">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, SEO, and user experience through code splitting, lazy loading, and efficient bundling.
                </p>
              </div>
              
              <div className="card-gradient p-6 rounded-xl space-y-4 hover:scale-105 transition-all duration-300">
                <Palette className="text-primary mx-auto" size={48} />
                <h3 className="text-xl font-bold">Design Systems</h3>
                <p className="text-muted-foreground">
                  Building scalable design systems and component libraries that ensure consistency across large applications.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-bold">Continuous Learning</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Frontend technology evolves rapidly, and I'm committed to staying current with the latest React patterns, 
                CSS techniques, and user experience best practices. I regularly experiment with new frontend frameworks, 
                contribute to open-source projects, and follow industry leaders to ensure I can deliver modern, 
                cutting-edge frontend solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Components Built</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-muted-foreground">Frontend Libraries</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">GitHub Commits</div>
                </div>
              </div>
              
              <a href="/contact" className="btn-hero inline-flex items-center gap-2">
                Let's Build Something Together
              </a>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;