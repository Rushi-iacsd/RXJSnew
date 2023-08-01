import {Component, OnInit} from '@angular/core';
import { Observable, Subject, observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  
  
   mySubject = new Subject<number>()
   

    constructor() {

    }

    ngOnInit() {


      this.mySubject.next(1);
      this.mySubject.next(2);
      this.mySubject.next(3);
      this.mySubject.next(4);


      this.mySubject.subscribe(
        res => console.log(res)
      )
    }
  }
  
      // let http$ = new Observable(observer => {
      //   fetch (`http://localhost:9000/api/courses`)
      //    .then(res => res.json())
      //     .then(data => {
      //       observer.next(data);
      //       observer.complete()
      //     })
      //     .catch(err => {
      //       observer.error(err)
      //     })
      // })
     
      // http$.subscribe(res => console.log(res))
     
