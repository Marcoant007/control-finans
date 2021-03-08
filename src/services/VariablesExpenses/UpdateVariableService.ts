import { getCustomRepository } from "typeorm";
import VariablesRepository from "../../repositories/VariablesExpenses";



interface Request {
    id: number,
    name: string,
    value: number,
    user_id: number,
    date: Date
}


<<<<<<< HEAD
class UpdatedVariableExpensesService {
=======
class UpdatedExpensesService {
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4
    public async execute({id,value,user_id,name,date}:Request){

        const variablesExpenses = getCustomRepository(VariablesRepository)
        const variablesUpdate = await variablesExpenses.save({
            id:id,
            name:name,
            value:value,
            user_id:user_id,
            date:date
        })

        return variablesUpdate
    }
}

<<<<<<< HEAD
export default UpdatedVariableExpensesService
=======
export default UpdatedExpensesService
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4
