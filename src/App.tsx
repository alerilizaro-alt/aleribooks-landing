import { SingleBookHero } from "./components/SingleBookHero";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { SingleBookCTA } from "./components/SingleBookCTA";
import Footer from "./components/Footer";
import bookCover from "./assets/book-cover.png";

const AMAZON_URL =
  "https://www.amazon.com/Hey-Dad-Lets-Talk-Stories/dp/B0FPF71CQ8/ref=sr_1_1?crid=20JXGB1T7WTK&dib=eyJ2IjoiMSJ9.y_TEtKvJKY6299kKRniXgo6w_yi0LVMGw8MA6aZmVWLGjHj071QN20LucGBJIEps.CUHa0FReJFkgrAbKFYGu3pi4m10vECvZbncYLlYgLCc&dib_tag=se&keywords=dad+lets+talk+aleri+lizaro&qid=1757068377&sprefix=dad+lets+talk+aleri+lizaro%2Caps%2C167&sr=8-1";

const bookData = {
  title: "Hey Dad, Let's Talk!",
  subtitle: "Dad's Life Stories Journal",
  author: "Aleri Lizaro",
  description:
    "Meaningful prompts that spark real conversations. Create a keepsake your family will treasure.",
  coverImage: bookCover,
};

export default function App() {
  const handleGetOnAmazon = () => {
    window.location.href = AMAZON_URL; // можно заменить на "/go/amazon" если используешь vercel.json
  };

  const handleExploreBooks = () => {
    window.location.href = AMAZON_URL; // временно туда же
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

      {/* Если у тебя есть эти секции — оставь. Если нет, можно временно убрать. */}
      <Features />
      <Testimonials />

      <SingleBookCTA
        onGetOnAmazonClick={handleGetOnAmazon}
        onExploreClick={handleExploreBooks}
      />

      <Footer />
    </div>
  );
}
