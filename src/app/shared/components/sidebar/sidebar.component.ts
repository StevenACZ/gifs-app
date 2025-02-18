import { Component } from '@angular/core';

// Services
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }
}
