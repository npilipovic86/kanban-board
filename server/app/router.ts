import * as express from 'express'
// import * as boardController from './controllers/board.controller'
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
router.post('/kanbans/:id', kanbanController.addNewTask)
router.post('/kanbans/:id/lists', kanbanController.addNewList)

// board routes
// router.get('/boards', boardController.getAll)
// router.get('/boards/:id', boardController.getById)
// router.post('/boards', boardController.save)
// router.put('/boards/:id', boardController.update)
// router.delete('/boards/:id', boardController.remove)
// router.post('/boards/:id', boardController.addNewKanban)

export default router
