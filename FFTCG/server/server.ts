

import * as express from 'express';
import {Application} from "express";
import {getAllCards, getCardById} from "./get-cards.route";

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

app.route('/api/cards').get(getAllCards);

app.route('/api/cards/:cardId').get(getCardById);

const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




