import {readArticle} from "../../../server/mongoDB/controller/article.controller"
import {createArticle} from "../../../server/mongoDB/controller/article.controller"
import {updateArticle} from "../../../server/mongoDB/controller/article.controller"
import {deleteArticle} from "../../../server/mongoDB/controller/article.controller"

export const handler = async(req: any,res :any) => {
    const {method} = req 

    switch (method) {
        case "GET":
            readArticle(req,res)
        case "POST":
            createArticle(req,res)
        case "PUT":
            updateArticle(req,res)
        case "DELETE":
            deleteArticle(req,res)
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}