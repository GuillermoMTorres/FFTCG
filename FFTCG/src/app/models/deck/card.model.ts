import { ICard } from '../card/card.model';


export interface IDeck {
    cards: Array<ICard>
}

export function isLegal(deck:IDeck): boolean {
    return deck.cards.length === 50
}
