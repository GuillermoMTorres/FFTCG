import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { ICard } from "../../../models/card/card.model";

@Injectable()
export class CardEntityService extends EntityCollectionServiceBase<ICard>{

    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory){

        super('Card', serviceElementFactory);
    }
}