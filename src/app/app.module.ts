import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FiltersSelectionComponent } from './filters-selection/filters-selection.component';
import { FilterSectionsComponent } from './filter-section/filter-sections.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListHolderComponent } from './character-list-holder/character-list-holder.component';
import { FromNowPipe } from './pipes/dateFromNow.pipe';
import { CharSearchSortComponent } from './char-search-sort/char-search-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersSelectionComponent,
    FilterSectionsComponent,
    CharacterCardComponent,
    CharacterListHolderComponent,
    FromNowPipe,
    CharSearchSortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
