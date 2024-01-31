import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntityDataModule } from '@ngrx/data';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
        //canActivate: [AuthGuard]
    },
    {
        path: 'deckbuilding',
        loadChildren: () => import('./views/gallery/gallery.module').then(m => m.GalleryModule),
        //canActivate: [AuthGuard]
    },
    {
        path: 'play',
        //loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
        //canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    declarations: [
        AppComponent
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
    bootstrap: [AppComponent]
})

export class AppModule {
}
