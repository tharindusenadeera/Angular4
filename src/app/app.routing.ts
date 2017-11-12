import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FrontComponentComponent } from './front-component/front-component.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: FrontComponentComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }