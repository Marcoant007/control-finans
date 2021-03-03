import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";


@Entity('fixed_expenses')
class FixedExpenses {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    value: number

    @Column()
    date: Date

    @Column('int4', {name:"user_id"})
    user_id: number

    @ManyToOne(type => User, user => user.fixed, {eager: true} )
    @JoinColumn({name: "user_id"})
    user: User
}

export default FixedExpenses