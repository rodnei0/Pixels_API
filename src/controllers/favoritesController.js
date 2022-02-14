import { ObjectId } from "mongodb";
import db from "../db.js";

export default async function favoriteProducts(req,res){
    const { user } = res.locals;

    try{
        if(!user){
            return res.sendStatus(401);
        }
    
        const userData = await db.collection('favorites').find({idUser:user._id}).toArray;
        return res.send(userData);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export  async function addFavorites(req,res){
    const { user } = res.locals;

    const product = req.body;


    try{
        if(!user){
            return res.sendStatus(401);
        }
    
        await db.collection('favorites').insertOne({idUser:user._id, product }).toArray;
        const ola =  await db.collection('products').updateOne({_id: new ObjectId(product._id)},{$set:{'favorite':true}});
        console.log(ola);
        return res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}