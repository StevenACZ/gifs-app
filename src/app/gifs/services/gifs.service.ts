import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);

    console.log(this._tagsHistory);
  }

  // GETTERS
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
}
