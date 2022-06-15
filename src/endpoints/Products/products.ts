import {Request, Response} from 'express'
import { ShopperProducts } from '../../data/ProductsDatabase'


export async function getAllProducts(req:Request, res:Response):Promise<any>{
    try{
       const products = new ShopperProducts()
       const getProducts = await products.getAllProducts() 

       res.status(200).send(getProducts)

    } catch(e:any){
        res.status(404).send(e.message)
    }
}
