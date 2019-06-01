import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Directive({
    selector:'[unique]',
    providers:[{
        provide: NG_ASYNC_VALIDATORS,
        useExisting:UniqueDirective,
        multi:true
        }
    ]
})
export class UniqueDirective implements AsyncValidator{
    constructor (private userService:UsersService){

    }
    validate (c:AbstractControl): Observable<ValidationErrors | null> {
        return this.userService.getUsers().pipe(map((data: any) => {
            const user = data.filter(user => user.email === c.value);
            return user.length ? { unique: true } : null;
        }));
    }
}