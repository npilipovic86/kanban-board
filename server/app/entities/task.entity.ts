import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Board } from './board.entity'

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    color: string

    @Column()
    status: string

    @CreateDateColumn()
    timestamp: string

    @ManyToOne(
        (type) => Board,
        (k) => k.lists,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn({ name: 'board_id', referencedColumnName: 'id' })
    board: Board
}
