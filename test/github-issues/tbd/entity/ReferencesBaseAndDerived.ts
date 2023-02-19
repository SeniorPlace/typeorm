import { Column, JoinColumn, ManyToOne, PrimaryColumn, Entity } from "../../../../src";
import { Base } from "./Base";
import { Derived } from "./Derived";
import { MainRepro } from "./MainRepro";


@Entity()
export class ReferencesBaseAndDerived {

    @ManyToOne(_ => MainRepro, m => m.reproRelation)
    mainRepro: MainRepro;

    @PrimaryColumn("uuid")
    mainReproId: string;

    @ManyToOne(_ => Base)
    base: Base;

    @PrimaryColumn("uuid")
    baseId: string;

    @Column("text")
    name: string;

    @ManyToOne(_ => Derived, d => d.referencesBasedAndDerived, { createForeignKeyConstraints: false})
    @JoinColumn({ name: "baseId", referencedColumnName: "baseEntityId" })
    derived: Derived;

}