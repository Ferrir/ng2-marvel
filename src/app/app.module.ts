import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LinksListComponent } from './shared/components/links-list/links-list.component';
import { ThumbnailComponent } from './shared/components/thumbnail/thumbnail.component';
import { AssociatedItemsComponent } from './shared/components/associated-items/associated-items.component';
import { ItemNameComponent } from './shared/components/item-name/item-name.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CreatorsListComponent } from './creators-list/creators-list.component';
import { CreatorDetailsComponent } from './creator-details/creator-details.component';
import { EntitiesListItemComponent } from './shared/components/entities-list-item/entities-list-item.component';
import { EntitiesListComponent } from './shared/components/entities-list/entities-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { SeriesService } from './shared/services/series.service';
import { CreatorsService } from './shared/services/creators.service';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LinksListComponent,
    ThumbnailComponent,
    AssociatedItemsComponent,
    ItemNameComponent,
    PaginationComponent,
    CreatorsListComponent,
    CreatorDetailsComponent,
    EntitiesListComponent,
    EntitiesListItemComponent,
    SeriesListComponent,
    SeriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    CreatorsService,
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
