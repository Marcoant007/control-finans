import { getCustomRepository } from "typeorm";
import VariablesRepository from "../../repositories/VariablesExpenses";


interface Request {
    id: number
}


class DeleteVariableExpense {
    public async execute({id}:Request){
        const variablesExpenses = getCustomRepository(VariablesRepository)
        await variablesExpenses.delete({
            id:id
        })
    }
}
export default DeleteVariableExpense