import { Response, Request } from 'express';
import { PurchaseDatabase } from '../../data/PurchaseDatabase';
import { Purchase } from '../../entities/Class';
import { IdGenerator } from '../../services/IdGenerator';

export async function purchase(req: Request, res: Response) {
    try {
        const {
            user_id,
            product_id,
            price,
            quantity,
            // purchase_date, 
            payment_type
        } = req.body

        const orderId = new IdGenerator()
        const order_confirm = orderId.generate()

        const purchaseDateFormated = new Date()
        const purchase_date: any = ((purchaseDateFormated.getDate())) + "/" + ((purchaseDateFormated.getMonth() + 1)) + "/" + purchaseDateFormated.getFullYear()

        const confirmPurchase: Purchase = new Purchase(
            order_confirm,
            user_id,
            product_id,
            purchase_date,
            price,
            quantity,
            payment_type
        )


        const purchaseDatabase = new PurchaseDatabase()

        await purchaseDatabase.purchaseConfirm(confirmPurchase)
        res.status(200).send(confirmPurchase)

    } catch (e: any) {
        res.status(500).send(e.message)
    }

}

export async function getMyPayments(req: Request, res:Response) {
      try {
        const {user_id, payment_type} = req.body 

        console.log(user_id, payment_type)

        const purchaseDatabase =  new PurchaseDatabase()

        const purchase = await purchaseDatabase.getPurchase(user_id, payment_type )

        res.status(200).send(purchase)
      } catch (e:any) {
        res.status(500).send(e.message)
      }
}

