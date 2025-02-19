import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// Interfaces
import { Gif, GiphyResponse } from '../interfaces/gifs';

// Keys
const GIPHY_API_KEY = 'aoC9XZRcgz9OMucMEF0Zajmli5sir3yZ';
const SERVICE_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {}

  // Functions
  private organizeHistory(tag: string) {
    tag = tag.trim().toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((olgTag) => olgTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<GiphyResponse>(`${SERVICE_URL}/trending`, { params })
      .subscribe((res) => {
        this.gifList = res.data;

        console.log(this.gifList);
      });

    this.organizeHistory(tag);
  }

  // GETTERS
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
}
