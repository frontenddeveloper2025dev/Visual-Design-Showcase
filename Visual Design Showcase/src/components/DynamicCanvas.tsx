import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const DynamicCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let mousePosition = { x: 0, y: 0 };
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      
      // Reset particles when resizing
      initParticles();
    };
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      originalX: number;
      originalY: number;
      mouseDistance: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.radius = Math.random() * 2 + 1;
        this.color = `hsla(${Math.random() * 90 + 220}, 80%, 60%, 0.7)`;
        this.velocity = {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2,
        };
        this.mouseDistance = 90;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        // Mouse interaction
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = this.mouseDistance;
        
        let forceDirectionX = dx / distance || 0;
        let forceDirectionY = dy / distance || 0;
        
        const force = (maxDistance - distance) / maxDistance;
        
        if (distance < maxDistance) {
          this.x -= forceDirectionX * force * 2;
          this.y -= forceDirectionY * force * 2;
        } else {
          if (this.x !== this.originalX) {
            const dx = this.x - this.originalX;
            this.x -= dx / 20;
          }
          if (this.y !== this.originalY) {
            const dy = this.y - this.originalY;
            this.y -= dy / 20;
          }
        }
        
        this.draw();
      }
    }
    
    const initParticles = () => {
      particles = [];
      const particleCount = isMobile ? 30 : 100;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };
    
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(142, 84, 233, ${0.2 - distance / 120 * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
      }
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.offsetX;
      mousePosition.y = e.offsetY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mousePosition.x = e.touches[0].clientX - rect.left;
        mousePosition.y = e.touches[0].clientY - rect.top;
      }
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);
    
    setCanvasDimensions();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};

export default DynamicCanvas;