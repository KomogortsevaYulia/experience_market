import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from "typeorm"
import { Event } from "..//entities/event.entity"
import * as argon2 from 'argon2';
import { IsEmail } from 'class-validator';

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    last_name: string

    @Column({ nullable: true })
    name: string

    @Column({ nullable: true })
    patronymic: string

    @Column()
    username: string

    @Column({ nullable: true })
    birthdate: Date

    @Column({ nullable: true })
    date_token: Date

    @Column({ nullable: true })
    phone: string

    @Column()
    @IsEmail()
    email: string

    @Column({
        type: "enum",
        enum: ["male", "female"],
        default: "male"
    })
    gender: string

    @Column("simple-array",{ nullable: true })
    permission: string[]

    @Column()
    password: string;
    
    @Column({ nullable: true })
    bio: string;
    
    @Column({ nullable: true })
    image: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await argon2.hash(this.password);
    }
}
