export type ArticleType = {
    articleId: string,
    img: string,
    name: string,
    typeArticle: string,
    groupe: string,
    price: number
}

export const ArticleCard = ({article} : {article: ArticleType}) => {
  const {img, name, typeArticle, groupe, price} = article
  return (
    <li>
        <div className="flex-between">
            <img src={img}/>          
            <h2>{name}</h2>
            <h2>{typeArticle}</h2>
            <h2>{groupe}</h2>
            <h2>{price}</h2>    
        </div>
    </li>
  )
}
