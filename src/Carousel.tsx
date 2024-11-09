import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Article {
    urlToImage: string;
    title: string;
    url: string;
}

export default function Carousel() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const key = import.meta.env.VITE_NEWS_API_KEY;
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}&pageSize=5`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status + ": An error occured while loading the news");
                }
            })
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (articles.length > 0) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [articles])

    if (loading) {
        return <p>Loading...</p>
    }

    function nextSlide() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }

    function prevSlide() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length)
    }

    return (
        <div className="relative w-full max-w-3xl mx-auto mb-5 sm:w-11/12">
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {articles.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <a href="item.url" className="block p-0 relative">
                                <img
                                    src={item.urlToImage}
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
                {articles.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
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
