import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { DVDService } from './dvd.service';
import {ReaderService} from "./reader.service";
import {LibraryManager} from "./library-manager";
import { LibraryItemService } from './library-item.service';
import {DataContainerService} from './data-container.service';

@Injectable({
  providedIn: 'root'
})
export class WestminsterLibraryManager implements LibraryManager{

  private _books:BookService[] = new Array<BookService>(100);
  private _dvds:DVDService[] = new Array<DVDService>(50);
  private _readers: ReaderService[] = new Array<ReaderService>();

  constructor() {
    this.books = DataContainerService.books;
    this.dvds = DataContainerService.dvds;
    this.readers = DataContainerService.readers;
  }


  get books(): BookService[] {
    return this._books;
  }

  set books(value: BookService[]) {
    this._books = value;
  }

  get dvds(): DVDService[] {
    return this._dvds;
  }

  set dvds(value: DVDService[]) {
    this._dvds = value;
  }

  get readers(): ReaderService[] {
    return this._readers;
  }

  set readers(value: ReaderService[]) {
    this._readers = value;
  }

  public addBook(type:string, name:string, isbn:string, publicationDate:string, author:string, publisher:string, pages:string) {
    let exists = this.isExists(isbn);

      if(exists == true){
        alert("Item with ISBN number already exists");
      }
      else{
        let book:BookService = new BookService();
        book.setType(type);
        book.setName(name);
        book.setISBN(isbn);
        book.setPublicationDate(publicationDate);
        book.setAuthor(author);
        book.setPublisher(publisher);
        book.setPages(pages);
        this._books.push(book);
        console.log(book);
        this.updateDataContainer()
      }
  }

  public addDVD(type:string, name:string, isbn:string, publicationDate:string, languages:string, subtitles:string, actors:string, producers:string){
    let exists = this.isExists(isbn);

    if(exists == true){
      alert("Item with ISBN number already exists");
    }
    else{
      let dvd:DVDService = new DVDService();
      dvd.setName(name);
      dvd.setISBN(isbn);
      dvd.setPublicationDate(publicationDate);
      dvd.setLanguages(languages);
      dvd.setSubtitles(subtitles);
      dvd.setActors(actors);
      dvd.setProducer(producers);
      this._dvds.push(dvd);
      this.updateDataContainer();
      console.log("DEBUG [wminManager]: "+ dvd);
    }
  }

  private isExists(isbn){
    let exists = false;

    this._books.forEach((book) => {

      if(book.getISBN() == isbn){
        exists = true;
      }
    })

    this._dvds.forEach((dvd) => {

      if(dvd.getISBN() == isbn){
        exists = true;
      }

      }
    )

    return exists;
  }

  public deleteItem(isbn){

    let found:boolean;
    let deleteBook:BookService;
    let deleteDVD: DVDService;

    this._books.forEach((book) =>{

          if(book.getISBN() == isbn){
            found = true;

            if(book.getIsBurrowed() == true){
              alert("This Book is currently burrowed by the reader: " + book.getBurrower()+ ". Cannot be deleted");
            }

            else{
              let index = this._books.indexOf(book);
              delete this.books[index];
              this.updateDataContainer();

              if(this.books[index] == null){
                alert("Book: " + book.getName() +". With ISBN number: " + book.getISBN() + " was deleted successfully");
              }
              else{
                alert("There was an error deleting the book. Please try again.");
              }
            }
          }
      }
    )
    

  }

  private updateDataContainer(){
    this.books = DataContainerService.books;
    this.dvds = DataContainerService.dvds;
    this.readers = DataContainerService.readers;
  }


}
