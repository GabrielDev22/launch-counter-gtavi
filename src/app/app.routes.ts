import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoticiesGtaviComponent } from './layout/content/noticies-gtavi/noticies-gtavi.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'noticies', component: NoticiesGtaviComponent
            },
        ]
    },
];
