import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector:'app-register',
    templateUrl:'./edit.component.html'
})
export class EditComponent implements OnInit{
    users:Users;
    loaded: boolean = false;
    editForm: FormGroup;
    titFormul:string;
    formRegis :boolean=false;
    directiva:string="";
    constructor( private route:ActivatedRoute,private location:Location,private userService:UsersService
       ){

    }
    ngOnInit(){
        const id = +this.route.snapshot.paramMap.get('id');

        this.userService.getUsersById(id)
        .subscribe((users:Users)=> {
            this.users = users;
            this.createForm();
            this.loaded = true;
        });
        this.titFormul="Actualizar Información de Usuario";
        this.formRegis=false;
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
                this.users.phone.toString(),
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
        const {id} = this.users;
        const users : Users = {
                id, name, lastname, email, phone ,sexo  
        };

        this.userService.updateUsers(users)
            .subscribe(() => {
                this.onCancel();
            });
    }
}