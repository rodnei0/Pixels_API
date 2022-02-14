import db from "../db.js";

export default async function historicProducts(req,res){
    const {user} = req.locals;
    try{
        if(!user){
            return sentStatus(401);
        }
    
        const userData = await db.collection('historic').find({idUser:user._id}).toArray();
        return res.send(userData);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}
export async function purchasedItems(req,res){
    const { items } = req.body;
    const ids = items.map(id => new ObjectId(id));
    
    try{
        const productsCollection = db.collection("products");
        const products = await productsCollection.find({_id: {$in: ids}}).toArray();

		res.status(201).send(products);
    } catch (error) {
        res.status(500).send('A culpa foi do estagiário');
        console.log(error);
    }
    }
