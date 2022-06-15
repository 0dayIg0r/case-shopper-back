import { BaseDatabase } from './BaseDatabase';
import { Cart } from '../entities/Class'


let cartDBName = 'cart'

export class CartDatabase extends BaseDatabase{
    async addToCart(cart: Cart): Promise<any>{
        try{
            const addtoCart = await BaseDatabase.connection(cartDBName).insert({
                user_id: cart.userId(),
                product_id: cart.productId(),
                name: cart.productName(),
                total: cart.getTotal(),
                quanty: cart.getQuanty(),
                payment_type: cart.paymentType(),
            })
            .where(cart.userId)
            
            return addtoCart && Cart.toUserModel(addtoCart)

        } catch(e:any){
            throw new Error(e.sqlMessage && e.message)
        }
        
    }

 async getUserCart(user_id: string): Promise<any>{
     try{
        const getCart = await BaseDatabase.connection(cartDBName)
        .select('*')
        .where({user_id})
        
        return getCart
     } catch(e: any){
        throw new Error(e.sqlMessage || e.message)
     }
 }
}