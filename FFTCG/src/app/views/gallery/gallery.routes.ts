import { Routes } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { CardsResolver } from "./services/cards-resolver";


export const GALLERY_ROUTES: Routes = [
    {
        path: '',
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