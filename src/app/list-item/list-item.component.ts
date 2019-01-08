import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { WestminsterLibraryManager } from '../WestminsterLibraryManager';
import { LibraryItemService } from '../library-item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit,AfterViewInit {
  private wmin: WestminsterLibraryManager

  constructor(private chaangeditect:ChangeDetectorRef) { }


  bookArr=[];
  dvdArr=[];

  ngOnInit() {
  
  }

  ngAfterViewInit(){
    this.wmin = new WestminsterLibraryManager();
    this.bookArr = this.wmin.books;
    this.dvdArr = this.wmin.dvds;

    this.chaangeditect.detectChanges();



  }

  isNull(item: LibraryItemService){
    this.wmin.isNull(item);

  }

  

}
