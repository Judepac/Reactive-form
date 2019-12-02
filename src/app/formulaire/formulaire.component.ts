import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  streetAddress = new FormControl('');
  postalAddress = new FormControl('');
  townAddress = new FormControl('');
  user: User = new User();

  listUser: User[];

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    this.user.name = this.username.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.postalAddress = this.postalAddress.value;
    this.user.streetAddress = this.streetAddress.value;
    this.user.townAddress = this.townAddress.value;

    this.listUser.push(this.user);

  }
}
