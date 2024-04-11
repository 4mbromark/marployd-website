import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarploydDiscoveryData, MarploydDiscoveryPhoto } from 'src/app/app.namespace';

@Component({
  selector: 'app-photo-discovery',
  templateUrl: './photo-discovery.component.html',
  styleUrls: ['./photo-discovery.component.css']
})
export class PhotoDiscoveryComponent implements OnInit {

  public data: MarploydDiscoveryPhoto;

  constructor(
    private readonly http: HttpClient
  ) {
    const num: number = 1111111111;

    this.http.get('assets/data/discovery.json').subscribe((data: MarploydDiscoveryData) => {
      this.data = data.photos.list.find(i => i.timestamp === num);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
