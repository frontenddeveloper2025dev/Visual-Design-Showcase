import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        'mb-12',
        {
          'text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right',
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;