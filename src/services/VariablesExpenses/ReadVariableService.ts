import { getCustomRepository } from "typeorm";
import VariablesRepository from "../../repositories/VariablesExpenses";


class ReadVariableExpensesService {
    public async execute() {
        const variableRepository = getCustomRepository(VariablesRepository)
        const variables = await variableRepository.find()
        return variables
    }
}

export default ReadVariableExpensesService