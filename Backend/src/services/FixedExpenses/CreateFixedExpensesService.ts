import { getCustomRepository } from "typeorm";
import FixedExpenses from "../../models/FixedExpenses";
import FixedRepository from "../../repositories/FixedExpenses";

interface Request {
    name: string
    value: number
    user_id: number
    date: Date
}

class CreateFixedExpensesService {
    public async execute({name,date,user_id,value}:Request):Promise<FixedExpenses>{
        const fixedRepository = getCustomRepository(FixedRepository)
        const fixedCreate = fixedRepository.create({
            name,
            user_id,
            value,
            date
        })
        await fixedRepository.save(fixedCreate)
        return fixedCreate
    } 
}

export default CreateFixedExpensesService