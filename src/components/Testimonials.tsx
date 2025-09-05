import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Sarah M.',
    relationship: 'Mother of two',
    rating: 5,
    text: 'This journal opened up conversations with my dad that we never would have had otherwise. It\'s become our weekly tradition, and I treasure every moment.'
  },
  {
    name: 'Michael R.',
    relationship: 'Father of three',
    rating: 5,
    text: 'As a busy dad, this gave me the perfect structure to connect with my kids. The prompts are thoughtful and really get them talking about what matters.'
  },
  {
    name: 'Emma L.',
    relationship: 'Adult daughter',
    rating: 5,
    text: 'I bought this for my father\'s 65th birthday. Six months later, we have a beautiful collection of his stories and wisdom. Priceless.'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Families Are Saying</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how Memory Journals are transforming family relationships 
            and creating lasting bonds across generations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.relationship}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}