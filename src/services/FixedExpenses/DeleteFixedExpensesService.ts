import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";

interface Request {
    id: number
}

class DeleteFixedExpenses {
    public async execute({id}:Request){
        const fixedExpenses = getCustomRepository(FixedRepository)
        await fixedExpenses.delete({
            id:id
        })
    }
}

export default DeleteFixedExpenses