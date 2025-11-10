import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noAuth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadComponent: () => import('./shared/components/layout/layout'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard')
            },
            {
                path: 'createProductView',
                loadComponent: () => import('./business/create-product-view/create-product-view')
            },
             {
                path: 'createUserView',
                loadComponent: () => import('./business/create-user-view/create-user-view')
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
        path: 'login',
        canActivate: [NoAuthGuard],
        loadComponent: () => import('./business/login/login'),
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
    
];
