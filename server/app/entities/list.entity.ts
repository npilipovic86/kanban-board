import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Board } from './board.entity'

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(
        (type) => Board,
        (k) => k.lists,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn({ name: 'board_id', referencedColumnName: 'id' })
    board?: Board
}
