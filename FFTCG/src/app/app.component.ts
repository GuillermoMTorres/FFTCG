import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsResolver } from './views/gallery/services/cards-resolver';
import { EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CardEntityService } from './views/gallery/services/card-entity.service';

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
export class AppComponent {
  title = 'FFTCG';

  constructor(private _eds: EntityDefinitionService) {
    _eds.registerMetadataMap(entityMetadata)
  }
}
