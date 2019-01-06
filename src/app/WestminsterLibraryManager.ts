import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { DVDService } from './dvd.service';
import {ReaderService} from "./reader.service";
import {LibraryManager} from "./library-manager";
import { LibraryItemService } from './library-item.service';
import {DataContainerService} from './data-container.service';
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})

// This is the main logic class
export class WestminsterLibraryManager implements LibraryManager{

  private _books:BookService[] = new Array<BookService>(100);
  private _dvds:DVDService[] = new Array<DVDService>(50);
  private _readers: ReaderService[] = new Array<ReaderService>();
  private static initialized:boolean = false;

  constructor() {
    // Book and DVD arrays are stored in static class DataContainer.
    // Data for this class is taken from DataContainer Service.
    this.books = DataContainerService.books;
    this.dvds = DataContainerService.dvds;
    this.readers = DataContainerService.readers;

    if(WestminsterLibraryManager.initialized == false){
      DataContainerService.initialize();
      WestminsterLibraryManager.initialized = true;
    }

  }

//Getters and Setters
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

  // Methods which contain library operations

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
      console.log(dvd);
    }
  }

  //Checks whether the library item with the given ISBN exists in Book and DVD arrays.
  private isExists(isbn:string){
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

  //Gets details about the library item with the given ISBN. returns Book or DVD object
  public retrieveItem(isbn:string){

   var item:LibraryItemService = new LibraryItemService();

    if(this.isAvailable(isbn) == true){

      this._books.forEach((book) => {

        if(book.getISBN() == isbn){

          if(book.getIsBurrowed()) {
            item.setISBN(book.getISBN());
            item.setName(book.getName());
            item.setType(book.getType());
            item.setPublicationDate(book.getPublicationDate());
          }
        }
      })

      this._dvds.forEach((dvd) => {

            if(dvd.getISBN() == isbn){
              item.setISBN(dvd.getISBN());
              item.setName(dvd.getName());
              item.setType(dvd.getType());
              item.setPublicationDate(dvd.getPublicationDate());
            }

          }
      )
    }
     return item;
  }

  // Checks whether isBurrowed is set to true in libary item
  public isAvailable(isbn:string){
    var available = false;

    if(this.isExists(isbn) == true){

      this._books.forEach((book) => {

        if(book.getISBN() == isbn){

          if(book.getIsBurrowed() == false) {
            available = true;
          }
        }
      })

      this._dvds.forEach((dvd) => {

            if(dvd.getISBN() == isbn){
              if(dvd.getIsBurrowed() == false) {
                available = true;
              }
            }

          }
      )
      return available;
    }
  }

  // Removes item with the given ISBN from Book or DVD array.
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

  // Sets isBurrowed of library item to false and adds burrower name and burrow date
  public burrowItem(isbn:string,burrower:string, burrowDate:string){

    var book: BookService =new BookService();
    var dvd: DVDService = new DVDService();

    if(this.isAvailable(isbn) == true){
      this._books.forEach((book) => {

        if(book.getISBN() == isbn){

          if(book.getIsBurrowed()) {
              book.setBurrower(burrower);
              book.setBurrowedDate(burrowDate);
              book.setIsBurrowed(true);
              alert("Item burrowed. Burrower name: " + burrower+ ". ");
          }
        }
      })

      this._dvds.forEach((dvd) => {

            if(dvd.getISBN() == isbn){
              dvd.setBurrower(burrower);
              dvd.setBurrowedDate(burrowDate);
              dvd.setIsBurrowed(true);
            }

          }
      )
    }
  }


  // Checks whether object is null to avoid exceptions
  public isNull(item:LibraryItemService){
      if(isNullOrUndefined(item)){
        console.log("ITEM: " + item);
        return true;
      }
      else{
        return false;
      }
  }

  private updateDataContainer(){
    this.books = DataContainerService.books;
    this.dvds = DataContainerService.dvds;
    this.readers = DataContainerService.readers;
  }


}
