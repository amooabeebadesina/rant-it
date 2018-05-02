import { Injectable } from '@angular/core';
import {Rant} from '../models/rant';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RantService {

  rantsRef: AngularFireList<any>;
  rants: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getRants() {
    this.rantsRef = this.db.list('rants',
        ref => ref.orderByKey().limitToLast(12));

    this.rants = this.rantsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.rants;
  }

  getNextRants(key) {
    this.rantsRef = this.db.list('rants',
      ref => ref.orderByKey().endAt(key).limitToLast(12));

    this.rants = this.rantsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.rants;
  }

  getTopRants() {
    const rantsRef = this.db.list('rants',
      ref => ref.orderByKey().limitToLast(6));

    return rantsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).map(rants => rants.reverse());
  }

  addRant(value) {
    this.rantsRef.push(value);
  }

  updateClaps(rant) {
    this.rantsRef.update(rant.key, { claps: rant.claps });
  }

}
