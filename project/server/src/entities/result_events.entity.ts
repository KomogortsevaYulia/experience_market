import { PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, Entity } from "typeorm"
import { Event } from "./event.entity"
import { Team } from "./teams.entity"

@Entity("results_event")
export class ResultEvent {

    @PrimaryGeneratedColumn()
    id: number

    @JoinColumn([
        { name: "event_id" ,}
    ])
    @OneToOne(() => Event, (event) =>event.id)
    event: number

    @JoinColumn([
        { name: "team_id" ,}
    ])
    @OneToOne(() => Team, (team) =>team.id)
    team: number

    @Column({ nullable: true })
    link_solution: string

    @Column({ nullable: true })
    feedback: string

    @Column("simple-array")
    images: string[]

    @Column({ nullable: true })
    place: number
}