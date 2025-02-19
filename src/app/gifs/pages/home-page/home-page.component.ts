import { Component } from '@angular/core';

// Services
import { GifsService } from '../../services/gifs.service';

// Interface
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
