import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  usersData: User[] = [
    { id: 1, name: 'Aitor Perez', email: 'aitor@gmail.com', password:'123', phone: '674623517', imageUrl: '../assets/programmer.png' },
    { id: 2, name: 'Eddy Lucandy', email: 'eddy@gmail.com', password:'123' , phone: '663586690', imageUrl: './assets/user.png' },
  ];

  checkCredentials(email: string, password: string): boolean {
    const user = this.usersData.find(u => u.email === email);
    return !!user && user.password === password;
  }
  
}
