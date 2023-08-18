import { FaqComponent } from './content/faq/faq.component';
import { PhotoInfoComponent } from './content/photo-info/photo-info.component';
import { StoreYourPolaroidComponent } from './content/store-your-polaroid/store-your-polaroid.component';
import { PhotoSetComponent } from './content/photo-set/photo-set.component';
import { InfoComponent } from './content/info/info.component';
import { MarploydContentRef } from './app.namespace';
import { EventHistoryComponent } from './content/event-history/event-history.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './content/rules/rules.component';

const routes: Routes = [
  { path: MarploydContentRef.INFORMATIONS, component: InfoComponent },
  // { path: MarploydContentRef.PHOTO_SET, component: PhotoSetComponent },
  { path: MarploydContentRef.FAQ, component: FaqComponent },
  { path: MarploydContentRef.RULES, component: RulesComponent },
  { path: MarploydContentRef.EVENT_HISTORY, component: EventHistoryComponent },
  // { path: MarploydContentRef.PHOTOS_INFO, component: PhotoInfoComponent },
  // { path: MarploydContentRef.STORE_YOUR_POLAROID, component: StoreYourPolaroidComponent },
  { path: '**', redirectTo: MarploydContentRef.INFORMATIONS }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
