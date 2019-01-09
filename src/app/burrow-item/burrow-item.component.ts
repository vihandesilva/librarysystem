import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { BookService } from '../book.service';
import {WestminsterLibraryManager} from "../WestminsterLibraryManager";
import {DVDService} from "../dvd.service";
import {LibraryItemService} from "../library-item.service";

@Component({
  selector: 'app-burrow-item',
  templateUrl: './burrow-item.component.html',
  styleUrls: ['./burrow-item.component.css']
})
export class BurrowItemComponent implements OnInit,AfterViewInit {

  isbn:string;
  private regexp = "[^0-9]";
  private wmin: WestminsterLibraryManager = new WestminsterLibraryManager();
  private bookArr = this.wmin.books;
  private dvdArr = this.wmin.dvds;
  private book: BookService = new BookService();
  private dvd: DVDService = new DVDService();
  item: LibraryItemService = new LibraryItemService();
  private isBurrowed:boolean;
  burrower:string;

  constructor(private changedetect:ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit(){
        this.wmin = new WestminsterLibraryManager();
        this.bookArr = this.wmin.books;
        this.dvdArr = this.wmin.dvds;

        this.changedetect.detectChanges();

    }
//Validating ISBN
  private checkISBN(){
    if(this.isbn.length >13 || this.isbn.length<13 ){
        alert("The ISBN Number that you have entered is incorrect. Please Re-enter");
       return false;
    }
    else if(this.isbn.match(this.regexp)){
        alert("The ISBN Number that you have entered is incorrect. Please Re-enter");
        return false;
    }
    else {
        return true;
    }
  }
  //Returns true if item is available, false if not. Assigns values to DVD/BOOK object if ISBN exists
  private isAvailable(isbn:string){
      var available =this.wmin.isAvailable(isbn);

      if(available == true){
          this.item = this.wmin.retrieveItem(isbn);
          console.log(this.item);
      }
      return available
  }

  private burrowItem(){

    if(this.isAvailable(this.isbn) == true){
      var date = new Date();
      this.wmin.burrowItem(this.item.getISBN(), this.burrower,date.toDateString());
    }
  }




}
