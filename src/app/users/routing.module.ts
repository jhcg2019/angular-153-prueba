import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './register/edit.component';
import { ViewComponent } from './view/view.component';

const routes:Routes=[
{
    path:'',
    component:UsersComponent,
    children:[
        {
            path:'view',
            component:ViewComponent
        },
        {
            path:'register',
            component:RegisterComponent
        },
        {
            path:'edit/:id',
            component:EditComponent
        }
    ]
}


]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}