import { Response, Request } from 'express'
import { Products } from '../entities/Class';
import { BaseDatabase } from './BaseDatabase';


let productsDBName = 'products_shopper'

export class ShopperProducts extends BaseDatabase {
    async getAllProducts(): Promise<any> {
        try {
            const products = await BaseDatabase.connection(productsDBName)
                .select('*')
            return products 
        } catch (e: any) {
            throw new Error(e.sqlMessage || e.message)
        }

    }
}