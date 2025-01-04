import Link from 'next/link'
import React from 'react'
import BlogCards from '../Cards/page'

const HeroPage = () => {
  return (
    <div>


<div className="relative min-h-screen h-screen bg-cover bg-center sm:bg-contain md:bg-cover lg:bg-cover" 
  style={{ 
  backgroundImage: "url('/images/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center text-justify h-full text-white px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">The Journey Beyond <br/> Your Imaginary</h1>
        <p className="text-lg md:text-lg max-w-lg mb-6 text-white opacity-50">
            Discover thousands of beautiful places around the world with wonderful experiences you can imagine. Experience the beauty of nature&apos;s creation.
        </p>
        <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg w-auto self-start">
          <Link href="/Cards">Explore Now</Link>
        </button>
      </div>
    </div><br/>
    <BlogCards />


    </div>
  )
}

export default HeroPage