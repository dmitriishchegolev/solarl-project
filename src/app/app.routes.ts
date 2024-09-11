import { Routes } from '@angular/router';

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
        loadComponent: () => import('./pages/lk/lk.component').then(c => c.LkComponent)
      },
      {
        path: 'ads',
        title: 'Список',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/ads/ads-list/ads-list.component').then(c => c.AdsListComponent)
          },
          {
            path: ':id',
            title: 'Карточка',
            data: {
              description: 'Какаято карточка'
            },
            loadComponent: () => import('./pages/ads/ads-card/ads-card.component').then(c => c.AdsCardComponent)
          }
        ]
      }
    ]
  },
];
