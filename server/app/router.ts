import * as express from 'express'
import * as taskController from './controllers/task.controller'
import * as boardController from './controllers/board.controller'


// bundle routes
const router = express.Router()
// const taskController: TaskController = new TaskController

// task routes
router.get('/tasks', taskController.getAll)
router.get('/tasks/:id', taskController.getById)
router.post('/tasks', taskController.save)
router.put('/tasks/:id', taskController.update)
router.delete('/tasks/:id', taskController.remove)

// kanban routes
router.get('/boards', boardController.getAll)
router.get('/boards/:id', boardController.getById)
router.post('/boards', boardController.save)
router.put('/boards/:id', boardController.update)
router.delete('/boards/:id', boardController.remove)
router.post('/boards/:id/tasks', boardController.addNewTask)
router.post('/boards/:id/lists', boardController.addNewList)


export default router
