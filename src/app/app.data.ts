import { MarploydContent, MarploydContentRef } from "./app.namespace";

export const MARPLOYD: MarploydContent[] = [
  {
    id: MarploydContentRef.INFORMATIONS,
    title: 'Io',
    ref: MarploydContentRef.INFORMATIONS
  },
  {
    id: MarploydContentRef.FAQ,
    title: 'FAQ',
    ref: MarploydContentRef.FAQ
  },
  {
    id: MarploydContentRef.EVENT_HISTORY,
    title: 'Mappa eventi',
    ref: MarploydContentRef.EVENT_HISTORY
  },
  {
    id: MarploydContentRef.PHOTO_DISCOVERY,
    title: 'Discovery',
    ref: MarploydContentRef.PHOTO_DISCOVERY
  }
];

export const MARPLOYD_LOGO: string = 'assets/logo/logo.png';
