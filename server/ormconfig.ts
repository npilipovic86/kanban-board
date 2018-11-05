//locale db
module.exports = [
  {
    // environment: "dev",
    // name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "board",
    logging: true,
    synchronize: true,
    entities: [`${__dirname}/**/**.entity{.ts,.js}`],
    autoSchemaSync: true
  },
  // {
  //   environment: "test",
  //   name: "test", //// CHANGED
  //   type: "mysql",
  //   host: "localhost",
  //   port: 3306,
  //   username: "root",
  //   password: "root",
  //   database: "api_test",
  //   entities: [`${__dirname}/**/**.entity{.ts,.js}`],
  //   autoSchemaSync: true
  // },
  // {
  //   environment: "prod",
  //   name: "heroku",
  //   type: "mysql",
  //   host: "us-cdbr-iron-east-01.cleardb.net",
  //   port: 3306,
  //   username: "bf283c30f00a44",
  //   password: "dc5c0faf",
  //   database: "heroku_16233cf59488bc2",
  //   entities: [`${__dirname}/**/**.entity{.ts,.js}`],
  //   logging: true,
  //   synchronize: true
  // }
];