import {Request, Response} from 'express'
import { UserDatabase } from '../../data/UserDatabase'
import { User } from '../../entities/Class'
import { IdGenerator } from '../../services/IdGenerator'




export async function createUser(req:Request, res: Response) {
    try{
        const {name, delivery_date} = req.body
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        if(!name || !delivery_date){
            res.status(422).send('Preencha os campos corretamente.')
        }

        const newUser = new User(
            id,
            name,
            delivery_date
        )
        
        const userDatabase = new UserDatabase()
        await userDatabase.acessProducts(newUser)
        
        res.status(201).send(newUser)
    } catch(e:any){
        res.status(500).send(e.message)
    }

}

export async function getAllUsers(req:Request, res:Response):Promise<any>{
    try{
       const users = new UserDatabase()
       const getUsers = await users.getAllUsers() 

  
       res.status(200).json(getUsers)

    } catch(e:any){
        res.status(404).send(e.message)
    }
}
