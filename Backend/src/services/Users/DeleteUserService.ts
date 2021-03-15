import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UsersRepository";

interface Request {
    id: number
}


class DeleteUserService {
    public async execute({id}:Request){
        const userDelete = getCustomRepository(UserRepository)
        await userDelete.delete({id})
    }
}

export default DeleteUserService