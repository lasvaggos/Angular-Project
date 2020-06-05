import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('cont') Cont: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleForms():void {
    this.Cont.nativeElement.classList.toggle('s-signup')
  }

}
