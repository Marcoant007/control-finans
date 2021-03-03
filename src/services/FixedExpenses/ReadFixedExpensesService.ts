import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";


class ReadFixedExpenses {
    public async execute(){
        const fixedRepository = getCustomRepository(FixedRepository)
        const fixedExpenses = await fixedRepository.find()
        return fixedExpenses
    }

    
}

export default ReadFixedExpenses