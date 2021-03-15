import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UsersRepository";


class ReadUsersService {
    public async execute() {
        const userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.find()
        return users
    }
}

export default ReadUsersService