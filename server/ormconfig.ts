//locale db
module.exports = [
    {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'board',
        logging: true,
        synchronize: true,
        entities: [`${__dirname}/**/**.entity{.ts,.js}`],
        autoSchemaSync: true
    }
    //heroku db
    //  {
    //       type: 'mysql',
    //       host: 'zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //       port: 3306,
    //       username: 'rn6bkpwuaogp9rk7',
    //       password: 'dyu7s17dm19xlv6v',
    //       database: 'x0cilnif6epriqii',
    //       entities: [`${__dirname}/**/**.entity{.ts,.js}`],
    //       logging: true,
    //       synchronize: true
    //   }
    // mysql://rn6bkpwuaogp9rk7:dyu7s17dm19xlv6v@zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x0cilnif6epriqii
]
