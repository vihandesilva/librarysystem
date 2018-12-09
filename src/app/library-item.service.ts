import { Injectable } from '@angular/core';
import { DatetimeService } from './datetime.service';


export class LibraryItemService {

  private name;
  private isbn;
  private publicationDate;
  private type;
  private isBurrowed;
  private burrower;
  private burrowedDateTime;
  private returnedDateTime;

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

  public setPublicationDate(value) {
    this.publicationDate = value.toString();
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
