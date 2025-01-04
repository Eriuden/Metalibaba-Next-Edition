import { SearchForm } from "../components/SearchForm"
import { ArticleCard } from "../components/ArticleCard"
import { useState, useEffect } from "react"

export default async function Home({searchParams}: 
  {searchParams: Promise<{query?: string}> }) {
  const [articles, setArticles] = useState([])
  const query = (await searchParams).query

  useEffect(()=> {
    const fetchArticles = async ()=> {
      const articles = await fetch ("../api/route")
      const data = await articles.json()
      setArticles(data)
    }
     fetchArticles()
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <SearchForm query={query}/>
      </div>

      <div>
        <p>{query ? `Résultats de recherche pour ${query}`:"Nos articles"}</p>

        <ul>
          {articles.length > 0 ? (
            articles.map((article: ArticleType, index: number)=> (
              <ArticleCard key={article?._id} article={article}/>
            ))
          ): (
            <p>Aucun résultats</p>
          )}
        </ul>
      </div>
    </main>
  )
}
