import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { FaJs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { SiHtml5 } from "react-icons/si";
import { Link } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';
import PageTransition from '../components/PageTransition';
import munawar from '../assets/munawar.png';
import Bizpro from "../assets/Bizpro.png";
import Dhismahomes from '../assets/Dhismahomes.png';
import traival from '../assets/traival.png';

const Home = () => {
  const roles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="glow-bg min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8 animate-slide-up">
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-gradient">
                        Munawar
                      </span>
                      <br />
                      <span className="text-foreground">
                        Abdullahi Hussein
                      </span>
                    </h1>

                    <div className="text-xl lg:text-2xl text-muted-foreground">
                      I'm a{' '}
                      <TypingEffect
                        texts={roles}
                        speed={100}
                        deleteSpeed={50}
                        delay={2000}
                      />
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Passionate about creating beautiful, functional, and user-centered digital experiences.
                    I combine technical expertise with creative problem-solving to build modern web applications.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/projects" className="btn-hero inline-flex items-center gap-2 text-center justify-center">
                      View My Work
                      <ArrowRight size={20} />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-xl text-foreground hover:bg-accent transition-all duration-300 hover:scale-105"
                    >
                      <Mail size={20} />
                      Get In Touch
                    </Link>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-6 pt-4">
                    <a
                      href="https://github.com/munawarabdilaahi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/munawar-c-laahi-335453333/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="munawarclaahi@gmail.com"
                      className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>

                {/* Right Column - Profile Image */}
                <div className="flex justify-center lg:justify-end animate-float">
                  <div className="relative">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                      <img
                        src={munawar}
                        alt="Munawar Abdullahi Hussein"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-accent/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Card 1 */}
              <div className="p-6 rounded-2xl shadow-lg bg-primary/10 hover:bg-primary/20 transition text-center space-y-2">
                <div className="text-4xl font-extrabold text-primary">5+</div>
                <div className="text-muted-foreground font-medium">months Experience</div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl shadow-lg bg-primary/10 hover:bg-primary/20 transition text-center space-y-2">
                <div className="text-4xl font-extrabold text-primary">5+</div>
                <div className="text-muted-foreground font-medium">Projects Completed</div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl shadow-lg bg-primary/10 hover:bg-primary/20 transition text-center space-y-2">
                <div className="text-4xl font-extrabold text-primary">5+</div>
                <div className="text-muted-foreground font-medium">Technologies</div>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl shadow-lg bg-primary/10 hover:bg-primary/20 transition text-center space-y-2">
                <div className="text-4xl font-extrabold text-primary">100%</div>
                <div className="text-muted-foreground font-medium">Client Satisfaction</div>
              </div>

            </div>
          </div>
        </section>


        {/* About Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-foreground">About Me</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate Frontend Developer with 5 months of experience building modern, visually appealing,
                  and fully responsive websites. I specialize in React, TypeScript, and modern CSS frameworks,
                  and I constantly strive to stay up to date with the latest web technologies and best practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I studied web development at Rise Academy, where I focused on frontend development. Currently,
                  I am learning backend development as I work towards becoming a Full Stack Developer.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
              >
                Read More About Me
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20 bg-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-12">
              <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 space-y-4">
                  <div className="w-full h-47 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <img src={traival} alt="traival" className='rounded-md' />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Som Travel</h3>
                  <p className="text-muted-foreground">Explore extraordinary destinations with our premium travel packages. Create memories that last a lifetime with personalized luxury experiences.</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 space-y-4">
                  <div className="w-full h-47 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <img src={Bizpro} alt="bizpro" className='rounded-md' />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">BizPro</h3>
                  <p className="text-muted-foreground">Accelerate your growth with BizPro — your all-in-one solution for consulting, creative design, and smart marketing strategies. Everything you need to take your business to the next level, all in one place.</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 space-y-4 md:col-span-2 lg:col-span-1">
                  <div className="w-full h-47 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <img src={Dhismahomes} alt="dhismo" className='rounded-md' />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Dhisma Homes</h3>
                  <p className="text-muted-foreground">Own a modern home in the heart of the city — a perfect choice for those who value comfort, convenience, and style. Each residence is thoughtfully designed with spacious living areas,</p>
                </div>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-xl text-foreground hover:bg-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                See All Projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-12">
              <h2 className="text-4xl font-bold text-foreground">Technologies & Skills</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">⚛️</span>
                  </div>
                  <span className="text-foreground font-medium">React</span>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaJs className='text-3xl' />
                  </div>
                  <span className="text-foreground font-medium">JavaScript</span>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BiLogoTailwindCss  className='text-3xl'   />
                  </div>
                  <span className="text-foreground font-medium">Tailwind CSS</span>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TbBrandTypescript  className='text-3xl' />

                  </div>
                  <span className="text-foreground font-medium">TypeScript</span>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 group col-span-2 md:col-span-3 lg:col-span-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiHtml5  className='text-3xl' />
                  </div>
                  <span className="text-foreground font-medium">HTML/CSS</span>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="py-20 bg-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Want to work together on your next project? I'm always excited to discuss new opportunities
                and bring creative ideas to life. Let's get in touch!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Mail size={20} />
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;