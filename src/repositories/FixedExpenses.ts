import { EntityRepository, Repository } from "typeorm";
import FixedExpenses from "../models/FixedExpenses";


@EntityRepository(FixedExpenses)
class FixedRepository extends Repository<FixedExpenses>{
    public async findByExpensesFixed(name: string): Promise< FixedExpenses | undefined>{
        const findFixedRepository = await this.findOne({
            where: {name: name}
        })
        return findFixedRepository;
    }
}

export default FixedRepository