import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent],
  exports: [HomePageComponent],
  imports: [CommonModule],
})
export class GifsModule {}
