import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ResolveGuard } from './services/resolve.guard';
import { HomeComponent } from './pages/home/home.component';
import { MessageComponent } from './pages/message/message.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutEditComponent } from './pages/about/about-edit/about-edit.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './guards/role.guard';
import { NotcompleteGuard } from './guards/notcomplete.guard';
import { ModuleGuard } from './guards/module.guard';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    resolve: { data: ResolveGuard },
    canDeactivate: [NotcompleteGuard],
  },
  { path: 'home', component: HomeComponent, resolve: { data: ResolveGuard } },
  {
    path: 'about',
    component: AboutComponent,
    resolve: { data: ResolveGuard },
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: AboutEditComponent }],
  },
  {
    path: 'message',
    component: MessageComponent,
    resolve: { data: ResolveGuard },
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent,
    resolve: { data: ResolveGuard },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    resolve: { data: ResolveGuard },
  },

  {
    path: 'access-denied',
    component: AccessdeniedComponent,
    resolve: { data: ResolveGuard },
  },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  {
    path: 'a',
    canLoad: [ModuleGuard],
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  {
    path: 'ab',
    canLoad: [ModuleGuard],
    loadChildren: () =>
      import('./moduleab/moduleab.module').then((m) => m.ModuleabModule),
  }, // redirect to `first-component`
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
