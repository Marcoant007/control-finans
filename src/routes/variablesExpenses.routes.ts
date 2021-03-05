import { request, response, Router } from "express";
import FindByIdExpensesService from "../services/FixedExpenses/FindByIdFixedExpensesService";
import ReadVariableExpensesService from "../services/VariablesExpenses/ReadVariableService";

const variableRouter = Router()


variableRouter.get('/', async( request, response) => {
    const readVariable = new ReadVariableExpensesService
    const variableExpenses = await readVariable.execute()
    return response.status(200).json(variableExpenses)
})

variableRouter.get('/:id', async(request,response) => {
    const {id} = request.params
    const findVariable = 
})