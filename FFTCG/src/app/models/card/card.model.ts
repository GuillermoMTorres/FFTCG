import { TCard_Category } from './card-category.model';
import { TCard_Colors } from './card-colors.model';
import { TCard_Job } from './card-jobs.model';
import { TCard_Types } from './card-types.model';

export interface ICard {
    id: number,
    name: string,
    photoURL: string,
    cpCost: number,
    color: Array<TCard_Colors>,
    type:  TCard_Types, 
    job?: TCard_Job,
    serial: string,
    category: TCard_Category,
    cardText?: string,
    power?: number
}

export function getCardOpus(card:ICard): number {
    return parseInt(card.serial.substring(0, card.serial.indexOf('-')))
}

export function getCardRarity(card:ICard): string {
    return card.serial.substring(card.serial.length);
}

export function hasEXBurst(card:ICard): boolean | undefined {
    return card.cardText?.includes('(EX)');
}

export function hasActionAbility(card:ICard): boolean | undefined {
    return card.cardText?.includes('(Tap)');
}

export function compareCards(c1:ICard, c2: ICard): number {
    if (c1.serial > c2.serial) {
      return 1;
    }
    else if ( c1.serial < c2.serial) {
      return -1;
    }
    else return 0;
}

