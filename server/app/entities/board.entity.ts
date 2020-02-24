import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { List } from './list.entity'
import { Task } from './task.entity'


@Entity()
export class Board {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @CreateDateColumn()
    timestamp: string

    @OneToMany(
        (type) => Task,
        (t) => t.board,
        { cascade: ['insert', 'update', 'remove'], eager: true }
    )
    tasks?: Task[]

    @OneToMany(
        (type) => List,
        (l) => l.board,
        { cascade: ['insert', 'update', 'remove'], eager: true }
    )
    lists?: List[]
}
