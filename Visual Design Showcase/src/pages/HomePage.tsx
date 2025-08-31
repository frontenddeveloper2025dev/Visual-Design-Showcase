import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import DynamicCanvas from '@/components/DynamicCanvas';
import SectionTitle from '@/components/SectionTitle';
import CategoryFilter from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronDown, 
  LightbulbIcon, 
  PencilRuler, 
  Palette, 
  Eye, 
  Package, 
  Send,
  ArrowDown
} from 'lucide-react';

// Sample data
const categories = ['Branding', 'Packaging', 'Typography', 'Web Design'];

const projects = [
  {
    id: 1,
    title: 'Artisan Coffee Rebrand',
    description: 'Complete brand identity for a premium coffee company, including logo, packaging, and marketing materials.',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Organic Skincare Packaging',
    description: 'Eco-friendly packaging design for a luxury organic skincare line emphasizing sustainability and elegance.',
    category: 'Packaging',
    imageUrl: 'https://images.unsplash.com/photo-1556229174-5e42a09a1307?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Fashion Magazine Layout',
    description: 'Editorial design for a high-end fashion magazine featuring custom typography and grid layouts.',
    category: 'Typography',
    imageUrl: 'https://images.unsplash.com/photo-1560830889-96364c37d4ce?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Tech Startup Website',
    description: 'Modern, responsive website design for an AI startup with interactive elements and animations.',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Artisanal Chocolate Packaging',
    description: 'Luxury packaging design for a handcrafted chocolate company with gold foil detailing.',
    category: 'Packaging',
    imageUrl: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Museum Exhibition Branding',
    description: 'Complete visual identity for a contemporary art exhibition, including wayfinding, posters, and catalog.',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1594390033557-3fbf6137159c?w=800&h=600&fit=crop',
  },
];

const processSteps = [
  {
    title: 'Discovery',
    description: 'I start by understanding your business, audience, and objectives through in-depth research and consultation.',
    icon: LightbulbIcon,
    stepNumber: 1,
  },
  {
    title: 'Concept Development',
    description: 'Creating multiple design concepts based on research findings and strategic objectives.',
    icon: PencilRuler,
    stepNumber: 2,
  },
  {
    title: 'Design Exploration',
    description: 'Refining the chosen concept through color, typography, and layout explorations.',
    icon: Palette,
    stepNumber: 3,
  },
  {
    title: 'Client Review',
    description: 'Presenting designs for feedback and making thoughtful revisions to meet project goals.',
    icon: Eye,
    stepNumber: 4,
  },
  {
    title: 'Final Delivery',
    description: 'Polishing every detail and preparing files for production with comprehensive guidelines.',
    icon: Package,
    stepNumber: 5,
  },
  {
    title: 'Implementation',
    description: 'Supporting the launch with technical assistance and quality control throughout production.',
    icon: Send,
    stepNumber: 6,
  },
];

const testimonials = [
  {
    quote: "Working with DesignStudio transformed our brand completely. The thoughtful approach to design and attention to detail exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Bloom Organics",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    quote: "The package design created for our product line directly contributed to a 45% increase in retail sales. Absolutely exceptional work.",
    author: "Michael Chen",
    role: "Founder",
    company: "Artisan Brew Co.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    quote: "Their ability to translate our complex service into a clear, beautiful visual language made all the difference in our market positioning.",
    author: "Alex Rivera",
    role: "CEO",
    company: "TechSolutions",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
  },
];

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
        <DynamicCanvas />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in">
              Crafting Visual <span className="text-gradient">Stories</span> With Purpose
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground animate-in" style={{animationDelay: '100ms'}}>
              I'm a graphic designer focused on creating meaningful brand experiences through thoughtful design and creative problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in" style={{animationDelay: '200ms'}}>
              <Button size="lg" className="px-8">
                View Portfolio
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                About Me
              </Button>
            </div>
          </div>
        </div>
        <a 
          href="#work" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground animate-bounce"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </section>
      
      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Selected Works" 
            subtitle="A curated collection of projects showcasing my approach to solving design challenges across different mediums and industries."
          />
          
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            className="justify-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                imageUrl={project.imageUrl}
                index={index}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" className="gap-2">
              View All Projects <ChevronDown size={16} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Design Process" 
            subtitle="My collaborative approach ensures that every project is thoughtfully executed from concept to completion."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                stepNumber={step.stepNumber}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Services" 
            subtitle="Comprehensive design solutions tailored to your specific needs and goals."
          />
          
          <Tabs defaultValue="branding" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="packaging">Packaging</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
            </TabsList>
            
            <TabsContent value="branding" className="animate-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Brand Identity</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Logo Design & Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Brand Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Visual Identity Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Brand Guidelines</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Print Design</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Business Stationery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Marketing Materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Publication Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Environmental Graphics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="packaging" className="animate-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Package Design</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Retail Packaging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Sustainable Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Luxury Packaging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Structural Design</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Product Presentation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Product Photography</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Packaging Mockups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Retail Display Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Unboxing Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="animate-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Web Design</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Website UI Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>User Experience (UX)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>E-commerce Design</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Digital Content</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Social Media Graphics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Digital Advertising</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Email Templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      <span>Interactive Presentations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="What clients are saying about their experience working with me."
          />
          
          <div className="grid md:grid-cols-3 gap-6 animate-in">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with thoughtful design that connects with your audience.
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Get in Touch
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default HomePage;