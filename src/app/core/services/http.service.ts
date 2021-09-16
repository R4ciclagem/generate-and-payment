import { Injectable } from '@angular/core';
import { AddNewPaymentRequest } from 'src/app/shared/models/http/add-new-payment-request.model';
import { AddNewPaymentResponse } from 'src/app/shared/models/http/add-new-payment-response.model';
import { GetPaymentListRequest } from 'src/app/shared/models/http/get-payment-list-request.model';
import { GetPaymentListResponse } from 'src/app/shared/models/http/get-payment-list-response.model';
import { PaymentBusiness } from 'src/app/shared/models/payment-business.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  getPaymentList(request: GetPaymentListRequest): GetPaymentListResponse {
    var storedPayments: PaymentBusiness[] = JSON.parse(sessionStorage.getItem("payments"));

    if(!storedPayments){
      storedPayments = [];
    }

    let response = new GetPaymentListResponse();
    response.paymentList = storedPayments;

    return response;
  }

  addNewPayment(request: AddNewPaymentRequest): AddNewPaymentResponse {

    var storedPayments = JSON.parse(sessionStorage.getItem("payments"));
    
    if(!storedPayments){
      storedPayments = [];
    }

    storedPayments.push(request.payment);

    sessionStorage.setItem("payments", JSON.stringify(storedPayments));

    return new AddNewPaymentResponse();
  }
}
