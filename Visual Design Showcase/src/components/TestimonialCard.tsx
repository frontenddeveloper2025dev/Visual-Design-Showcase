import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  className,
}: TestimonialCardProps) => {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardContent className="p-6 flex-1 flex flex-col">
        <Quote className="h-6 w-6 text-accent mb-4" />
        <p className="italic mb-6 flex-1">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar>
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={author} />
            ) : (
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;