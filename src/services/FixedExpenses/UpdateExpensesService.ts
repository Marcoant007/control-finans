import { getCustomRepository } from "typeorm";
import FixedRepository from "../../repositories/FixedExpenses";

interface Request {
    id: number
    name: string
    value: number,
    user_id: number,
    date: Date
}

class UpdatedFixedExpensesService {
    public async execute({id,name,user_id,value, date}:Request){

        const fixedExpenses = getCustomRepository(FixedRepository)
        const fixedupdate = await fixedExpenses.save({
            id:id,
            name: name,
            value: value,
            user_id: user_id,
            date: date
        })

        return fixedupdate
    }
}

export default UpdatedFixedExpensesService