import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private usersService: UsersService, private fb: FormBuilder) { }
  user!: User;
  profileForm!: FormGroup;
  editing: boolean = false;
  ngOnInit() {
    this.user = this.usersService.usersData[0];
    
    this.profileForm = this.fb.group({
      name: [this.user.name],
      email: [this.user.email],
      phone: [this.user.phone]
    });
  }

  logout() {

  }
  toggleEdit() {
    this.editing = !this.editing;
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
  saveChanges() {
    
  }

}
