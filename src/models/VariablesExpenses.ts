import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";


@Entity('variables_expenses')
class VariablesExpenses {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    value: number

    @Column()
    user_id: number

    @ManyToOne(type => User, user => user.variable, {eager: true} )
    @JoinColumn({name: "user_id"})
    user: User
}

export default VariablesExpenses