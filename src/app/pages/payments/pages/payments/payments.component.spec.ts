import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PaymentService } from 'src/app/core/services/payment.service';
import { PaymentView } from 'src/app/shared/models/payment-view.model';
import { SharedModule } from 'src/app/shared/shared.module';

import { PaymentsComponent } from './payments.component';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  let TEST: PaymentView[] = [{name: "Rui", ammount: 1, code: 1, grid: 1 }];
  let fakeService: PaymentService;

  beforeEach(async () => {

    fakeService = jasmine.createSpyObj<PaymentService>(
      'Paymentservice',
      {
        getPaymentList: TEST,
        addNewPayment: undefined
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ PaymentsComponent ],
      imports: [
        ReactiveFormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
