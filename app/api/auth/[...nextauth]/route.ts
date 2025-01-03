import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
import articleModel from "../../../server/mongoDB/models/article.model"

export const handler = async(req: any,res :any) => {
    const readArticle = await articleModel.find({})
    res.status(200).json(readArticle)
}