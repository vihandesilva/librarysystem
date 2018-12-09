import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { DVDService } from './dvd.service';
import {ReaderService} from "./reader.service";

@Injectable({
  providedIn: 'root'
})
export class DataContainerService {

  private static _books:BookService[] = new Array<BookService>(100);
  private static _dvds:DVDService[] = new Array<DVDService>(50);
  private static _readers: ReaderService[] = new Array<ReaderService>();

  constructor() { }


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
