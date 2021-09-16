import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridService } from 'src/app/core/services/grid.service';
import { keyPressAlphaValidation } from 'src/app/shared/utils/functions';
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators"
import { Subject } from 'rxjs';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit, OnDestroy {

  private _ngUnsubscriber = new Subject();

  form: FormGroup;
  gridArray: string[][] = [];
  gridDimension: number = 10;
  currentTime: Date;
  yourCode: number = 0;
  refreshGrid: boolean = false;

  readonly MAX_LENGTH_1: number = 1

  gridDimensionArray: string[] = [].constructor(this.gridDimension);

  constructor(
    private _gridService: GridService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.currentTime = new Date();

    this.form = this._fb.group({
      character: [null, Validators.maxLength(1)]
    });

    setInterval(() => {
      this.currentTime = new Date()
    }, 1000);

    this.form.get("character").valueChanges.pipe(takeUntil(this._ngUnsubscriber)).subscribe(res=> {
      if(res){
        this.form.get("character").disable();
        setTimeout(() => { this.form.get("character").enable() }, 4000);
      }    
    });
  }

  ngOnDestroy(): void {
    this._ngUnsubscriber.next();
    this._ngUnsubscriber.complete();
  }

  generateGrid(): void {
    this.gridArray = this._gridService.createNewArray(this.gridDimension, this.form.get('character').value);
    this.yourCode = this._gridService.generateNewCode(this.gridArray);

    if(!this.refreshGrid){
      setInterval(() => {
        if(this.refreshGrid){
          this.gridArray = this._gridService.createNewArray(this.gridDimension, this.form.get('character').value);
          this.yourCode = this._gridService.generateNewCode(this.gridArray);
        }
      }, 2000)
    }

    this.refreshGrid = true;
  }

  keyPressAlpha(event: any): boolean {
    return keyPressAlphaValidation(event);
  }
}
