import { getCustomRepository } from "typeorm";
import User from "../../models/User";
import UserRepository from "../../repositories/UsersRepository";

interface Request {
    name: string,
    email: string,
    password: string,
    salary: number
}

class CreateUserService {
    public async execute({name, email, password, salary}:Request):Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const userCreate = userRepository.create({
            name,
            email,
            password,
            salary
        })
        await userRepository.save(userCreate)
        return userCreate
    }
}

export default CreateUserService