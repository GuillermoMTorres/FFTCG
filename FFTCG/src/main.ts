import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { EntityDataModule, EntityMetadataMap } from '@ngrx/data';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CardsResolver } from './app/views/gallery/services/cards-resolver';
import { CardEntityService } from './app/views/gallery/services/card-entity.service';
import { EffectsModule } from '@ngrx/effects';
import { CardsDataService } from './app/views/gallery/services/cards-data.service';
import { GalleryComponent } from './app/views/gallery/gallery.component';
import { GALLERY_ROUTES } from './app/views/gallery/gallery.routes';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './app/environments/environment.prod';

bootstrapApplication(AppComponent,
  {
    providers: [
      CardsResolver,
      CardEntityService,
      CardsDataService,
      provideRouter(APP_ROUTES),
      importProvidersFrom(
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreDevtoolsModule.instrument({}),
        HttpClientModule
      )
    ]
  }
  )
  .catch((err) => console.error(err));
