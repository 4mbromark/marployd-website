import { MarploydContentRef, MarploydType } from './app.namespace';
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
  marploydType = MarploydType;

  public type: MarploydType = MarploydType.NAVBAR;
  public innerWidth = 0;
  public activeRef: MarploydContentRef | string;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    // this.type = window.innerWidth > 800 ? MarploydType.NAVBAR : MarploydType.ACCORDION;
  }
  constructor(
    private readonly router: Router
  ) {
    this.router.events.subscribe((ne: NavigationEnd) => {
      const url = ne.url;
      this.activeRef = url ? url.replace('/', '') : MarploydContentRef.INFORMATIONS;
    });
  }

  ngOnInit(): void {
    this.onResize();
  }

  public setActiveRef(ref: MarploydContentRef): void {
    this.activeRef = ref;
  }
}
