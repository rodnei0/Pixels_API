import db from "../db.js";

export default async function favoriteProducts(req,res){
    const {user} = req.locals;
    try{
    
        if(!user){
            return sentStatus(401);
        }
    
        const userData = await db.collection('favorites').find({idUser:user._id}).toArray;
        return res.send(userData);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export default async function addFavorites(req,res){
    const {user} = req.locals;
    const product = req.body;

    try{
        if(!user){
            return sentStatus(401);
        }
    
        await db.collection('favorites').insertOne({idUser:user._id, product }).toArray;
        return res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

