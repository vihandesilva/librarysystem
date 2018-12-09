import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-burrow-item',
  templateUrl: './burrow-item.component.html',
  styleUrls: ['./burrow-item.component.css']
})
export class BurrowItemComponent implements OnInit {

  private isbn:string;
  private regexp = "[^0-9]";
  constructor() { }
  
  ngOnInit() {
  }

  checkISBN(){

    if(this.isbn.length >13 || this.isbn.length<13 ){
        alert("The ISBN Number that you have entered is incorrect. Please Re-enter");
    }
    else if(this.isbn.match(this.regexp)){
        alert("The ISBN Number that you have entered is incorrect. Please Re-enter");
    }

  }

}
