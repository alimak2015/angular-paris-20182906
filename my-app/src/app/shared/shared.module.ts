import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './containers/shared/shared.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent],
  exports : [NavComponent]
})
export class SharedModule { }
