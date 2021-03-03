import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";

interface Request {
    id: number
    name: string
    value: number,
    user_id: number
}

class UpdatedFixedExpensesService {
    public async execute({id,name,user_id,value}:Request){

        const fixedExpenses = getCustomRepository(FixedRepository)
        const fixedupdate = await fixedExpenses.save({
            id:id,
            name: name,
            value: value,
            user_id: user_id
        })

        return fixedupdate
    }
}

export default UpdatedFixedExpensesService