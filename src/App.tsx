import { SingleBookHero } from "./components/SingleBookHero";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { SingleBookCTA } from "./components/SingleBookCTA";
import bookCover from "./assets/book-cover.png";

const bookData = {
  title: "Hey Dad, Let's Talk!",
  subtitle: "Dad's Life Stories Journal",
  author: "Aleri Lizaro",
  description:
    "Meaningful prompts that spark real conversations. Create a keepsake your family will treasure.",
  coverImage: bookCover,
};

export default function App() {
  const AMAZON_URL =
    "https://www.amazon.com/Hey-Dad-Lets-Talk-Stories/dp/B0FPF71CQ8";

  const handleGetOnAmazon = () => {
    window.location.href = AMAZON_URL;
  };

  const handleExploreBooks = () => {
    // замени на нужную страницу каталога/автора при необходимости
    window.location.href = "/";
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
