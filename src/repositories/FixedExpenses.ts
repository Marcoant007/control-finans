import { EntityRepository, Repository } from "typeorm";
import FixedExpenses from "../models/FixedExpenses";


@EntityRepository(FixedExpenses)
class FixedRepository extends Repository<FixedExpenses>{
    public async findByExpensesFixed(user_id: number): Promise< FixedExpenses | undefined>{
        const findFixedRepository = await this.findOne({
            where: {user_id}
        })
        return findFixedRepository;
    }
}

export default FixedRepository