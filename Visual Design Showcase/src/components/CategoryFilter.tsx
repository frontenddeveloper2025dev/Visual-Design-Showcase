import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}: CategoryFilterProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2 mb-8', className)}>
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onSelectCategory('all')}
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;