import {updateUser} from "../../../server/mongoDB/controller/user.controller"
import {deleteUser} from "../../../server/mongoDB/controller/user.controller"

export const handler = async(req: any,res :any) => {
    const {method} = req 

    switch (method) {
        case "PUT":
            updateUser(req,res)
        case "DELETE":
            deleteUser(req,res)
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}