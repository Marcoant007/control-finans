import { request, response, Router } from "express";
import CreateFixedExpensesService from "../services/FixedExpenses/CreateFixedExpensesService";
import DeleteFixedExpenses from "../services/FixedExpenses/DeleteFixedExpensesService";
import FindByIdExpensesService from "../services/FixedExpenses/FindByIdFixedExpensesService";
import UpdatedFixedExpensesService from "../services/FixedExpenses/UpdateExpensesService";
import ListFixedExpensesService from "../services/Users/ReadUserService";

const fixedRouter = Router();

fixedRouter.get('/', async (request, response) => {
    const listFixed = new ListFixedExpensesService
    const fixedExpenses = await listFixed.execute()
    return response.status(200).json(fixedExpenses)
})

fixedRouter.get('/:id', async(request, response) => {
    const {id} = request.params
    const findFixedbyId = new FindByIdExpensesService
    const fixedExpenses = await findFixedbyId.execute(+id)
    return response.json(fixedExpenses)
})

fixedRouter.post('/', async(request,response) => {
    try {

        const {name, value, user_id, date} = request.body
        const createFixedExpenses = new CreateFixedExpensesService()
        const fixedExpenses = await createFixedExpenses.execute({
            name,
            date,
            user_id,
            value
        })

        return response.status(200).json(fixedExpenses)
        
    } catch (error) {
        return response.status(400).json({error: error.message})
    }
})

fixedRouter.put('/:id', async(request,response) => {
    const {id} = request.params
    const{ name, user_id, value,date } = request.body
    const updatedFixed = new UpdatedFixedExpensesService()
    const fixed = await updatedFixed.execute({
        id: Number(id),
        name: name,
        user_id: user_id,
        value: value,
        date: date
    })
    return response.status(200).json(fixed)
})

fixedRouter.delete('/:id', async(request,response) => {
    const {id} = request.params
    const deleteFixed = new DeleteFixedExpenses()
    await deleteFixed.execute({ id: +id })
    return response.status(200).send({})
})

export default fixedRouter