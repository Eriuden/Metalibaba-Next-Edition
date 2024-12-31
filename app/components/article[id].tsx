import React from 'react'

type articles = {
    _id: string,
    picture: string;
    name: string,
    typeArticle: string,
    groupe: string,
    price: number
    
}

export const article = (article: articles) => {
  
  return (
    <div>
        <img src={article.picture}/>
        <h2>{article.name}</h2>
        <h3>{article.typeArticle}</h3>
        <h3>{article.groupe}</h3>
        <h2>{article.price}</h2>
    </div>
  )
}

export async function getStaticsProps(context: any) {
    const {params} = context
    const response = await fetch(`https:localhost:4000/articles/${params._id}`)
    const data = await response.json()

    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}
