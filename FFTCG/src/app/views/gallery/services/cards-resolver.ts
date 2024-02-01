import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable, map, tap } from "rxjs";
import { CardEntityService } from "./card-entity.service";

//TODO: Remove deprecated
@Injectable()
export class CardsResolver implements Resolve<boolean>{

    constructor(private _cardsService: CardEntityService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        console.log("hello");
        this._cardsService.getAll()
            .pipe(
                map(cards => {
                    console.log(cards);
                }),

        );
        return this._cardsService.getAll()
        .pipe(
            map(cards => !!cards)
        );
     
    }
}