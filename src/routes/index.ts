import {Router} from 'express'
import fixedRouter from './fixedExpenses.routes';
import userRouter from './users.routes';
<<<<<<< HEAD
import variableRouter from './variablesExpenses.routes';
=======
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4


const routes = Router();

routes.use('/users', userRouter)
routes.use('/fixedExpenses', fixedRouter)
<<<<<<< HEAD
routes.use('/variableExpenses', variableRouter)
=======
>>>>>>> 058fe4aebe5aa5747c2ae903b509e589dc69eee4

export default routes