import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, BookOpen } from 'lucide-react';

interface CallToActionProps {
  onBuyAllClick: () => void;
  onNewsletterClick: () => void;
}

export function CallToAction({ onBuyAllClick, onNewsletterClick }: CallToActionProps) {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="mb-4">Ready to Start Reading?</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Join thousands of readers who have already discovered these amazing stories. 
          Get all four books at a special bundle price and save 25%.
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="mb-2">Complete Bundle</h3>
              <p className="text-muted-foreground text-sm mb-4">
                All 4 books for just $39.99
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground line-through">
                  Regular price: $52.96
                </div>
                <div className="text-lg font-semibold text-primary">
                  Save $12.97!
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get exclusive previews and updates
              </p>
              <div className="text-sm text-muted-foreground">
                Join 5,000+ subscribers
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onBuyAllClick} size="lg" className="sm:px-8">
            Buy Complete Bundle
          </Button>
          <Button onClick={onNewsletterClick} variant="outline" size="lg" className="sm:px-8">
            Join Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
}