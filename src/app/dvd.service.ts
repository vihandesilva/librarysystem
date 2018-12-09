import { Injectable } from '@angular/core';
import { LibraryItemService } from './library-item.service';

@Injectable({
  providedIn: 'root'
})
export class DVDService extends LibraryItemService {

  private languages;
  private subtitles;
  private actors;
  private producer;

  constructor() { 
    super();
  }

  public getLanguages(){
    return this.languages;
  }

  public setLanguages(languages){
    this.languages = languages;
  }

  public getSubtitle(){
    return this.subtitles
  }

  public setSubtitles(subtitles){
    this.subtitles = subtitles;
  }

  public getActors(){
    return this.actors;
  }

  public setActors(actors){
    this.actors = actors;
  }

  public getProducer(){
    return this.producer;
  }

  public setProducer(producer){
    this.producer = producer
  }
}
