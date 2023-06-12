import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true, nullable: false })
    @Generated('uuid')
    uuid: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    fullname: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
