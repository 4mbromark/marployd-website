import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHistoryComponent } from './content/event-history/event-history.component';
import { InfoComponent } from './content/info/info.component';
import { PhotoSetComponent } from './content/photo-set/photo-set.component';
import { StoreYourPolaroidComponent } from './content/store-your-polaroid/store-your-polaroid.component';
import { PhotoInfoComponent } from './content/photo-info/photo-info.component';
import { FaqComponent } from './content/faq/faq.component';
import { RulesComponent } from './content/rules/rules.component';
import { PhotoDiscoveryComponent } from './content/photo-discovery/photo-discovery.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHistoryComponent,
    InfoComponent,
    PhotoSetComponent,
    StoreYourPolaroidComponent,
    PhotoInfoComponent,
    FaqComponent,
    RulesComponent,
    PhotoDiscoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
