import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Gift, Users, Clock } from 'lucide-react';

interface SingleBookCTAProps {
  onGetOnAmazonClick: () => void;
  onExploreClick: () => void;
}

export function SingleBookCTA({ onGetOnAmazonClick, onExploreClick }: SingleBookCTAProps) {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4">Start Creating Memories Today</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          Don't wait for the perfect moment. Every conversation matters, 
          and every story deserves to be preserved. Begin your family's 
          memory journal journey today.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Gift className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="mb-2">Perfect Gift</h3>
              <p className="text-sm text-muted-foreground">
                Ideal for Father's Day, birthdays, or any special occasion
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="mb-2">All Ages</h3>
              <p className="text-sm text-muted-foreground">
                Suitable for children, teens, and adult children alike
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="mb-2">Lasting Impact</h3>
              <p className="text-sm text-muted-foreground">
                Create memories that will be treasured for generations
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onGetOnAmazonClick} 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            Get it on Amazon
          </Button>
          <Button 
            onClick={onExploreClick} 
            variant="outline" 
            size="lg" 
            className="px-8"
          >
            Explore My Books
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Available in paperback and digital formats on Amazon
        </p>
      </div>
    </section>
  );
}