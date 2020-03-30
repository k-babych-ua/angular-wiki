import { Injectable } from '@angular/core';
import { ITag } from '../models/entities/ITag';

@Injectable({
  providedIn: 'root'
})
export class TagsMockService {
  private _data: ITag[];

  constructor() {
    this._data = [
      {
        id: 1,
        title: "History"
      },
      {
        id: 2,
        title: "Space"
      },
      {
        id: 3,
        title: "Country"
      },
      {
        id: 4,
        title: "People"
      },
      {
        id: 5,
        title: "Industry"
      }
    ];
  }

  public produce(): ITag[] {
    return this._data;
  }
}
