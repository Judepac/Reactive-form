import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(''),
    streetAddress: new FormControl(''),
    postalAddress: new FormControl(''),
    townAddress: new FormControl(''),
    credentials: new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  });

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.user.email = this.userForm.value.credentials.email;
    this.user.password = this.userForm.value.credentials.password;
    this.user.name = this.userForm.value.username;
    this.user.streetAddress = this.userForm.value.streetAddress;
    this.user.townAddress = this.userForm.value.townAddress;
    this.user.postalAddress = this.userForm.value.postalAddress;

    console.log(this.userForm.value);
  }
}
