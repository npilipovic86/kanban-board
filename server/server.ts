import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as helmet from 'helmet'
import { createConnection } from 'typeorm'
import router from './app/router'

const app = express()

// STATIC files
app.use(express.static('public'))

// Body parser use JSON data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// security config
app.use(helmet())

// connect the api routes under /api/*
app.use('/api', router)

// prevent 404
app.get('*', (req, res) => {
    res.sendFile('/public/index.html', { root: __dirname })
})

// connect to db
createConnection()
    .then(() => console.log('db connected'))
    .catch((error) => console.log('TypeORM connection error: ', error))

// start express server
const server = app.listen(process.env.PORT || 7711, () => {
    const port = server.address().port
    console.log('Server started at: http://localhost:' + port)
})
