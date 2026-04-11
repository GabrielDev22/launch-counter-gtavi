import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoticiesGtaviComponent } from './layout/content/noticies-gtavi/noticies-gtavi.component';
import { GtaVIComponent } from './layout/content/gtaVI/gtaVI.component';
import { GtaCharacterComponent } from './layout/content/gta-character/gta-character.component';
import { GtaWorldMapComponent } from './layout/content/gta-world-map/gta-world-map.component';

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
            {
                path: 'map', component: GtaWorldMapComponent
            },
            {
                path: 'characters', component: GtaCharacterComponent,
            }
        ]
    },
];
