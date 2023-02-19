import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, Entity } from "../../../../src";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";
import { Base } from "./Base";
import { ReferencesBaseAndDerived } from "./ReferencesBaseAndDerived";

@Entity()
export class Derived {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(_ => Base)
    @JoinColumn()
    baseEntity: Base;

    @Column("uuid", { nullable: true })
    baseEntityId: string;

    @OneToMany(_ => ReferencesBaseAndDerived, r => r.derived)
    referencesBasedAndDerived: ReferencesBaseAndDerived;

}