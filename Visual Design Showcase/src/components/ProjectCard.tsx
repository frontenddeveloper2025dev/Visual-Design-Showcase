import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  className?: string;
  index: number;
}

const ProjectCard = ({ title, description, category, imageUrl, className, index }: ProjectCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden border hover-lift group cursor-pointer transition-all duration-300",
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <div 
          className="aspect-[4/3] bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150" />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
            {category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;