import { getCustomRepository } from "typeorm";
import User from "../../models/User";
import UserRepository from "../../repositories/UsersRepository";
import { hash } from 'bcryptjs'


interface Request {
    name: string,
    email: string,
    password: string,
    salary: number
}

class CreateUserService {
    public async execute({ name, email, password, salary }: Request): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const checkUserExist = await userRepository.findOne({
            where: {email}
        })

        if(checkUserExist){
            throw new Error('Email ja existe');
        }
        const hashedPassword = await hash(password, 8);
        const userCreate = userRepository.create({
            name,
            email,
            password: hashedPassword,
            salary
        });

        await userRepository.save(userCreate)
        return userCreate
    }
}

export default CreateUserService