import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";
import { ReferencesBaseAndDerived } from "./ReferencesBaseAndDerived";

@Entity()
export class MainRepro {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;

    @OneToMany(_ => ReferencesBaseAndDerived, r => r.mainRepro, { cascade: true })
    reproRelation: ReferencesBaseAndDerived[];
    
}