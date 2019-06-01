import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { Users } from './models/users.model';
@Component({
    selector:'app-users',
    templateUrl:'./users.component.html'
})
export class UsersComponent implements OnInit{

    allUsers : Users[];
    page = 1;
    pageSize = 5;
    collectionSize = 0;

    constructor(private router:Router){
        
    }
    ngOnInit(){
      this.router.navigate(['users/view/']);
    }

   

}