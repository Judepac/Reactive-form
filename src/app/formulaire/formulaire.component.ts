import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
