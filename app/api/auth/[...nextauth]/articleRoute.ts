import {likeArticle,dislikeArticle, readArticle, 
createArticle, updateArticle, deleteArticle, unlikeArticle, undislikeArticle}
from "../../../server/mongoDB/controller/article.controller"


export const handler = async(req: any,res :any) => {
    const {method} = req 
    const {action} = req.body

    switch (method) {
        case "GET":
            readArticle(req,res)
        case "POST":
            createArticle(req,res)
        case "PUT":
            updateArticle(req,res)
        case "DELETE":
            deleteArticle(req,res)
        case "PATCH":
            if (action ==="like"){
                likeArticle(req,res)
            } else if (action ==="dislike") {
                dislikeArticle(req,res)
            } else if (action ==="dislike") {
                dislikeArticle(req,res) 
            } else if (action ==="unlike") {
                unlikeArticle(req,res)}
              else if (action ==="undislike") {
                undislikeArticle(req,res)
            } else {
                return res.status(400).json({ error: "Unknown action"})
            }
            
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE","PATCH"])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}