import { Component, ElementRef, ViewChild } from '@angular/core';

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

  constructor() {}

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;

    console.log(newTag);
  }
}
