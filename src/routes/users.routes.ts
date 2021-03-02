import { request, response, Router } from 'express';
import { ReadStream } from 'node:fs';
import User from '../models/User';
import CreateUserService from '../services/Users/CreateUserService';
import ReadUserService from '../services/Users/ReadUserService';
import UpdatedUserService from '../services/Users/UpdateUserService';
import DeleteUserService from '../services/Users/DeleteUserService';

const userRouter = Router()

userRouter.get('/', async (request, response) => {
    const readUser = new ReadUserService();
    const users = await readUser.execute()
    return response.status(200).json(users)
})

userRouter.post('/', async (request, response) => {
    try {
        const { name, email, password, salary } = request.body
        const createUser = new CreateUserService()
        const users = createUser.execute({
            name,
            email,
            password,
            salary
        })

        return response.status(200).json(users)

    } catch (error) {
        return response.status(400).json({error: error.message})
    }
})

userRouter.put('/:id', async(request,response) => {
    const { id } = request.params
    const {name, email, password, salary} = request.body
    const updatedUserService = new UpdatedUserService()
    const users = await updatedUserService.execute({
        id: Number(id),
        name: name,
        email: email,
        password: password,
        salary: salary

    })
    return response.json(users)
})

userRouter.delete('/:id', async(request, response) => {
    const {id } = request.params
    const deleteUser = new DeleteUserService()
    await deleteUser.execute({id:+id})
    return response.status(204).send({})
})


export default userRouter