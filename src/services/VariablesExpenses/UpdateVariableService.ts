import { getCustomRepository } from "typeorm";
import VariablesRepository from "../../repositories/VariablesExpenses";



interface Request {
    id: number,
    name: string,
    value: number,
    user_id: number,
    date: Date
}


class UpdatedVariableExpensesService {
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

export default UpdatedVariableExpensesService