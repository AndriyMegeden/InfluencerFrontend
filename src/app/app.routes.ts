import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'auth-step',
        loadChildren: () => import('./pages/auth-step/auth-step.module').then(m => m.AuthStepModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
    }
];
