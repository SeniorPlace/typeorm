import "reflect-metadata";
import { createTestingConnections, closeTestingConnections, reloadTestingDatabases } from "../../utils/test-utils";
import { DataSource } from "../../../src/data-source/DataSource"
import { expect } from "chai";
import { MainRepro } from "./entity/MainRepro";

describe("github issues > TBD - JoinColumn not working", () => {

    let dataSources: DataSource[];
    before(async () => dataSources = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
    }));
    beforeEach(() => reloadTestingDatabases(dataSources));
    after(() => closeTestingConnections(dataSources));

    it("should handle multiple JoinColumns for different relations", () => Promise.all(dataSources.map(async dataSource => {
        const mainRepo = dataSource.getRepository(MainRepro);

        const main = new MainRepro();
        main.name = "First";
        await mainRepo.save(main);

        const retrieved = await mainRepo.findOne({ relations: {
            reproRelation: { 
                base: true
            }
        }, where: {
            name: main.name
        }});

        expect(retrieved).to.not.be.undefined;
    })));

    // you can add additional tests if needed

});