import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
// import * as timeConverter from '../util/timeConverter'
import { Task } from './task.entity'
@Entity()
export class Kanban {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string
    //TODO pogledati
    // @Column({
    //     nullable: true,
    //     readonly: true,
    //     transformer: {
    //         from: (value?: any | null) => value,
    //         to: (value?: string | null) => (value === undefined || value === null ? value : timeConverter.utcTimeToCetConvert())
    //     }
    // })
    // time: string
    @CreateDateColumn()
    timestamp: string

    @OneToMany(
        (type) => Task,
        (task) => task.kanban,
        { cascade: ['insert', 'update', 'remove'], eager: true }
    )
    tasks?: Task[]
}
