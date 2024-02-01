import { Routes } from "@angular/router";
import { GalleryComponent } from "./views/gallery/gallery.component";
import { AppComponent } from "./app.component";
import { CardsResolver } from "./views/gallery/services/cards-resolver";
import { HomeComponent } from "./views/home/home.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'deckbuilding',
        component: GalleryComponent,
        resolve: {
            cards: CardsResolver
        }
    },
    {
        path: '**',
        redirectTo: '/'
    }
];