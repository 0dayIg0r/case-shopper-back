import { User } from '../entities/Class';
import { BaseDatabase } from './BaseDatabase'


let userDBName = 'user_shopper'

export class UserDatabase extends BaseDatabase {
    async acessProducts(user: User){
        await BaseDatabase.connection(userDBName).insert({
            id: user.getId(),
            name: user.getName(),
            delivery_date: user.getDeliveryDate()
        })
    }

    async findUserByName (name: string): Promise<any> {
        try{
            const user = await BaseDatabase.connection(userDBName)
            .select('*')
            .where({name})
        } catch(e: any){
            throw new Error(e.sqlMessage || e.message)
        }
    }

    async getAllUsers(): Promise<any>{
        try{
            const allUsers = await BaseDatabase.connection(userDBName)
            .select('*')
            return allUsers
        } catch(e:any){
            throw new Error(e.sqlMessage || e.message)
        }
    }
    
}