import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionShowDirective } from './directives/description-show.directive';
import { CatIconPipe } from './pipe/cat-icon.pipe';

@NgModule({
  declarations: [DescriptionShowDirective, Date, CatIconPipe],
  imports: [
    CommonModule
  ],
  exports : [DescriptionShowDirective]
})
export class SharedModule { }
