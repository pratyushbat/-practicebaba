import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleabComponent } from './moduleab.component';

const routes: Routes = [{ path: '', component: ModuleabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleabRoutingModule { }
