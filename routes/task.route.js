import express , {Router} from 'express'
import { getAllTasks, createTask , getTask , updateTask,  deleteTask } from '../controllers/task.controller'

const taskRouter = Router()

taskRouter.get('/',getAllTasks)

taskRouter.post('/',createTask)

taskRouter.get('/:id',getTask)

taskRouter.put('/',updateTask)

taskRouter.delete('/',deleteTask)


export default taskRouter