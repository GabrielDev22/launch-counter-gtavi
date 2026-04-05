import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoticiesGtaviComponent } from './layout/content/noticies-gtavi/noticies-gtavi.component';
import { GtaVIComponent } from './layout/content/gtaVI/gtaVI.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', component: GtaVIComponent
            },
            {
                path: 'noticies', component: NoticiesGtaviComponent
            },
        ]
    },
];
