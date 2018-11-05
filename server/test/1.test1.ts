"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const mongoose = require("mongoose");
const Users = mongoose.model("Users");

chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    before(function (done) {
        Users.remove({}, (err) => {
            console.error(err)
            done()
        })
    })

    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(app)
                .get('/v1/users')
                .end((err, res) => {
                    if (err) { console.error(err) }
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    // res.body.length.should.be.eql(0)
                    done()
                })
        })
    })

    describe('/POST users/register', () => {
        it('it should register a user', (done) => {
            chai.request(app)
                .post('/v1/users')
                .send({ email: 'test@gmail.com', password: 'password', name: 'Jason Bourne' })
                .end((err, res) => {
                    if (err) { console.error(err) }
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    // res.body.length.should.be.eql(0)
                    done()
                })
        })
    })
})