import { Component } from '@angular/core';

// Services
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public currentTag: string = '';

  constructor(private gifsService: GifsService) {}

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  reSearchGifs(tag: string): void {
    this.currentTag = tag;

    this.gifsService.searchTag(tag, true);
  }
}
