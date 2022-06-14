import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'users/list',
    loadChildren: () => import('./users/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./courses/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'users/edit/:userId',
    loadChildren: () => import('./users/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'users/create',
    loadChildren: () => import('./users/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./courses/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'classes/list',
    loadChildren: () => import('./classes/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'classes/create',
    loadChildren: () => import('./classses/create/create.module').then( m => m.CreatePageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
