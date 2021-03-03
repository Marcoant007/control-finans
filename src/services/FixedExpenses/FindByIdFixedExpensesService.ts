import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";

class FindByIdExpensesService {
    public async execute(id:number){
        const fixedRepository = getCustomRepository(FixedRepository)
        const fixed = await fixedRepository.findOne({
            where: {id: id}
        })
        return fixed
    }
}

export default FindByIdExpensesService