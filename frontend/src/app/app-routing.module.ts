import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'users/edit/:userId',
    loadChildren: () =>
      import('./users/edit/edit.module').then((m) => m.EditPageModule),
  },
  {
    path: 'users/create',
    loadChildren: () =>
      import('./users/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'courses/create',
    loadChildren: () =>
      import('./courses/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'students/create',
    loadChildren: () =>
      import('./students/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'class',
    loadChildren: () =>
      import('./class/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'class/create',
    loadChildren: () =>
      import('./class/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'class/edit/:classId',
    loadChildren: () =>
      import('./class/edit/edit.module').then((m) => m.EditPageModule),
  },
  {
    path: 'courses/edit/:courseId',
    loadChildren: () => import('./courses/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'students/edit/:studentId',
    loadChildren: () => import('./students/edit/edit.module').then( m => m.EditPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
