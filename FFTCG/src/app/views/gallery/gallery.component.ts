import { Component, OnInit } from '@angular/core';
import { CardEntityService } from './services/card-entity.service';
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'
import { ICard } from '../../models/card/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

    observable$: Observable<ICard[]> | undefined
    constructor(private cardsService: CardEntityService){

    }

    ngOnInit(): void {
      console.log("holi")
      this.observable$ = this.cardsService.entities$
      .pipe(
        map(courses => courses)
      );    
    }

}
