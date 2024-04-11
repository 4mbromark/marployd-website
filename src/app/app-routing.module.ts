import { FaqComponent } from './content/faq/faq.component';
import { InfoComponent } from './content/info/info.component';
import { MarploydContentRef } from './app.namespace';
import { EventHistoryComponent } from './content/event-history/event-history.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoDiscoveryComponent } from './content/photo-discovery/photo-discovery.component';

const routes: Routes = [
  { path: MarploydContentRef.INFORMATIONS, component: InfoComponent },
  { path: MarploydContentRef.FAQ, component: FaqComponent },
  { path: MarploydContentRef.EVENT_HISTORY, component: EventHistoryComponent },
  { path: MarploydContentRef.PHOTO_DISCOVERY, component: PhotoDiscoveryComponent },
  { path: '**', redirectTo: MarploydContentRef.INFORMATIONS }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
