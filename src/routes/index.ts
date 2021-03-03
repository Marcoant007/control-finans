import {Router} from 'express'
import fixedRouter from './fixedExpenses.routes';
import userRouter from './users.routes';


const routes = Router();

routes.use('/users', userRouter)
routes.use('/fixedExpenses', fixedRouter)

export default routes