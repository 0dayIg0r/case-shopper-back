import {Request, Response} from 'express'
import { CartDatabase } from '../../data/CartDatabase'
import { Cart } from '../../entities/Class'



export async function addToCart(req:Request, res:Response) {
    try{
        const {
            user_id, 
            product_id,
            name,
            total,
            quanty,
            payment_type
        } = req.body
        
    
    
       

       const newCart: Cart = new Cart(user_id, product_id, name, total, quanty, payment_type)
       const cartDatabase = new CartDatabase()
       await cartDatabase.addToCart(newCart)

       res.status(200).send(newCart)
    } catch(e:any){
        res.status(500).send(e.message)
    }
    
    
}

export async function getUserCardById(req:Request, res:Response) {
    try{
        const {user_id} = req.body
        const cart = new CartDatabase()
        const getCartByUserID = await cart.getUserCart(user_id)

        res.status(200).send(getCartByUserID)
    } catch(e:any){
        res.status(500).send(e.message)
    }
}

