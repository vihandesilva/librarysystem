import { Component, OnInit } from '@angular/core';
import { WestminsterLibraryManager } from '../WestminsterLibraryManager';
import { LibraryItemService } from '../library-item.service';
import {isNull} from "util";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  private wmin: WestminsterLibraryManager

  constructor() { }


  bookArr;
  dvdArr;

  ngOnInit() {
    this.wmin = new WestminsterLibraryManager();
    this.bookArr = this.wmin.books;
    this.dvdArr = this.wmin.dvds;
  }

  isNull(item: LibraryItemService){
    this.wmin.isNull(item);

  }

  

}
