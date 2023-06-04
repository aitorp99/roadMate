import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private usersService: UsersService, private fb: FormBuilder, private router: Router) { }
  user!: User;
  profileForm!: FormGroup;
  ngOnInit() {
    this.user = this.usersService.usersData[0];
    
    this.profileForm = this.fb.group({
      name: [this.user.name],
      email: [this.user.email],
      phone: [this.user.phone]
    });
  }

  logout() {
    this.router.navigate(['/']);
  }
  editing: { [K in 'name' | 'email' | 'phone']?: boolean } = {};

  toggleEdit(field: 'name' | 'email' | 'phone') {
    this.editing[field] = !this.editing[field];
  }
  
  
  onSubmit() {
    console.log(this.profileForm.value);
  }
  applyChanges(field: 'name' | 'email' | 'phone') {
    // Aquí puedes guardar los cambios.
    // Después, vuelve al modo de visualización para ese campo.
    this.editing[field] = false;
}

  

}
