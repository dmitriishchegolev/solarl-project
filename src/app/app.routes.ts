import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { registrGuard } from './guards/registr.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/main/main.component').then(c => c.MainComponent)
      },
      {
        path: 'lk',
        title: 'Личный кабинет',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/lk/lk.component').then(c => c.LkComponent)
      },
      {
        path: 'sign-in',
        title: 'Вход',
        // canActivate: [authGuard],
        // canMatch: [() => false],
        loadComponent: () => import('./pages/sign-in/sign-in.component').then(c => c.SignInComponent)
      },
      {
        path: 'sign-up',
        title: 'Регистрация',
        canDeactivate: [registrGuard],
        loadComponent: () => import('./pages/sign-up/sign-up.component').then(c => c.SignUpComponent)
      },
      {
        path: 'ads',
        title: 'Список',
        loadChildren: () => import('./pages/ads/ads.routes').then(r => r.adsRoutes)
      },
      {
        path: '**',
        loadComponent: () => import('./pages/lk/lk.component').then(c => c.LkComponent)
      },
    ]
  },
];
