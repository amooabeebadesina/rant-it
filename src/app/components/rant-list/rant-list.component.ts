import {Component, OnDestroy, OnInit} from '@angular/core';
import {RantService} from '../../services/rant.service';
import {Rant} from '../../models/rant';
import {AlertService} from '../../services/alert.service';
import {Subscription} from 'rxjs/Subscription';
declare var jQuery;

@Component({
  selector: 'app-rant-list',
  templateUrl: './rant-list.component.html',
  styleUrls: ['./rant-list.component.css']
})
export class RantListComponent implements OnInit, OnDestroy {

  rants: any[];
  selected_rant: Rant = null;
  next_key;
  prev_key;
  private subscription: Subscription;
  constructor(private rantService: RantService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.showLoader();
     this.rantService.getRants()
      .subscribe((rants) => {
          console.log('init');
          this.rants = rants;
          console.log(this.rants);
          this.next_key = rants[0].key;
          this.prev_key = null;
          this.alertService.hideLoader();
      }, (err) => {

      });
  }

  fetchNext() {
    this.alertService.showLoader();
    this.rantService.getNextRants(this.next_key)
      .subscribe((rants) => {
        console.log('fetched');
        this.rants = rants;
        console.log(this.rants);
        this.prev_key = this.next_key;
        this.next_key = rants.length < 12 ? null : rants[0].key;
        this.alertService.hideLoader();
      }, (err) => {

      });
  }

  showSingleRant(rant) {
    this.selected_rant = rant;
    jQuery('#rantModal').modal('show');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
