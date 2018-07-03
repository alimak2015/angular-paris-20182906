import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { StateDirective } from '../shared/directives/state.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListItemsComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
