import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './task.entity'

@Entity()
export class Kanban {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column()
    title: string

    @OneToMany(
        (type) => Task,
        (task) => task.kanban,
        { cascade: ['insert', 'update', 'remove'] }
    )
    tasks: Task[]
}
