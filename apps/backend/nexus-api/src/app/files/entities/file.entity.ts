import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class File {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true, nullable: false })
    @Generated('uuid')
    uuid: string;

    @Column()
    name: string;

    @Column()
    path: string;

    @Column()
    size: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
