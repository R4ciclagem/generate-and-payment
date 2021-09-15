import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeLiveComponent } from './components/code-live/code-live.component';

@NgModule({
  declarations: [
    CodeLiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeLiveComponent
  ]
})
export class SharedModule { }
