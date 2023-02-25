import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleabRoutingModule } from './moduleab-routing.module';
import { ModuleabComponent } from './moduleab.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModuleabComponent],
  imports: [CommonModule, ModuleabRoutingModule, SharedModule],
})
export class ModuleabModule {}
