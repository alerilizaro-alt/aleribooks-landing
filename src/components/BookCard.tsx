import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface BookCardProps {
  title: string;
  description: string;
  price: string;
  coverUrl: string;
  onBuyClick: () => void;
}

export function BookCard({ title, description, price, coverUrl, onBuyClick }: BookCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-[3/4] relative">
          <ImageWithFallback
            src={coverUrl}
            alt={`${title} book cover`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">{price}</span>
            <Button onClick={onBuyClick} size="sm">
              Buy Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}