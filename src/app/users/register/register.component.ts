import { OnInit, Component } from '@angular/core';
import { Users } from '../models/users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent implements OnInit{
    users:Users;
    loaded: boolean = false;
    editForm: FormGroup;
    titFormul:string;

    constructor( 
        private location:Location,
        private userService:UsersService
        ){

        }
    ngOnInit(){
        this.users = {
            name: "",
            lastname: "",
            email:"",
            sexo:""
        };
        this.loaded=true;
        this.createForm();
        console.log(this.editForm);
        this.titFormul="Crear Usuario Nuevo"
    }

    
    createForm() {
        this.editForm = new FormGroup({
            name: new FormControl(
                this.users.name, [Validators.required]
            ),
            lastname: new FormControl(
                this.users.lastname,
                [Validators.required]
            ),
            email: new FormControl(
                this.users.email,
                [Validators.required]
            ),
            phone: new FormControl(
                this.users.phone,
                [Validators.required]
            ),
            sexo: new FormControl(
                this.users.sexo,
                [Validators.required]
            )
        })
    }
    onCancel(){
        this.location.back();
    }
    onSave(){
        if (this.editForm.invalid) {
            return false;
        }
        const {name, lastname, email, phone, sexo } = this.editForm.value;
        const users : Users = {
            name, lastname, email, phone ,sexo  
         };

         this.userService.createUsers(users)
         .subscribe(() => {
             this.onCancel();
         });
    }
}