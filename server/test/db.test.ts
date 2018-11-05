import "reflect-metadata";
// import { createTestingConnections, closeTestingConnections, reloadTestingDatabases } from "../../utils/test-utils";
import  * as DB  from "../mysql-conection";
// import { expect } from "chai";
import { getConnection, createConnection } from "typeorm";
import { Card } from "../entity/card.entity";
// import * as request from "supertest";


// describe("github issues > #<issue number> <issue title>", () => {
    // const Conec = Connection;
    // let connections: Conec[];
    // createConnection().then(connection => {
    // before(async () => connections = await createTestingConnections({
     
    //     entities: [__dirname + "/entity/*{.js,.ts}"],
    //     schemaCreate: true,
    //     dropSchema: true,
    // }));
    let connection ;

    //     before(async () =>  await createTestingConnections({

    //     entities: [__dirname + "/entity/*{.js,.ts}"],
    //     schemaCreate: true,
    //     dropSchema: true,
    // }));


       before(async () => {
            await createConnection();
            this. connection = getConnection('test');//da ucita test db
           await this.connection.dropDatabase();

        });
    beforeEach( async () => {
        await createConnection();
        this.connection = getConnection('test');//da ucita test db
    });
    after(async () => { 
        await this.connection.dropDatabase();
     });

    it(`return 200`, async () => {

        const entityRepository = this.connection.getRepository(Card);
        // const entity = new Entity();

        // Object.assign(entity, {
        //     value1: 1,
        //     value2: '2',
        //     value3: '3'
        // });

        // await entityRepository.save(entity);

        // return request(server)
        //     .post('/api/endpoint')
        //     .expect(200)
    });

    // you can add additional tests if needed

// });