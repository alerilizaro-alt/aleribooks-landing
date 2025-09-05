import { BookCard } from './BookCard';

interface Book {
  id: string;
  title: string;
  description: string;
  price: string;
  coverUrl: string;
}

interface BooksSectionProps {
  books: Book[];
  onBuyBook: (bookId: string) => void;
}

export function BooksSection({ books, onBuyBook }: BooksSectionProps) {
  return (
    <section className="py-16 px-4 bg-muted/30" id="books">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">My Latest Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover four captivating stories that will take you on unforgettable journeys
            through different worlds and emotions.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              price={book.price}
              coverUrl={book.coverUrl}
              onBuyClick={() => onBuyBook(book.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}