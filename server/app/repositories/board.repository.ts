import { getRepository } from 'typeorm'
import { Board } from '../entities/board.entity'
import { List } from '../entities/list.entity'
import { Task } from '../entities/task.entity'


export class BoardRepository {
    private readonly repository = getRepository(Board)

    async getAll() {
        return await this.repository.find()
    }

    async save(item: Board) {
        return await this.repository.save(item)
    }

    async delete(id: string) {
        return await this.repository.delete(id)
    }

    async getById(id: string) {
        return await this.repository.findOne(id)
    }
    async update(id: string, newItem: Board) {
        return await this.repository.update(id, newItem)
    }
    async addNewTask(kanbanId: string, task: Task) {
        const kanban = await this.getById(kanbanId)
        kanban.tasks.push(task)
        let retVal = await this.repository.save(kanban)
        let result = retVal.tasks.find((t) => t.description === task.description && t.title === task.title && t.color === task.color)
        return result
    }

    async addNewList(boardId: string, list: List) {
        const kanban = await this.getById(boardId)

        let l = await getRepository(List).save(list)

        kanban.lists.push(l)
        await this.repository.save(kanban)
        return l
    }
}