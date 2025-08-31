import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stepNumber: number;
  className?: string;
}

const ProcessStep = ({
  title,
  description,
  icon: Icon,
  stepNumber,
  className,
}: ProcessStepProps) => {
  return (
    <Card className={cn("hover-lift", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="bg-accent/10 text-accent rounded-full h-12 w-12 flex items-center justify-center">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Step {stepNumber}
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProcessStep;