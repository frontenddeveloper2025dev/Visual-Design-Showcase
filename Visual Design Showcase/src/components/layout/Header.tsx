import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            <span className="text-gradient">Design</span>Studio
          </a>
        </div>
        
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        ) : (
          <nav className="flex items-center gap-8">
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#process" className="hover:text-accent transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
            <Button asChild variant="outline" className="hover-lift">
              <a href="#contact">Contact Me</a>
            </Button>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-background flex flex-col items-center pt-10 gap-8 animate-in">
            <a href="#work" className="text-lg" onClick={toggleMenu}>Work</a>
            <a href="#process" className="text-lg" onClick={toggleMenu}>Process</a>
            <a href="#testimonials" className="text-lg" onClick={toggleMenu}>Testimonials</a>
            <Button asChild className="w-[160px]" onClick={toggleMenu}>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;