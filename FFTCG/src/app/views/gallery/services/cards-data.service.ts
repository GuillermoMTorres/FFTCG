import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ICard } from '../../../models/card/card.model';



@Injectable()
export class CardsDataService extends DefaultDataService<ICard> {


    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Card', http, httpUrlGenerator);

    }

    override getAll(): Observable<ICard[]> {
        return this.http.get('/api/cards')
            .pipe(
                map((res:any) => res["payload"])
            );
    }

}
