import { PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, Entity } from "typeorm"
import { ResultEvent } from "./result_events.entity"
import { User } from "./user.entity"

@Entity("voting")
export class Voting {
    @PrimaryGeneratedColumn()
    id: number

    @JoinColumn([
        { name: "user_id", }
    ])
    @OneToOne(() => User, (user) => user.id)
    user: number

    @JoinColumn([
        { name: "result_event_id", }
    ])
    @OneToOne(() => ResultEvent, (resultEvent) => resultEvent.id)
    result_event: number

    @Column({ nullable: true })
    date: Date

    @Column({ nullable: true })
    title_criterion: string

    @Column({ nullable: true })
    score: number

    @Column({ nullable: true })
    comments: string
}