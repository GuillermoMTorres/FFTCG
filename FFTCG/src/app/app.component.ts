import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsResolver } from './views/gallery/services/cards-resolver';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CardEntityService } from './views/gallery/services/card-entity.service';
import { CardsDataService } from './views/gallery/services/cards-data.service';
import { Observable} from 'rxjs'
import { ICard } from './models/card/card.model';
const entityMetadata: EntityMetadataMap = {
  Card: {}
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'FFTCG';

  observable$: Observable<ICard> | undefined
  
  constructor(private _eds: EntityDefinitionService,
              private _entityDataService: EntityDataService,
              private _cardsDataService: CardsDataService,
              ) {

    _eds.registerMetadataMap(entityMetadata);
    _entityDataService.registerService('Card', _cardsDataService)
  }


  ngOnInit() {
  }
}
