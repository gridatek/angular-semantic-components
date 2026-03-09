import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('./auth/sign-in').then((m) => m.SignIn),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./auth/sign-up').then((m) => m.SignUp),
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings').then((m) => m.Settings),
      },
      {
        path: 'users',
        loadComponent: () => import('./users/users').then((m) => m.Users),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications').then(
            (m) => m.Notifications,
          ),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('./components/components').then((m) => m.Components),
      },
    ],
  },
];
