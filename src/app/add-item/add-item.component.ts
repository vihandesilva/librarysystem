import { Component, OnInit } from '@angular/core';
import { WestminsterLibraryManager } from '../WestminsterLibraryManager';
import { LibraryItemService } from '../library-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  private name;
  private isbn;
  private publicationDate;
  private name2;
  private isbn2;
  private publicationDate2;
  private type;
  private languages;
  private subtitles;
  private actors;
  private producer;
  private author;
  private publisher;
  private pages;
  private regexp = "[^0-9]";

  constructor(private wmin: WestminsterLibraryManager) { }


  ngOnInit() {
  }




  public sendInput(type:string){
    if(this.checkISBN() == true){
      if(type.toString().toLowerCase() == "book"){
          this.wmin.addBook(type, this.name, this.isbn, this.publicationDate, this.author, this.publisher, this.pages)
      }

      if(type.toString().toLowerCase()){
        this.wmin.addDVD(type, this.name2, this.isbn2, this.publicationDate2, this.languages, this.subtitles, this.actors, this.producer)
      }
    }
  }

  private checkISBN(){


        if(this.isbn.length >13 || this.isbn.length<13 ){
          alert("The ISBN Number that you have entered is incorrect. Please Re-enter");
          return false;
        }
        else if(this.isbn.match(this.regexp)){
          alert("The ISBN Number that you have entered is incorrect. Please Re-enter");
          return false;
        }
        else{
          return true;
        }

  }

}
