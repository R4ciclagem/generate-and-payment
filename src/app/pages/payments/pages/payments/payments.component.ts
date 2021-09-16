import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridService } from 'src/app/core/services/grid.service';
import { PaymentService } from 'src/app/core/services/payment.service';
import { PaymentBusiness } from 'src/app/shared/models/payment-business.model';
import { PaymentView } from 'src/app/shared/models/payment-view.model';
import { keyPressNumbersValidation } from 'src/app/shared/utils/functions';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  gridDimension: number = 10;
  yourCode: number = 0;
  form: FormGroup;
  paymentList: PaymentBusiness[] = [];

  constructor(
    private _gridService: GridService,
    private _fb: FormBuilder,
    private _paymentService: PaymentService
  ) { }

  ngOnInit(): void {

    this.form = this._fb.group({
      payment: [null, [Validators.required]],
      ammount: [null, [Validators.required, Validators.pattern("[0-9]+")]]
    })

    this.refresh();

    setInterval(() => {
      this.yourCode = this._gridService.generateNewCode(this._gridService.createNewArray(this.gridDimension, null));
    }, 2000)
  }

  addPaymentAction(): void {
    
    if(this.form.valid){
      let formValue = this.form.getRawValue();

      let newPayment = new PaymentView();
      newPayment.name = formValue.payment;
      newPayment.ammount = formValue.ammount;
      newPayment.code = this.yourCode;
      newPayment.grid = this.gridDimension*this.gridDimension;
  
      this._paymentService.addNewPayment(newPayment);
  
      //refresh table
      this.refresh();
      this.form.reset();
    } else {
      window.alert("Campos com valores inválidos");
    }
  }

  refresh(): void {
    this.paymentList = this._paymentService.getPaymentList();
  }

  keyPressNumbers(event: any): boolean {
    return keyPressNumbersValidation(event);
  }
}
