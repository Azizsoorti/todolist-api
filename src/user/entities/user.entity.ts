import { Todo } from "src/todo/entities/todo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';  // <-- Import bcrypt here

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    role : string;

    // one user can have multiple todos
    @OneToMany(() => Todo, (todo) => todo.user)
    todos : Todo[];

    // Add the hashPassword method here
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
