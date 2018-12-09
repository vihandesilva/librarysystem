import { Injectable } from '@angular/core';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  
  private _year : number;
  private _month : number;
  private _day : number;
  private diffDays;
  private date:String;
  

  constructor() { }

  public calculateDiff(burrowDate, returnDate){

        let date1 = new Date(burrowDate);
        let date2 = new Date(returnDate);
        let diff = Math.abs(date1.getTime() - date2.getTime());
        this.diffDays = Math.ceil(diff / (1000 * 3600 * 24));

        return this.diffDays;
  }

  public validate(burrowDate, returnDate){
    let date1 = new Date(burrowDate);
    let date2 = new Date(returnDate);

    if(date1.getTime() > date2.getTime()){
      return false;
    }

    else{
      return true;
    }
  }

  public getDate(){
    return this.date;
  }

  public setDate(date){
    this.date = date.toString();
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }
}
