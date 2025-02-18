import { Component, ElementRef, ViewChild } from '@angular/core';

// Services
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Busca gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') txtTagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.txtTagInput.nativeElement.value = '';
  }
}
