import { notFound } from 'next/navigation'

export const experimental_ppr = true

export const articlePage = async({params}: {params: Promise<{id:string}>}) => {
  const id = (await params).id

  const article = await fetch(`@/app/server/mongoDB/controller/article.controller`)
  
  if (!article) return notFound()
  const data = await article.json()

  return (
    <div>
        <h1 className='text-3xl'>{article.name}</h1>
        <h3>{article.typeArticle}</h3>
        <h3>{article.groupe}</h3>
        <h3>{article.price}</h3>
    </div>
  )
}
