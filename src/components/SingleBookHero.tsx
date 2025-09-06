import { Button } from './ui/button';

interface SingleBookHeroProps {
  bookTitle: string;
  authorName: string;
  description: string;
  coverImage: string;
  onExploreClick: () => void;
  onGetOnAmazonClick: () => void;
}

export function SingleBookHero({ 
  bookTitle, 
  authorName, 
  description, 
  coverImage, 
  onExploreClick, 
  onGetOnAmazonClick 
}: SingleBookHeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">ALERIBOOKS</h1>
          <p className="text-muted-foreground">Creating meaningful connections through storytelling</p>
        </div>

        {/* Book Showcase */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="w-80 max-w-full">
              <img
                src={coverImage}
                alt={`${bookTitle} book cover`}
                className="w-full h-auto shadow-2xl rounded-lg"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">{bookTitle}</h2>
            <p className="text-xl text-muted-foreground mb-2">by {authorName}</p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Memory Journals</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          </div>
        </div>
      </div>
    </section>
  );
}