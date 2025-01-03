import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
import articleModel from "../../../server/mongoDB/models/article.model"
import userModel from "../../../server/mongoDB/models/user.model"
import { ArticleType } from "@/app/components/ArticleCard"
import { UserType } from "@/app/components/UserCard"

export const handler = async(req: any,res :any, {article} : {article: ArticleType},
    {user} : {user: UserType}) => {
    const {articleId,img, name, typeArticle, groupe, price} = article
    const {userId,userImg, userName, email, adress, password} = user
    
    const readArticle = await articleModel.find({})
    const readAnArticle = await articleModel.find({articleId})

    const getAllUser = await userModel.find({}).select("-password")
    const getUser = await userModel.find({userId})
    res.status(200).json(readArticle)

    const getAllUsers = await userModel.find({})
}