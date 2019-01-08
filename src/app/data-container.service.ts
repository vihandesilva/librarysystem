import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { DVDService } from './dvd.service';
import {ReaderService} from "./reader.service";

@Injectable({
  providedIn: 'root'
})
export class DataContainerService {

  private static _books:BookService[] = new Array<BookService>();
  private static _dvds:DVDService[] = new Array<DVDService>();
  private static _readers: ReaderService[] = new Array<ReaderService>();

  constructor() {
  }


  static initialize(){
    this._books.forEach((book) =>{

          book = new BookService();

    })

    this._dvds.forEach((dvd) =>{

        dvd = new DVDService();

    })

    this._readers.forEach((reader) =>{
      if(!(reader instanceof ReaderService))
          reader = new ReaderService();
    })
  }

  static get books(): BookService[] {
    return this._books;
  }

  static set books(value: BookService[]) {
    this._books = value;
  }

  static get dvds(): DVDService[] {
    return this._dvds;
  }

  static set dvds(value: DVDService[]) {
    this._dvds = value;
  }

  static get readers(): ReaderService[] {
    return this._readers;
  }

  static set readers(value: ReaderService[]) {
    this._readers = value;
  }
}
