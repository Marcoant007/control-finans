import { request, response, Router } from "express";
import FindByIdExpensesService from "../services/FixedExpenses/FindByIdFixedExpensesService";
<<<<<<< HEAD
import CreateVariableExpensesService from "../services/VariablesExpenses/CreateVariableService";
import DeleteVariableExpense from "../services/VariablesExpenses/DeleteVariableService";
import FindByVariableService from "../services/VariablesExpenses/FindByIdVariableService";
import ReadVariableExpensesService from "../services/VariablesExpenses/ReadVariableService";
import UpdatedVariableExpensesService from "../services/VariablesExpenses/UpdateVariableService";
=======
import ReadVariableExpensesService from "../services/VariablesExpenses/ReadVariableService";
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4

const variableRouter = Router()


<<<<<<< HEAD
variableRouter.get('/', async (request, response) => {
=======
variableRouter.get('/', async( request, response) => {
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4
    const readVariable = new ReadVariableExpensesService
    const variableExpenses = await readVariable.execute()
    return response.status(200).json(variableExpenses)
})

<<<<<<< HEAD
variableRouter.get('/:id', async (request, response) => {
    const { id } = request.params
    const findByIdVariable = new FindByVariableService
    const variable = await findByIdVariable.execute(+id)
    return response.status(200).json(variable)
})

variableRouter.post('/', async (request, response) => {
    try {
        const { name, value, user_id, date } = request.body
        const createVariableExpenses = new CreateVariableExpensesService()
        const variableExpenses = await createVariableExpenses.execute({
            name,
            date,
            user_id,
            value
        })
        return response.status(200).json(variableExpenses)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

variableRouter.put('/', async (request, response) => {
    const { id } = request.params
    const { name, user_id, value, date } = request.body
    const updatedVariable = new UpdatedVariableExpensesService()
    const variable = await updatedVariable.execute({
        id: Number(id),
        name,
        user_id,
        date,
        value
    })

    return response.status(200).json(variable)

})

variableRouter.delete('/:id', async(request,response) =>{
    const{id} = request.params
    const deleteVariable = new DeleteVariableExpense()
    await deleteVariable.execute({id: +id})
    return response.status(200).send({})
})

export default variableRouter

=======
variableRouter.get('/:id', async(request,response) => {
    const {id} = request.params
    const findVariable = 
})
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4
