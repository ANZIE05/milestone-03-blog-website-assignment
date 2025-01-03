"use client";

import Image from 'next/image';
import { useState } from 'react';

type Post = {
  title: string;
  content: string;
  image: string;
};

const postData: { [key: string]: Post } = {
  1: {
    title: "15 Things I'd Tell About 'Eiffel Tower, Paris'",
    content:
      "The Eiffel Tower, an iconic landmark in Paris, France, is a symbol of love, romance, and architectural beauty. Standing at 1,063 feet, this iron lattice tower offers breathtaking views of the city and is a must-visit for travelers. The Eiffel Tower, named after engineer Gustave Eiffel, is a marvel of modern engineering and a testament to human ingenuity. Whether you're admiring it from afar or ascending to the top, the Eiffel Tower is sure to leave you in awe. The Eiffel Tower, a global cultural icon of France, offers breathtaking views of Paris. Built in 1889, this iron lattice tower is a marvel of engineering and a romantic hotspot. From dining at the tower's restaurant to enjoying the light show at night, it provides an unforgettable experience.",
    image: '/images/01.jpg',
  },
  2: {
    title: "10 Things I'd Tell About 'Santorini, Greece'",
    content:
      "Santorini, a Greek island in the Aegean Sea, is known for its stunning sunsets and white-washed buildings. The island's blue-domed churches and crystal-clear waters make it a popular destination for honeymooners and travelers seeking a picturesque escape. Santorini's charm and beauty are sure to captivate visitors. Santorini, is also renowned for its stunning sunsets, volcanic beaches, and picturesque villages like Oia and Fira. It's a haven for travelers seeking serenity, luxury, and the unique charm of Cycladic architecture.",
    image: '/images/05.jpg',
  },
  3: {
    title: "8 Things I'd Tell About 'Leaning Tower of Pisa, Italy'",
    content:
      "The Leaning Tower of Pisa, a freestanding bell tower in Italy, is famous for its unintended tilt. Completed in 1372, this iconic structure is a must-visit for history buffs, architecture enthusiasts, and curious travelers. This architectural anomaly dates back to the 12th century and is a must-visit for its history, charm, and the fun of taking creative photos that 'defy gravity.'",
    image: '/images/03.jpeg',
  },
  4: {
    title: "12 Things I'd Tell About 'London Eye, England'",
    content:
      "The London Eye, a giant Ferris wheel on the South Bank of the River Thames, offers panoramic views of London's skyline. It's a popular tourist attraction, especially at night when the city lights up. A ride on the London Eye is a memorable experience for all ages. The London Eye, Europe's largest Ferris wheel, is a landmark attraction offering panoramic views of the city's most famous sites, including Big Ben, Buckingham Palace, and the River Thames. It's a must-visit for tourists looking to capture London's beauty.",
    image: '/images/04.jpeg',
  },
  5: {
    title: "10 Things I'd Tell About 'Colosseum, Rome'",
    content:
      "The Colosseum, an ancient amphitheater in Rome, Italy, is a marvel of ancient engineering and a symbol of the city's rich history. Built in 70-80 AD, this iconic structure hosted gladiatorial contests, animal hunts, and other spectacles for the entertainment of the Roman people. Today, the Colosseum is a popular tourist attraction and a UNESCO World Heritage Site. Visitors can explore the ruins, learn about the history of the amphitheater, and imagine the grandeur of ancient Rome. The Colosseum, also known as the Flavian Amphitheatre, is an iconic symbol of ancient Rome and a must-visit for history buffs, architecture enthusiasts, and travelers. Built in 70-80 AD, this ancient amphitheater hosted gladiatorial contests, animal hunts, and other spectacles for the entertainment of the Roman people. Today, the Colosseum is a popular tourist attraction and a testament to the grandeur of the Roman Empire. The Colosseum, symbolizes the grandeur of the Roman Empire. Once hosting gladiator battles and public spectacles, it now stands as a monument to history and architecture, attracting millions of visitors each year.",
    image: '/images/02.jpg',
  },
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const { id } = params; // Fetch the dynamic route parameter

  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [saveDetails, setSaveDetails] = useState<boolean>(false);

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, `${comment} - ${name} (${email})`]);
      setComment('');
      setName('');
      setEmail('');
      setSaveDetails(false);
    }
  };

  if (!postData[id]) {
    return <p>Loading...</p>;
  }

  const post = postData[id];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 mt-8 text-center">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
      />
      <p className="text-gray-900 mb-8 font-semibold text-lg">{post.content}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 text-center">Comments Section</h2>
        <div className="space-y-4 text-center">
          {comments.length === 0 && <p>No comments yet. Be the first to comment!</p>}
        </div>

        {/* Comment Form */}
        <div className="mt-6 mx-auto w-full md:w-1/2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={saveDetails}
              onChange={(e) => setSaveDetails(e.target.checked)}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-gray-600 text-sm">
              Save my name, email in this browser for the next time I comment.
            </label>
          </div>

          <div>
            {comments.map((cmt, index) => (
              <p key={index} className="bg-gray-300 p-3 rounded-md mb-4">{cmt}</p>
            ))}
          </div>

          <button
            onClick={handleAddComment}
            className="py-1 px-4 text-white font-semibold bg-blue-700 hover:bg-blue-600 rounded-lg transition"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
