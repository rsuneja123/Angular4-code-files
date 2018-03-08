import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  expression: string = '';
  result: string = '';
  
  

  append(input: string) {
    if (this.expression.length > 20) { alert("Maximum 20 Value are allowed"); }else
    if (this.result.length > 0) { this.expression = '' } else {
    this.expression += input; //append input in expression
    }
  }
  del() {
    
      this.expression = this.expression.slice(0, -1);
    
  }
  calculateResult() {
    
    this.result = eval(this.expression);
    if (this.expression.length > 0) {this.expression=''}
    
  }
  clear() {
    if (this.expression.length == 0) { alert("Nothing to clear"); } else {
      this.expression = ''
    }
  }
    
  


  constructor() { }

  ngOnInit() {
  }

}
