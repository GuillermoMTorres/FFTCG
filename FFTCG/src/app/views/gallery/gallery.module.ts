import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EntityDataModule } from '@ngrx/data';
import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
    {
        path: '',
        component: GalleryComponent
        //canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        BrowserModule,
        //BrowserAnimationsModule,
        RouterModule.forRoot(routes, {}),
        EntityDataModule.forRoot({}),
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
    bootstrap: [GalleryComponent]
})

export class GalleryModule {
}
