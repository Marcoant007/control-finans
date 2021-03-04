import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";

class FindByIdExpensesService {
    public async execute(user_id:number){
        const fixedRepository = getCustomRepository(FixedRepository)
        const fixed = await fixedRepository.findOne({
            where: {user_id: user_id}
        })
        return fixed
    }
}

export default FindByIdExpensesService