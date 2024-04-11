export class MarploydContent {
  id: string;
  title: string;
  ref: MarploydContentRef;
}

export enum MarploydContentRef {
  INFORMATIONS = 'info',
  FAQ = 'faq',
  EVENT_HISTORY = 'event-history',
  PHOTO_DISCOVERY = "photo-discovery"
}

export class MarploydDiscoveryData {
  photos: MarploydDiscoveryPhotos
}

export class MarploydDiscoveryPhotos {
  list: MarploydDiscoveryPhoto[];
}

export class MarploydDiscoveryPhoto {
  timestamp: number;
  title: string;
  description: string;
  more: string;
  event: MarploydDiscoveryEvent;
  subject: MarploydDiscoverySubject;
  cosplayer: MarploydDiscoveryCosplayer;
  preview: string;
}

export class MarploydDiscoveryEvent {
  name: string;
  date: string;
}

export class MarploydDiscoverySubject {
  character: string;
  series: string;
}

export class MarploydDiscoveryCosplayer {
  name: string;
  contact: string;
}
