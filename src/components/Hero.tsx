import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface HeroProps {
  authorName: string;
  authorImage: string;
  tagline: string;
  description: string;
  onExploreClick: () => void;
}

export function Hero({ authorName, authorImage, tagline, description, onExploreClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
            <ImageWithFallback
              src={authorImage}
              alt={`${authorName} portrait`}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="mb-2">{authorName}</h1>
          <p className="text-primary font-medium">{tagline}</p>
        </div>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>
        
        <Button onClick={onExploreClick} size="lg" className="w-full sm:w-auto">
          Explore My Books
        </Button>
      </div>
    </section>
  );
}