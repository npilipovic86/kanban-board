import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Card } from "./entity/card.entity";
// import * as open from "open";//open browser tab

createConnection().then(connection => {
    //connection to db 
    const cardRepository = connection.getRepository(Card);
    const app = express();

    app.use(express.static('public'));   //STATIC files
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json()); // Body parser use JSON data

    // register routes
    app.get("/boards", async (req: Request, res: Response) => {
        const cards = await cardRepository.find();
        cards ? res.send(cards) : res.sendStatus(204);
    });

    app.get("/boards/:id", async (req: Request, res: Response) => {
        console.log('req body ::', req.body, '\nreqParams ::', req.params)
        const retVal = await cardRepository.findOne(req.params.id);
        retVal ? res.send(retVal) : res.sendStatus(204);
    });

    app.post("/boards", async (req: Request, res: Response) => {
        console.log('req body ::', req.body, '\nreqParams ::', req.params)
        const card = await cardRepository.create(req.body);
        card ? res.status(201).send(await cardRepository.save(card)) : res.sendStatus(400);
    });

    app.delete("/boards/:id", async (req: Request, res: Response) => {
        console.log('req body ::', req.body, '\nreqParams ::', req.params)
        const card = await cardRepository.findOne(req.params.id);
        card ? res.status(204).send(await cardRepository.remove(card)) : res.sendStatus(404);
         });

    app.put("/boards/:id", async (req: Request, res: Response) => {
        console.log('req body ::', req.body, '\nreqParams ::', req.params)
        const newCard = new Card(req.body);                                          

        const card = await cardRepository.update({ id: req.params.id}, newCard);
//         const cardToUpdate = await cardRepository.findOne(req.params.id);
//         cardToUpdate = req.body;
//         const card = await cardRepository.save(cardToUpdate);
        card ? res.status(200).send(card) : res.sendStatus(400);
    })
    // start express server
    const server = app.listen(process.env.PORT || 7777, () => {
        const port = server.address().port;
        console.log("Server started at: http://localhost:" + port + "\nOpening browser ...");
        // open("http://localhost:" + port);
    });
});
