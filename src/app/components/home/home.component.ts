import { Component, OnInit } from '@angular/core';
import {RantService} from '../../services/rant.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rants: Observable<any[]>;
  constructor(private rantService: RantService) {
    this.rants = this.rantService.getTopRants();
  }

  ngOnInit() {
  }

}
