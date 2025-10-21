import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard')
            },
            {
                path: 'cart',
                loadComponent: () => import('./business/cart/cart')
            },
            {
                path: 'orders',
                loadComponent: () => import('./business/orders/orders')
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile')
            },
            {
                path: 'users',
                loadComponent: () => import('./business/users/users')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
