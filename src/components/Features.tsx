import { Heart, MessageCircle, BookOpen, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: MessageCircle,
    title: 'Meaningful Conversations',
    description: 'Thoughtfully crafted prompts that encourage deep, authentic discussions between fathers and children.'
  },
  {
    icon: Heart,
    title: 'Family Bonding',
    description: 'Strengthen relationships and create lasting memories through shared stories and experiences.'
  },
  {
    icon: BookOpen,
    title: 'Keepsake Creation',
    description: 'Build a treasured family heirloom filled with personal stories, wisdom, and love.'
  },
  {
    icon: Clock,
    title: 'Timeless Memories',
    description: 'Preserve precious moments and stories that will be cherished for generations to come.'
  }
];

export function Features() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Memory Journals Matter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In our fast-paced world, meaningful connections between family members are more precious than ever. 
            Memory Journals provide the perfect opportunity to slow down and truly connect.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}