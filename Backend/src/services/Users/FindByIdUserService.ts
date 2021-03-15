import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UsersRepository";

class FindByIdUserService {
    public async execute(id: number){
        const userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.findOne({
            where: {id:id}
        })

        return users
    }
}


export default FindByIdUserService