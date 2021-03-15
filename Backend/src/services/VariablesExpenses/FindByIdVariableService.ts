import { getCustomRepository } from "typeorm";
import VariablesRepository from "../../repositories/VariablesExpenses";
import FindByIdExpensesService from "../FixedExpenses/FindByIdFixedExpensesService";



class FindByVariableService {
    public async execute(id:number){
        const variableRepository = getCustomRepository(VariablesRepository)
        const variable = await variableRepository.findOne({
            where: {id:id}
        })
        return variable
    }

}


export default FindByVariableService

