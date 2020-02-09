import * as express from 'express'
import * as kanbanController from './controllers/kanban.controller'
import * as taskController from './controllers/task.controller'

// bundle routes
const router = express.Router()

// task routes
router.get('/tasks', taskController.getAll)
router.get('/tasks/:id', taskController.getById)
router.post('/tasks', taskController.save)
router.put('/tasks/:id', taskController.update)
router.delete('/tasks/:id', taskController.remove)

// kanban routes
router.get('/kanbans', kanbanController.getAll)
router.get('/kanbans/:id', kanbanController.getById)
router.post('/kanbans', kanbanController.save)
router.put('/kanbans/:id', kanbanController.update)
router.delete('/kanbans/:id', kanbanController.remove)
router.post('/kanbans/:id/tasks', kanbanController.addNewTask)

export default router
