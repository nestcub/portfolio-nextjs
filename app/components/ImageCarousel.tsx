'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/carousel-images/pp4.JPG',
]

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Carousel image ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  )
}