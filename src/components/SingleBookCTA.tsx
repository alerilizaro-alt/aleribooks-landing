import * as React from "react";

type Props = {
  onGetOnAmazonClick: () => void;
  onExploreClick: () => void;
};

export function SingleBookCTA({ onGetOnAmazonClick, onExploreClick }: Props) {
  return (
    <section className="mx-auto max-w-md rounded-2xl shadow-2xl bg-card p-4">
      <div className="space-y-3">
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
    </section>
  );
}
