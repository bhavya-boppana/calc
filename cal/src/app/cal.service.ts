import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalService {
  changesubject:Subject<any>=new Subject();
  changeObservable:Observable<any>=this.changesubject.asObservable();
  operator:string="+";
  result:number=0;
  val=0;
  plus="+";
  minus="-";
  mul="*";
  div="/";
  add(n1,n2){return n1+n2;}
  subtract(n1,n2){return n1-n2;}
  multiply(n1,n2){return n1*n2;}
  divide(n1,n2){return n1/n2;}
  onNumberclick(value)
  {
    if(typeof value=='number'){
      this.val=this.val*10+value;
    }
    else if(value=="clear")
    {
      this.val=0;
      this.result=0;
      this.changesubject.next(this.result);
    }
    else if(value=="=")
    {
      if(this.operator=="+")this.result+=this.val;
      else if(this.operator=="-")this.result-=this.val;
      else if(this.operator=="*")this.result*=this.val;
      else if(this.operator=="/")this.result/=this.val;
      this.val=0;
      this.changesubject.next(this.result);
    }
    else{
      if(this.operator=="+")this.result+=this.val;
      else if(this.operator=="-")this.result-=this.val;
      else if(this.operator=="*")this.result*=this.val;
      else if(this.operator=="/")this.result/=this.val;
      this.val=0;
      this.changesubject.next(this.result);
      this.operator=value;
    }



  }
  constructor() { }
}
