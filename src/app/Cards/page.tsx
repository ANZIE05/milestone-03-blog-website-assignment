"use client";

import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: "15 Things I'd Tell About 'Eiffel Tower, Paris'",
    author: 'Adam Smith',
    date: 'Dec 30, 2024',
    image: '/images/01.jpg',
    excerpt: "A Glimpse of Elegance: Eiffel Tower. Discover the charm of Paris with the iconic Eiffel Tower at its heart.",
  },
  {
    id: 2,
    title: "10 Things I'd Tell About 'Santorini, Greece'",
    author: 'Adam Smith',
    date: 'Dec 30, 2024',
    image: '/images/05.jpg',
    excerpt: "Santorini: A Jewel in the Aegean Sea. Explore the white-washed beauty and blue domes of Santorini.",
  },
  {
    id: 3,
    title: "8 Things I'd Tell About 'Leaning Tower of Pisa, Italy'",
    author: 'Adam Smith',
    date: 'Dec 30, 2024',
    image: '/images/03.jpeg',
    excerpt: "The Leaning Marvel: Tower of Pisa. Marvel at one of Italy's most unique architectural wonders.",
  },
  {
    id: 4,
    title: "12 Things I'd Tell About 'London Eye, England'",
    author: 'Adam Smith',
    date: 'Dec 30, 2024',
    image: '/images/04.jpeg',
    excerpt: "The London Eye: A Bird's Eye View of London. Witness London's skyline from the iconic London Eye.",
  },
  {
    id: 5,
    title: "10 Things I'd Tell About 'Colosseum, Rome'",
    author: 'Adam Smith',
    date: 'Dec 30, 2024',
    image: '/images/02.jpg',
    excerpt: "Colosseum: A Glimpse into Ancient Rome. Step back in time with a visit to the Colosseum in Rome.",
  },
];

export default function BlogCards() {
  const handleReadMore = (id: number) => {
    console.log(`Read More clicked for post ID: ${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-20 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Page</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col sm:flex-row sm:space-x-6 items-start sm:items-center">
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={200}
              className="w-full sm:w-1/3 rounded-lg mb-4 sm:mb-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-blue-700">
                <Link href={`/Blogs/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                By {post.author} | {post.date}
              </p>
              <p className="text-gray-900 mb-4 text-justify">{post.excerpt}</p>
              <button
                className="text-slate-100 font-medium hover:underline bg-blue-700 px-2 py-1 rounded-lg"
                onClick={() => handleReadMore(post.id)}
              >
                <Link href={`/Blogs/${post.id}`}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
