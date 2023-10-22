import { Translation } from './i18';
export enum Translations{
 subtitle= "subtitle"
}


export type Translation = `${Translations}`;

export type AllLanguages={
  en: Translation
}


export const getLabelByLang = 
