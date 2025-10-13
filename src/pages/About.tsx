import { GraduationCap, Target, Heart, Code2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Background */}
            <section className="card-gradient p-8 rounded-2xl animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-primary" size={32} />
                <h2 className="text-2xl font-bold">My Background</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Munawar Abdullahi Hussein, a passionate frontend developer with a love for creating
                  beautiful, functional, and user-centered web applications. My journey in technology began with
                  curiosity about how websites work, which quickly evolved into a deep fascination with the
                  intersection of design and development.
                </p>
                <p>
                  With over 5 months of experience in web development, I've had the opportunity to work on diverse
                  projects ranging from small business websites to complex web applications. I believe in writing
                  clean, maintainable code and creating interfaces that not only look great but provide exceptional
                  user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through technical writing and mentoring fellow developers.
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="card-gradient p-8 rounded-2xl animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-primary" size={32} />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science (Currently Studying)</h3>
                  <p className="text-primary font-medium mb-2">University of somalia • 2024--</p>
                  <p className="text-muted-foreground">
                    I am currently studying software engineering and web development, focusing on creating beautiful and user-friendly websites. Although I don’t have much experience yet, I am eager to work on new projects and learn modern technologies. I hope to work in creative teams in the future to further develop my skills and gain valuable experience.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Frontend Development Certification</h3>
                  <p className="text-secondary font-medium mb-2">Rise acadamy • 20-09-2025</p>
                  <p className="text-muted-foreground">
                    Comprehensive program covering React, JavaScript ES6+, responsive design, and modern frontend practices.
                    Built multiple interactive web applications and mastered component-based architecture.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design Fundamentals</h3>
                  <p className="text-primary font-medium mb-2">Google UX Design Certificate • 2025</p>
                  <p className="text-muted-foreground">
                    Learned user-centered design principles, prototyping, and accessibility standards.
                    Completed hands-on projects focusing on creating intuitive user experiences.
                  </p>
                </div>
              </div>
            </section>

            {/* Goals & Values */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="card-gradient p-8 rounded-2xl animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-primary" size={32} />
                  <h2 className="text-2xl font-bold">Goals</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Master advanced React patterns and state management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Contribute to major open-source projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Build accessible, inclusive web applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Become a senior frontend developer and technical lead
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Create my own design system and component library
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Share knowledge through technical blogging and tutorials
                  </li>
                </ul>
              </section>

              <section className="card-gradient p-8 rounded-2xl animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-secondary" size={32} />
                  <h2 className="text-2xl font-bold">What I Love</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Creating seamless user experiences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Solving complex problems with elegant solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Learning new frontend technologies and frameworks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Writing clean, maintainable code
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Collaborating with creative, passionate teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Turning design mockups into pixel-perfect interfaces
                  </li>
                </ul>
              </section>
            </div>

            {/* Call to Action */}
            <section className="text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects.
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-hero inline-flex items-center gap-2">
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-xl text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;