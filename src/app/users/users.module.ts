import { NgModule } from "@angular/core";
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { RoutingModule } from './routing.module';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './services/users.service';
import { EditComponent } from './register/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewComponent } from './view/view.component';
import { UniqueDirective } from './directives/unique.directive';
@NgModule({
declarations:[UsersComponent,RegisterComponent,EditComponent,ViewComponent, UniqueDirective],
exports:[UsersComponent,RegisterComponent,EditComponent,ViewComponent],
imports: [CommonModule, RoutingModule,NgbModule, FormsModule, ReactiveFormsModule ],
providers:[UsersService]
})
export class UsersModule{}