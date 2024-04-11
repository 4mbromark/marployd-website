import { MarploydContentRef } from './app.namespace';
import { Component, HostListener, OnInit } from '@angular/core';
import { MARPLOYD, MARPLOYD_LOGO } from './app.data';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marployd-website';

  marployd = MARPLOYD;
  marploydLogo = MARPLOYD_LOGO;

  public innerWidth = 0;
  public activeRef: MarploydContentRef | string;

  constructor(
    private readonly router: Router
  ) {
    this.router.events.subscribe((ne: NavigationEnd) => {
      let ref: MarploydContentRef = MarploydContentRef.INFORMATIONS;
      let url: string = ne.url;

      if (!url) {
        return;
      }

      while (url.startsWith('/')) {
        url = url.substring(1);
      }

      if (isNaN(+url)) {
      } else {
        ref = MarploydContentRef.PHOTO_DISCOVERY
      }

      console.log(ref);

      this.setActiveRef(ref);
    });
  }

  ngOnInit(): void {
  }

  public setActiveRef(ref: MarploydContentRef): void {
    this.activeRef = ref;
  }
}
