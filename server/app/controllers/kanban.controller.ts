import { Request, Response } from 'express'
import { KanbanRepository } from '../repositories/kanban.repository'

export const getAll = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal

    try {
        retVal = await repository.getAll()
    } catch (e) {
        console.log(e)
    }

    retVal ? res.send(retVal) : res.sendStatus(204)
}

export const getById = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal

    try {
        retVal = await repository.getById(req.params.id)
    } catch (e) {
        console.log(e)
    }

    retVal ? res.send(retVal) : res.sendStatus(204)
}

export const save = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal

    try {
        retVal = await repository.save(req.body)
    } catch (e) {
        console.log(e)
    }

    retVal ? res.status(201).send(retVal) : res.sendStatus(400)
}

export const remove = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal

    try {
        retVal = await repository.delete(req.params.id)
    } catch (e) {
        console.log(e)
    }

    retVal ? res.status(204).send(retVal) : res.sendStatus(404)
}

export const update = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal

    try {
        retVal = await repository.update(req.params.id, req.body)
    } catch (e) {
        console.log(e)
    }

    retVal ? res.status(200).send(retVal) : res.sendStatus(400)
}

export const addNewTask = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal

    try {
        retVal = await repository.addNewTask(req.params.id, req.body)
    } catch (e) {
        console.log(e)
    }

    retVal ? res.status(200).send(retVal) : res.sendStatus(400)
}
export const addNewList = async (req: Request, res: Response) => {
    let repository: KanbanRepository = new KanbanRepository()
    let retVal
    console.log('TCL: addNewList ->  req.body', req.body)
    try {
        retVal = await repository.addNewList(req.params.id, req.body)
    } catch (e) {
        console.log(e)
    }

    retVal ? res.status(200).send(retVal) : res.sendStatus(400)
}
