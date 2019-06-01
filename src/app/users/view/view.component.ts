import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users.model';
@Component({
    selector:'app-view',
    templateUrl:'./view.component.html'
})
export class ViewComponent implements OnInit{
   
    allUsers : Users[];
    page = 1;
    pageSize = 5;
    collectionSize = 0;

    constructor(private userService:UsersService,
                private router:Router){
        
    }
    ngOnInit(){
    this.allUsers = [];

    this.userService.getUsers()
      .subscribe((users: Users[])=> {
        this.allUsers = users;
        this.collectionSize = this.allUsers.length;
      });
    }

    get users(): Users[] {
        return this.allUsers
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    onDelete(id: number) {
        this.userService.deleteUsers(id).subscribe(() => {
          // this.allCategories.splice(this.allCategories.indexOf(category), 1);
          this.allUsers = this.allUsers.filter(c => c.id !== id);
          this.collectionSize = this.allUsers.length;
        });
      }
    
    onUpdate(id: number){
      this.router.navigate(['users/edit/', id]);
    }  

    onCreate(){
      this.router.navigate(['users/register/']);
    }
}