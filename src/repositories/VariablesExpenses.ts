import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";
import VariablesExpenses from "../models/VariablesExpenses";



@EntityRepository(VariablesExpenses)
class VariablesRepository extends Repository<VariablesExpenses>{
    public async findbyVariables(name: string):Promise< VariablesExpenses | undefined >{
        const findVariables = await this.findOne({
            where:{name:name}
        })
        return findVariables
    }
}

export default VariablesRepository