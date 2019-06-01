import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[

    {
    path:'users',
    loadChildren:'./users/users.module#UsersModule'
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'users',
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{}