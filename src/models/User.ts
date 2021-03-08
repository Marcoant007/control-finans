import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import FixedExpenses from "./FixedExpenses";
import VariablesExpenses from "./VariablesExpenses";


@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    email: string
    
    @Column()
    password: string

    @Column()
    salary: number
      
    @OneToMany(type => FixedExpenses, fixed => fixed.user, {eager: true, cascade: true})
    fixed: FixedExpenses[]

    @OneToMany(type => VariablesExpenses, variable => variable.user, {eager: true, cascade: true} )
    variable: VariablesExpenses[]

}

export default User