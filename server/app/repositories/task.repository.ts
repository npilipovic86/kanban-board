import { getRepository } from 'typeorm'
import { Task } from '../entities/task.entity'

export class TaskRepository {
    private readonly repository = getRepository(Task)

    async getAll() {
        return await this.repository.find()
    }

    async save(item: Task) {
        return await this.repository.save(item)
    }

    async delete(item: Task) {
        return await this.repository.remove(item)
    }

    async getById(id: string) {
        return await this.repository.findOne(id)
    }
    async update(id: string, newItem: Task) {
        return await this.repository.update(id, newItem)
    }
}
