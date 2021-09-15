import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GeneratorComponent
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GeneratorModule { }
