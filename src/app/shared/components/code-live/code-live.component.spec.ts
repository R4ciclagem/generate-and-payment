import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLiveComponent } from './code-live.component';

describe('CodeLiveComponent', () => {
  let component: CodeLiveComponent;
  let fixture: ComponentFixture<CodeLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
