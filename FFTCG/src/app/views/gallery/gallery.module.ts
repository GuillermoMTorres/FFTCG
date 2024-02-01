import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EntityDataModule, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { CardEntityService } from './services/card-entity.service';
import { CardsResolver } from './services/cards-resolver';

const routes: Routes = [
    {
        path: '',
        component: GalleryComponent,
        resolve: {
            Cards: CardsResolver
        }
        //canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

const entityMetadata: EntityMetadataMap = {
    Card: {

    }
};

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        //BrowserAnimationsModule,
        //EntityDataModule.forRoot({}),
        //HttpClientModule,
        //MatMenuModule,
        //MatIconModule,
        //MatSidenavModule,
        //MatProgressSpinnerModule,
        //MatListModule,
        //MatToolbarModule,
        //AuthModule.forRoot(),
        /*StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks : {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateSerializability:true
            }
        }),
        */
        //StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, connectInZone: true}),
        //EffectsModule.forRoot([]),
        //EntityDataModule.forRoot({}),
        /*StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
        */
    ],
    providers: [
        CardEntityService,
        CardsResolver
    ],
    bootstrap: [GalleryComponent]
})

export class GalleryModule {

    constructor(private _eds: EntityDefinitionService) {
        _eds.registerMetadataMap(entityMetadata)
    }
}
