import db from "../db.js";

export async function getProducts (req, res) {
    const { category } = req.headers;

    try{
        const productsCollection = db.collection(process.env.MONGO_PRODUCTS);
        const products = await productsCollection.find({category: category}).toArray();
        
		res.status(201).send(products);
    } catch (error) {
        res.status(500).send('A culpa foi do estagiário');
        console.log(error);
    }
};