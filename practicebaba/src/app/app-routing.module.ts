import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ResolveGuard } from './services/resolve.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent, resolve: { data: ResolveGuard } },
  { path: 'home', component: HomeComponent, resolve: { data: ResolveGuard } },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent,
    resolve: { data: ResolveGuard },
  },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: '**',
    component: PagenotfoundComponent,
    resolve: { data: ResolveGuard },
  }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
