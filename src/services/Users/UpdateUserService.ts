import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UsersRepository";

interface Request {
    id: number,
    name: string,
    email: string,
    password: string,
    salary: number
}

class UpdateUserService {
    public async execute({name,email,id,salary,password}:Request){
        const userRepository = getCustomRepository(UserRepository)
        const userUpdated = await userRepository.save({
            id,
            name,
            email,
            password,
            salary
        })

        return userUpdated
    }
}

export default UpdateUserService