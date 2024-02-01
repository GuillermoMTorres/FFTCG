import { Routes } from "@angular/router";
import { GalleryComponent } from "./views/gallery/gallery.component";
import { AppComponent } from "./app.component";
import { CardsResolver } from "./views/gallery/services/cards-resolver";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        resolve: {
            cards: CardsResolver
        }
    },
    {
        path: 'deckbuilding',
        loadChildren: () => import('./views/gallery/gallery.module').then(m => m.GalleryModule)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];