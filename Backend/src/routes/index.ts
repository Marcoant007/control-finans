import {Router} from 'express'
import fixedRouter from './fixedExpenses.routes';
import userRouter from './users.routes';
import variableRouter from './variablesExpenses.routes';



const routes = Router();

routes.use('/users', userRouter)
routes.use('/fixedExpenses', fixedRouter)

routes.use('/variableExpenses', variableRouter)


export default routes