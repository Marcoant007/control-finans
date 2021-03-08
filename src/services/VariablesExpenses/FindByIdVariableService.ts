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

<<<<<<< HEAD
export default FindByVariableService
=======
export default FindByIdExpensesService
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4
