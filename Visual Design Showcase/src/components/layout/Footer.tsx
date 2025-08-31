import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">
              <span className="text-accent">Design</span>Studio
            </h2>
            <p className="text-primary-foreground/80 max-w-xs">
              Creating meaningful brand experiences through thoughtful design and creative problem-solving.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-primary-foreground/80 hover:text-accent transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#process" className="text-primary-foreground/80 hover:text-accent transition-colors">Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="font-medium mb-4">Get in Touch</h3>
            <p className="text-primary-foreground/80 mb-4">
              hello@designstudio.com<br />
              +1 (555) 123-4567
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-primary-foreground/60 text-sm">
          <p>© {currentYear} DesignStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;