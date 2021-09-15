import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-live',
  templateUrl: './code-live.component.html',
  styleUrls: ['./code-live.component.scss']
})
export class CodeLiveComponent implements OnInit {

  @Input() yourCode: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
