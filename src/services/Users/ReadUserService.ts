import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UsersRepository";

class ListUserServiece {
    public async execute() {
        const userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.find()
        return users
    }
}

export default ListUserServiece