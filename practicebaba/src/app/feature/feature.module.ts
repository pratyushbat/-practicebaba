import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnhancedComponent } from '../enhanced/enhanced.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EnhancedComponent],
  exports: [EnhancedComponent],
})
export class FeatureModule {}
