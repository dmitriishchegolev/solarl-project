import { Routes } from '@angular/router';
import { adsCardResolver } from '../../resolvers/ads-card.resolver';

export const adsRoutes: Routes = [
  {
    path: '',
    // canActivateChild: [authGuard],
    loadComponent: () => import('./ads-list/ads-list.component').then(c => c.AdsListComponent),
    children: [
      {
        path: 'new',
        loadComponent: () => import('./ads-list/ads-list-new/ads-list-new.component').then(c => c.AdsListNewComponent)
      },
      {
        path: 'popular',
        loadComponent: () => import('./ads-list/ads-list-popular/ads-list-popular.component').then(c => c.AdsListPopularComponent)
      }
    ]
  },
  {
    path: 'create',
    title: 'Карточка',
    data: {
      description: 'Какаято карточка'
    },
    resolve: {
      save: () => {
        return () => 'Создание'
      }
    },
    loadComponent: () => import('./ads-edit-card/ads-edit-card.component').then(c => c.AdsEditCardComponent)
  },
  {
    path: ':id',
    title: 'Карточка',
    data: {
      description: 'Какаято карточка'
    },
    resolve: {
      breadCrumbsLabel: adsCardResolver
    },
    loadComponent: () => import('./ads-card/ads-card.component').then(c => c.AdsCardComponent)
  },
  {
    path: 'edit/:id',
    title: 'Карточка',
    data: {
      description: 'Какаято карточка'
    },
    resolve: {
      save: () => {
        return () => 'Редактирование'
      }
    },
    loadComponent: () => import('./ads-edit-card/ads-edit-card.component').then(c => c.AdsEditCardComponent)
  },
]