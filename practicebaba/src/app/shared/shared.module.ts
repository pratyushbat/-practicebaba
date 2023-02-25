import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerCompComponent } from '../spinner-comp/spinner-comp.component';

@NgModule({
  declarations: [SpinnerCompComponent],
  imports: [CommonModule],
  exports: [SpinnerCompComponent],
})
export class SharedModule {}
