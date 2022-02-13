import db from "../db.js";

export default async function historicProducts(req,res){
    const {user} = req.locals;
    try{
        if(!user){
            return sentStatus(401);
        }
    
        const userData = await db.collection('historic').find({idUser:user._id}).toArray;
        return res.send(userData);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}