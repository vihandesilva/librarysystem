import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  private _id;
  private _name;
  private _mobileNumber;

  constructor() { }


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get mobileNumber() {
    return this._mobileNumber;
  }

  set mobileNumber(value) {
    this._mobileNumber = value;
  }
}
