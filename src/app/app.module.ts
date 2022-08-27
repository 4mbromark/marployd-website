import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAccordionModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHistoryComponent } from './content/event-history/event-history.component';
import { InfoComponent } from './content/info/info.component';
import { PhotoSetComponent } from './content/photo-set/photo-set.component';
import { StoreYourPolaroidComponent } from './content/store-your-polaroid/store-your-polaroid.component';
import { PhotoInfoComponent } from './content/photo-info/photo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHistoryComponent,
    InfoComponent,
    PhotoSetComponent,
    StoreYourPolaroidComponent,
    PhotoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
