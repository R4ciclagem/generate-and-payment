import { Injectable } from '@angular/core';
import { AddNewPaymentRequest } from 'src/app/shared/models/http/add-new-payment-request.model';
import { GetPaymentListRequest } from 'src/app/shared/models/http/get-payment-list-request.model';
import { PaymentView } from 'src/app/shared/models/payment-view.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private _http: HttpService
  ) { }

  getPaymentList(): PaymentView[] {
    let request = new GetPaymentListRequest();

    let responseArray = this._http.getPaymentList(request).paymentList
    let returnArray = [];

    for(let payment of responseArray){
      returnArray.push(PaymentView.mapFromBussinessObject(payment));
    }

    return returnArray;
  }

  addNewPayment(payment: PaymentView): void {

    let request = new AddNewPaymentRequest();
    request.payment = PaymentView.mapToBussinessObject(payment)

    this._http.addNewPayment(request);
  }
}
