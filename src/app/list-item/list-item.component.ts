import { Component, OnInit } from '@angular/core';
import { WestminsterLibraryManager } from '../WestminsterLibraryManager';
import { LibraryItemService } from '../library-item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private wmin: WestminsterLibraryManager) { }

  bookArr = this.wmin.books;
  dvdArr = this.wmin.dvds;

  ngOnInit() {
    
  }

  isNull(item: LibraryItemService){

    if(item.getISBN() == "undefined" || item.getISBN() == null){
        return true;
    }
    else{
      return false;
    }

  }

  

}
