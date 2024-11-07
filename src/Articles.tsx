import { useState, useEffect } from "react";

type ArticlesProps = {
    category: string;
    title: string
};

export default function Articles({ title, category }: ArticlesProps) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const key = import.meta.env.VITE_NEWS_API_KEY;
        fetch(`https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${key}&pageSize=6`)
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

    if (loading) {
        return <p>Loading...</p>
    }

    return (
            <section className="mb-16">
                <h2
                    className="text-center text-3xl font-bold mb-5">
                    {title}</h2>
                <div className="grid grid-cols-1 gap-8 px-3 sm:grid-cols-2 lg:grid-cols-3">
                {
                    articles.map(element => {
                        return (
                            <article>
                                <a 
                                    href={element.url}
                                    className="block bg-slate-100 rounded-xl p-5">
                                        <img src={element.urlToImage} alt="..." className="mb-3 m-auto w-full aspect-video md:aspect-auto md:h-56 lg:h-48" />
                                        <h3 className="font-bold">{element.title}</h3>
                                        <p className="mb-1">{element.description}</p>
                                        <time className="text-sm" dateTime="2024-11-05">{element.publishedAt}</time>
                                </a>
                            </article>
                        )
                    })
                }
                </div>
            </section>
    
    );
}