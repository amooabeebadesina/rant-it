import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RantService} from '../../../services/rant.service';
import {Rant} from '../../../models/rant';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {

  @Input() rant;
  @Output() selected = new EventEmitter<Rant>();
  constructor(private rantService: RantService) { }

  ngOnInit() {
  }

  updateClaps() {
    this.rant.claps++;
    this.rantService.updateClaps(this.rant);
  }

  onSelect() {
    this.selected.emit(this.rant);
  }

}
