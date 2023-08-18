import { Component } from "@angular/core";
import { MarploydContent, MarploydContentRef } from "./app.namespace";

export const MARPLOYD: MarploydContent[] = [
  {
    id: MarploydContentRef.INFORMATIONS,
    title: 'Io',
    ref: MarploydContentRef.INFORMATIONS
  },
  /*{
    id: MarploydContentRef.PHOTO_SET,
    title: 'Scatta con me',
    ref: MarploydContentRef.PHOTO_SET
  },*/
  /*{
    id: 'portfolio',
    title: 'Portfolio',
    ref: MarploydContentRef.EVENT_HISTORY
  },*/
  /*{
    id: 'gear',
    title: 'Attrezzatura',
    ref: MarploydContentRef.EVENT_HISTORY
  },*/
  {
    id: MarploydContentRef.FAQ,
    title: 'FAQ',
    ref: MarploydContentRef.FAQ
  },

  {
    id: MarploydContentRef.RULES,
    title: 'Rules',
    ref: MarploydContentRef.RULES
  },
  {
    id: MarploydContentRef.EVENT_HISTORY,
    title: 'Mappa eventi',
    ref: MarploydContentRef.EVENT_HISTORY
  },
  /*{
    id: MarploydContentRef.PHOTOS_INFO,
    title: 'Hai scattato con me?',
    ref: MarploydContentRef.PHOTOS_INFO
  },*/
  /*{
    id: MarploydContentRef.STORE_YOUR_POLAROID,
    title: 'Conserva la tua Polaroid',
    ref: MarploydContentRef.STORE_YOUR_POLAROID
  },*/
  /*{
    id: 'polaroid-info',
    title: 'Mondo Polaroid',
    ref: MarploydContentRef.EVENT_HISTORY
  },*/
  /*{
    id: 'support',
    title: 'Supportami',
    ref: MarploydContentRef.EVENT_HISTORY
  }*/
];

export const MARPLOYD_LOGO: string = 'assets/logo/logo.png';
