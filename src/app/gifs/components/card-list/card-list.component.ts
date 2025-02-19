import { Component, Input } from '@angular/core';

// Interfaces
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];

  constructor() {}
}
