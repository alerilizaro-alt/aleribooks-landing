import * as React from "react";

type Props = {
  bookTitle: string;
  authorName: string;
  description: string;
  coverImage: string;
  onGetOnAmazonClick: () => void;
  onExploreClick: () => void;
};

export function SingleBookHero({
  bookTitle,
  authorName,
  description,
  coverImage,
  onGetOnAmazonClick,
  onExploreClick,
}: Props) {
  return (
    <section className="mx-auto max-w-md rounded-2xl shadow-2xl p-4 bg-card">
      <header className="text-center mb-4">
        <h1 className="text-2xl font-semibold">Aleribooks</h1>
        <p className="text-muted-foreground">
          Creating meaningful connections through storytelling
        </p>
      </header>

      {/* КЛЮЧ: object-contain, без overflow-hidden */}
      <div className="rounded-xl bg-gray-100">
        <img
          src={coverImage}
          alt={`${bookTitle} cover`}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="text-center py-6">
        <h2 className="text-3xl font-bold">{bookTitle}</h2>
        <p className="mt-1 text-base text-muted-foreground">by {authorName}</p>

        <h3 className="mt-4 text-2xl font-semibold">Memory Journals</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>

        <div className="mt-5 space-y-3">
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            onClick={onGetOnAmazonClick}
          >
            Get it on Amazon
          </button>
          <button
            className="w-full border px-6 py-3 rounded-xl"
            onClick={onExploreClick}
          >
            Explore My Books
          </button>
        </div>
      </div>
    </section>
  );
}
