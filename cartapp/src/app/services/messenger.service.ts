import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  subject = new Subject();

  // tslint:disable-next-line:typedef
  sendMsg(product: any) {
    this.subject.next(product); // event trigger
  }

  // tslint:disable-next-line:typedef
  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }
}
