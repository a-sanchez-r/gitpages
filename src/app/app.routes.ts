import { Routes } from '@angular/router';
import { ImcPage } from '@imc/pages/page-imc/page-imc';
import { ModulesPage } from '@modules/page/modules-page/modules-page';
import { MainLayout } from '@shared/layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/modules',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        component:MainLayout,
        children: [
            {
                path: 'modules',
                component:ModulesPage
            },
            {
                path: 'modules/imc',
                component:ImcPage
            }
        ]
    }
];
