import { ICard } from "../src/app/models/card/card.model";

/* Template to copy paste with a card without empty values
        {
            id: 2,
            name: 'Auron',
            photoURL: '???',
            cpCost: 5,
            color: ["fire"],
            type:  'Forward', 
            job: 'Guardian',
            serial: '1-002R',
            category: 'X',
            cardText: "The Backups you control cannot be broken by your opponent's Summons or abilities",
            power: 9000,
            //TODO: Add logic example: whileField(effect)
        },
*/
export const CARDS: Array<ICard> = 
    [
        {
            id: 1,
            name: 'Auron',
            photoURL: '???',
            cpCost: 6,
            color: ["fire"],
            type:  'Forward', 
            job: 'Guardian',
            serial: '1-001H',
            category: 'X',
            cardText: "When Auron deals damage to your opponent, you may play 1 Fire Backup from your hand onto the field dull",
            power: 9000,
            //TODO: Add logic example: onDamage(playCard, type, restrinction)
        },
        {
            id: 2,
            name: 'Auron',
            photoURL: '???',
            cpCost: 5,
            color: ["fire"],
            type:  'Forward', 
            job: 'Guardian',
            serial: '1-002R',
            category: 'X',
            cardText: "The Backups you control cannot be broken by your opponent's Summons or abilities",
            power: 9000,
            //TODO: Add logic example: whileField(effect)
        },
        {
            id: 3,
            name: 'Red Mage',
            photoURL: '???',
            cpCost: 2,
            color: ["fire"],
            type:  'Backup', 
            job: 'Standard Unit',
            serial: '1-003C',
            category: 'III',
            cardText: "(Fire)(1)(Tap): Choose 1 Forward. It cannot block this turn",
            power: 9000,
            //TODO: Add logic
        },
        {
            id: 4,
            name: 'Ifrit',
            photoURL: '???',
            cpCost: 1,
            color: ["fire"],
            type:  'Summon', 
            serial: '1-004C',
            category: 'FFT',
            cardText: "(EX) Choose 1 Forward. Deal it 4000 damage"
            //TODO: Add logic
        },
        {
            id: 5,
            name: 'Warrior of Light',
            photoURL: '???',
            cpCost: 2,
            color: ["fire"],
            type:  'Forward', 
            job: 'Warrior',
            serial: '1-005R',
            category: 'DFF',
            cardText: "If Warrior of Light deals damage to a Forward of cost 4 or more, double the damage instead",
            power: 5000
            //TODO: Add logic
        },
    ]

  
;