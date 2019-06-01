import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http'
import { Users } from '../models/users.model';

@Injectable()
export class UsersService{
    readonly BASE_URL: string = environment.api_url;
    readonly END_POINT: string = 'users';
    constructor(private http: HttpClient) {}
    getUsers() {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}`;

        return this.http.get(API_URL);
    }
    getUsersById(id: number) {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${id}`;
        return this.http.get(API_URL);
    }
    deleteUsers(id:number){
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${id}`;
        return this.http.delete(API_URL);
    }
    updateUsers(users: Users) {
        const API_URL = `${this.BASE_URL}/${this.END_POINT}/${users.id}`;
        return this.http.put(API_URL, users);
    }

    createUsers(users: Users){
        const API_URL = `${this.BASE_URL}/${this.END_POINT}`;
        return this.http.post(API_URL, users);
    }

}