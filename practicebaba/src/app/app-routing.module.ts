import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
