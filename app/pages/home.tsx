import { SearchForm } from "../components/SearchForm"
import { ArticleCard } from "../components/ArticleCard"

export default async function Home({searchParams}: 
  {searchParams: Promise<{query?: string}> }) {
  const query = (await searchParams).query

  const articles = [
    { image:"",
      name:"",
      typeArticle:"",
      groupe:"",
      price:"" }]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <SearchForm query={query}/>
      </div>

      <div>
        <p>{query ? `Résultats de recherche pour ${query}`:"Nos articles"}</p>

        <ul>
          {articles.length > 0 ? (
            articles.map((article: articleCardType, index: number)=> (
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
