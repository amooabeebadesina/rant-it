import { Component, OnInit } from '@angular/core';
import {RantService} from '../../services/rant.service';
import {Rant} from '../../models/rant';
import {FACULTIES} from '../../constants/constants';

@Component({
  selector: 'app-create-rant',
  templateUrl: './create-rant.component.html',
  styleUrls: ['./create-rant.component.css']
})
export class CreateRantComponent implements OnInit {

  faculties = FACULTIES;
  rant_body = '';
  selected_faculty = '';
  no_of_characters = 1000;
  constructor (private rantService: RantService) { }

  ngOnInit() {
  }

  decreaseCharacters(input) {
    this.no_of_characters = 1000 - input.length;
  }

  onSubmit() {
    const rant = new Rant(this.rant_body, 0, this.selected_faculty);
    this.rantService.addRant(rant);
  }

  resetForm() {
    this.rant_body = '';
    this.selected_faculty = '';
  }

}
