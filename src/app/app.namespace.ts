export enum MarploydType {
  ACCORDION,
  NAVBAR
}

export class MarploydContent {
  id: string;
  title: string;
  ref: MarploydContentRef;
}

export enum MarploydContentRef {
  INFORMATIONS = 'info',
  PHOTO_SET = 'photo-set',
  EVENT_HISTORY = 'event-history',
  PHOTOS_INFO = 'photos-info',
  STORE_YOUR_POLAROID = 'store-your-polaroid',
  FAQ = 'faq',
  RULES = 'rules'
}
