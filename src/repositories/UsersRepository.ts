import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";


@EntityRepository(User)
class UserRepository extends Repository<User>{
    public async findbyUser(name: string): Promise<User | undefined>{
        const findUser = await this.findOne({
            where: { name: name}
        })
        return findUser 
    }
}

export default UserRepository