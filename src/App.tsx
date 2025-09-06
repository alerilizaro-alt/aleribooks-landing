import { SingleBookHero } from './components/SingleBookHero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { SingleBookCTA } from './components/SingleBookCTA';
// было
// import bookCover from 'figma:asset/425b088a4b5d66a9163f329faf489828882f51e2.png';

// стало
import bookCover from ".src/assets/book-cover.png";


const bookData = {
  title: "Hey Dad, Let's Talk!",
  subtitle: "Dad's Life Stories Journal",
  author: "Aleri Lizaro",
  description: "Meaningful prompts that spark real conversations. Create a keepsake your family will treasure.",
  coverImage: bookCover
};

export default function App() {
  const AMAZON_URL = "https://www.amazon.com/dp/YOUR_ASIN?tag=YOUR_TAG";
const handleGetOnAmazon = () => window.location.href = AMAZON_URL;

const handleExploreBooks = () => window.location.href = "/books"; // или внешний URL

  };

  return (
    <div className="min-h-screen bg-background">
      <SingleBookHero
        bookTitle={bookData.title}
        authorName={bookData.author}
        description={bookData.description}
        coverImage={bookData.coverImage}
        onExploreClick={handleExploreBooks}
        onGetOnAmazonClick={handleGetOnAmazon}
      />
      
      <Features />
      
      <Testimonials />
      
      <SingleBookCTA
        onGetOnAmazonClick={handleGetOnAmazon}
        onExploreClick={handleExploreBooks}
      />
    </div>
  );
}