import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  
  

 
  
  
    fnum = '';
    snum = '';
    answer = '';
    outputResult(value:string){
      this.answer = value;
    }

  ngOnInit(): void {}

 

}
