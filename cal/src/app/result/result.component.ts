import { Component, OnInit } from '@angular/core';
import { CalService } from '../cal.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  outputLabel:any=0;

  
  constructor(
    private calService:CalService
    ) { this.calService.changeObservable.subscribe(res=>{this.outputLabel=res});}
      

  ngOnInit(): void {
  }

}
