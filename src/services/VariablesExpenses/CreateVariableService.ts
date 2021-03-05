import { getCustomRepository } from "typeorm";
import VariablesExpenses from "../../models/VariablesExpenses";
import VariablesRepository from "../../repositories/VariablesExpenses";

interface Request {
    name: string
    value: number
    user_id: number
    date: Date
}


class CreateVariableExpensesService {
    public async execute({date,name,user_id,value}:Request):Promise<VariablesExpenses>{
        const variableRepository = getCustomRepository(VariablesRepository)
        const variableCreate = variableRepository.create({
            name,
            value,
            user_id,
            date
        })
        await variableRepository.save(variableCreate)
        return variableCreate
    }
}

export default CreateVariableExpensesService