import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorsListComponent } from './creators-list/creators-list.component';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/series', pathMatch: 'full' },
  { path: 'creators', component: CreatorsListComponent },
  { path: 'creators/:id', component: CreatorDetailsComponent },
  { path: 'series', component: SeriesListComponent },
  { path: 'series/:id', component: SeriesDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
