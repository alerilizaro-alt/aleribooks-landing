import { Award, BookOpen, Users, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface AboutAuthorProps {
  authorName: string;
  bio: string;
  achievements: {
    booksPublished: number;
    awards: number;
    readers: string;
    rating: number;
  };
}

export function AboutAuthor({ authorName, bio, achievements }: AboutAuthorProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">About {authorName}</h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {bio}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{achievements.booksPublished}</div>
                  <div className="text-sm text-muted-foreground">Books Published</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{achievements.awards}</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-semibold mb-1">{achievements.readers}</div>
                <div className="text-muted-foreground">Happy Readers</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < achievements.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-2xl font-semibold mb-1">{achievements.rating}.0</div>
                <div className="text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}