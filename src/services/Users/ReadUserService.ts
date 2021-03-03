import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";
class ListFixedExpensesService {
    public async execute() {
        const userRepository = getCustomRepository(FixedRepository)
        const users = await userRepository.find()
        return users
    }
}

export default ListFixedExpensesService