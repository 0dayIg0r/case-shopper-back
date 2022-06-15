
export class User {
    constructor(
        private id:string,
        private name:string,
        private delivery_date: string
    ){}
    static toUserModel(data:any):User{
        return new User(data.id, data.name, data.delivery_date)
    }

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getDeliveryDate(){
        return this.delivery_date
    }
}

export class Products {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private qty_stock: number
    ){}
    static toUserModel(data:any): Products {
        return new Products(data.id, data.name, data.price, data.qty_stock)
    }
    
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
    getQtyStock(){
        return this.qty_stock
    }
}

export class Cart {
    constructor(
        private user_id: string,
        private product_id: string,
        private name: string,
        private total: number,
        private quanty: number,
        private payment_type: string
    ){}
    static toUserModel(data:any): Cart{
        return new Cart(
        data.user_id,
        data.product_id,
        data.total,
        data.price,
        data.quantity,
        data.payment_type
        )
        
    }

    userId(){
        return this.user_id
    }
    productId(){
        return this.product_id
    }
    productName(){
        return this.name
    }
    getTotal(){
       return this.total
    }
    getQuanty(){
        return this.quanty
    }
    paymentType(){
        return this.payment_type
    }
}


export class Purchase {
    constructor(
        private ordeder_confirm:string,
        private user_id: string,
        private product_id: string,
        private purchase_date: number,
        private price: number,
        private quantity: number,
        private payment_type: string
    ){}
    static toUserModel(data:any): Purchase {
        return new Purchase(
            data.ordeder_confirm,
            data.user_id,
            data.product_id,
            data.purchase_date,
            data.price,
            data.quantity,
            data.payment_type
        )
    }
    orderConfirm(){
        return this.ordeder_confirm
    }
    userId(){
        return this.user_id
    }
    purchaseDate(){
        return this.purchase_date
    }
    paymentType(){
        return this.payment_type
    }
    getPrice(){
        return this.price
    }
    productId(){
       return this.product_id
    }
    getQuantity(){
        return this.quantity
    }
}