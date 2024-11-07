import news1 from "./images/canimi-sikti-diyerek-sirin-i-olduren-cani-icin_18002214_7957.webp"
import news2 from "./images/chp-nin-6-okundan-biri-milliyetciliktir_18001845_3772_z1.webp"
import news3 from "./images/dolmabahce-de-ilk-duduk-caldi_18002487_3348_z1.webp"
import news4 from "./images/premier-lig-de-hesabi-acti_18002447_6079_z1.webp"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselItems = [
  { image: news1, title: 'Beautiful Landscape' },
  { image: news2, title: 'City Skyline' },
  { image: news3, title: 'Mountain View' },
  { image: news4, title: 'Serene Beach' },
]

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Her 5 saniyede bir geçiş yapar
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <a href="#" className="block p-0 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
