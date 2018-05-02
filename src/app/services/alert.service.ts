import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }

  showLoader() {
    swal.close();
    swal.showLoading();
  }

  hideLoader() {
    swal.close();
    swal.hideLoading();
  }

  closeModals() {
    swal.close();
  }

}
