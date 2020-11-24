import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CalService } from '../cal.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() value:any;
  constructor(private calService:CalService) { 
    
  }
  
  onclicking(){
    console.log("fine");
    this.calService.onNumberclick(this.value);
  }
  ngOnInit(): void {
  }

}
