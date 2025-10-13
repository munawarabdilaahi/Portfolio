import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/munawarabdilaahi',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/munawar-c-laahi-335453333/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: 'munawarclaahi@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative bg-accent/30 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Munawar
              </h3>
              <p className="text-muted-foreground">
                Frontend Developer specializing in React and modern web technologies
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-md">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              Always excited to work on new projects and collaborate with creative teams.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p></p>
              <p>munawarclaahi@gmail.com</p>
              <p>+252 613697169</p>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 font-medium">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Munawar Abdullahi Hussein. Made with</span>
            <Heart size={14} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;