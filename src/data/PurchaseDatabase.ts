import { BaseDatabase } from './BaseDatabase';
import { Purchase } from '../entities/Class';

let purchaseDBName = 'purchase_shopper'

export class PurchaseDatabase extends BaseDatabase {
    async purchaseConfirm(purchase: Purchase): Promise<any> {
        try {
            const confirm = await BaseDatabase.connection(purchaseDBName).insert({
                order_confirm: purchase.orderConfirm(),
                user_id: purchase.userId(),
                product_id: purchase.productId(),
                purchase_date: purchase.purchaseDate(),
                price: purchase.getPrice(),
                payment_type: purchase.paymentType()
            })
            return confirm
        } catch (e: any) {
            throw new Error(e.sqlMessage || e.message)
        }
    }

  async  getPurchase(user_id: string, payment_type: boolean): Promise<any> {
        try {
            const confirmed = await BaseDatabase.connection(purchaseDBName)
            .select('order_confirm', 'price', 'quanty', 'purchase_date', 'payment_type')
            .where({user_id})
            .andWhere({payment_type})

            return confirmed[0] && Purchase.toUserModel(confirmed[0])
        } catch (e: any) {
            throw new Error(e.sqlMessage || e.message)
        }
    }
}