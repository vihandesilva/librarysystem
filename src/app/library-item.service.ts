import { Injectable } from '@angular/core';
import { DatetimeService } from './datetime.service';


export class LibraryItemService {

  private name:string;
  private isbn:string;
  private publicationDate:string;
  private type:string;
  private isBurrowed:boolean;
  private burrower:string;
  private burrowedDateTime:string;
  private returnedDateTime:string;

  public getName(){
    return this.name;
  }

  public setName(name) {
    this.name = name;
  }

  public getISBN(){
    return this.isbn;
  }

  public setISBN(isbn){
    this.isbn = isbn
  }

  public getType(){
    return this.type;
  }

  public setType(type){
    this.type = type;
  }

  public getIsBurrowed() {
    return this.isBurrowed;
  }

  public setIsBurrowed(burrowed: boolean){
    this.isBurrowed = burrowed;
  }

  public getBurrower(){
    return this.burrower;
  }

  public setBurrower(burrower:string){
    this.burrower = burrower;
  }

  public getPublicationDate() {
    return this.publicationDate;
  }

  public setPublicationDate(value: string) {
    this.publicationDate = value;
  }

  public getBurrowedDate(){
    return this.burrowedDateTime
  }

  public setBurrowedDate(burrowedDate:string){
    this.burrowedDateTime = burrowedDate;
  }

  public getReturnedDate(){
    return this.returnedDateTime
  }

  public setReturnedDate(returnedDate: string){
    this.returnedDateTime = returnedDate
  }

}
