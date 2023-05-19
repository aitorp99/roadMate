import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  usersData: User[] = [
    { id: 1, name: 'Aitor Perez', email: 'aitor@gmail.com', phone: '674623517', imageUrl: '../assets/programmer.png' },
    { id: 2, name: 'Eddy Lucandy', email: 'eddy@gmail.com', phone: '663586690', imageUrl: './assets/user.png' },
  ];
}
