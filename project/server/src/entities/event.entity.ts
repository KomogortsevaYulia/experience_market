import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { User } from "../entities/user.entity"
import { Tag } from "./tags.entity"

@Entity("events")
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({
        type: "enum",
        enum: ["event", "project", "hackaton"],
        default: "event"
    })
    type: string

    @Column({
        type: "enum",
        enum: ["competition", "challenge"],
        default: null,
        nullable: true
    })
    type_events: string

    @Column({
        type: "enum",
        enum: ["training", "unique"],
        default: null,
        nullable: true
    })
    type_project: string

    @Column({
        type: "enum",
        enum: ["created", "not viewed","not created"],
        default: "not viewed",
    })
    status: string

    @Column("simple-array")
    images: string[]

    @Column()
    descriptions: string

    @JoinColumn([
        { name: "creator_id" ,}
    ])
    @OneToOne(() => User, (user) =>user.id)
    creator: number
    
    @JoinColumn([
        { name: "tags" ,}
    ])
    @ManyToOne(() => Tag, (tag) =>tag.id)
    tags: Tag[]

    @Column()
    date_start: Date

    @Column({nullable:true})
    date_end: Date

    @Column({nullable:true})
    team_size: string

    @Column({nullable:true})
    last_time_registration: Date

    @Column({nullable:true})
    prize: string
}
