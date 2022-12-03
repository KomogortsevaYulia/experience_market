import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from "typeorm"
import { Event } from "..//entities/event.entity"
import * as argon2 from 'argon2';
import { IsEmail } from 'class-validator';

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    last_name: string

    @Column()
    name: string

    @Column({ nullable: true })
    patronymic: string

    @Column()
    username: string

    @Column({ nullable: true })
    birthdate: Date

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

    @Column("simple-array")
    permission: string[]

    @Column()
    password: string;
    
    @Column()
    bio: any;
    
    @Column()
    image: any;

    @BeforeInsert()
    async hashPassword() {
        this.password = await argon2.hash(this.password);
    }
}
