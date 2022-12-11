import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Tag } from "./tags.entity"
import { Team } from "./teams.entity"

@Entity("functions")
export class Function {
    @PrimaryGeneratedColumn()
    id: number

    @JoinColumn([
        { name: "team_id" ,}
    ])
    @ManyToOne(() => Team, (team) =>team.id)
    team: Team[]

    @Column()
    title: string
}