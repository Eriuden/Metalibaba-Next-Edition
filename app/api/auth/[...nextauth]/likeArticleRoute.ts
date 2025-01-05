import { likeArticle } from "@/app/server/mongoDB/controller/article.controller";

export default function handler(req: any,res: any) {
    const {method} = req

    switch(method) {
        case "PATCH" :
            likeArticle(req,res)
        default:
            res.setHeader("Allow", ["PATCH"])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}