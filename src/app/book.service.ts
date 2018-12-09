import { Injectable } from '@angular/core';
import { LibraryItemService } from './library-item.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends LibraryItemService {

  private author;
  private publisher;
  private pages;

  public setAuthor(author){
    this.author = author;
  }

  public getAuthor(){
    return this.author;
  }

  public setPublisher(publisher){
    this.publisher = publisher;
  }

  public getPublisher(){
    return this.publisher;
  }

  public setPages(pages){
    this.pages = pages;
  }

  public getPages(){
    return this.pages;
  }
}
