import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  foods = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 AM', '12:30 PM'
  ];
  guests = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  minDate = new Date();
  
  align = 'start';
  constructor() { }

  ngOnInit() {
  }

}
