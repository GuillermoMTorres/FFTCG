import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CardsResolver } from './app/views/gallery/services/cards-resolver';
import { CardEntityService } from './app/views/gallery/services/card-entity.service';
import { EffectsModule } from '@ngrx/effects';

bootstrapApplication(AppComponent,
  {
    providers: [
      CardsResolver,
      CardEntityService,
      provideRouter(APP_ROUTES),
      importProvidersFrom(
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreModule.forRoot({}),
        HttpClientModule
      )
    ]
  }
  )
  .catch((err) => console.error(err));
