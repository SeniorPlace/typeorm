import { Column, PrimaryGeneratedColumn, Entity } from "../../../../src";

@Entity()
export class Base {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;
}
