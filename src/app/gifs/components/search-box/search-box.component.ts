import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Busca gifs" />
  `,
})
export class SearchBoxComponent {
  constructor() {}
}
