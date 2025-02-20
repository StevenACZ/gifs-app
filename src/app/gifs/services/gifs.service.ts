import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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

  private organizeHistory(tag: string, reSearch: boolean = false) {
    tag = tag.trim().toLowerCase();

    if (reSearch !== true) {
      this._tagsHistory.unshift(tag);
    }

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTag(tag: string, reSearch: boolean = false): void {
    if (tag.length === 0) return;

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<GiphyResponse>(`${SERVICE_URL}/search`, { params })
      .pipe(
        tap((res) => {
          this.gifList = res.data;
          this.organizeHistory(tag, reSearch);
        })
      )
      .subscribe();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
}
