
import {Request, Response} from 'express';
import {CARDS} from "./db-cards-static";
import {ICard} from '../src/app/models/card/card.model';

export function getAllCards(req: Request, res: Response) {

    console.log("Retrieving cards data ...");

    setTimeout(() => {

      res.status(200).json({payload:Object.values(CARDS)});

    }, 1000);

}


export function getCardById(req: Request, res: Response) {

    const cardId = req.params['id'];

    const cards: any = Object.values(CARDS);

    const card = cards.find((card:ICard) => card.id == parseInt(cardId));

    setTimeout(() => {

      res.status(200).json(card);

    }, 1000);


}