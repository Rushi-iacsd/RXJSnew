import { Component, OnInit } from '@angular/core';
import { filter, map, pluck, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   
    courses: Array<Course> = [];

    // beginnersCourses: Array<Course> = [];
    // advanceCourses: Array<Course> = [];

    beginnersCourses$!: Observable<Array<Course>>
    advanceCourses$!: Observable<Array<Course>>

    constructor(private _coursesService: CoursesService) {

    }

    ngOnInit(): void {

       
    //   this._coursesService.getAllCourses()
    //   .pipe(
    //     map(res => res['payload'])
    //   )

    //   .subscribe(
    //     res => {
    //         this.courses = res;
    //         console.log(this.courses)
    //         console.log(res)

    //         this.beginnersCourses = res.filter(course => course.category === "BEGINNER");
    //         this.advanceCourses = res.filter(course => course.category === 'ADVANCED');

    //     }
    //   )



    let courses$ = this._coursesService.getAllCourses()
                 
   
        this.beginnersCourses$ = courses$.pipe(
          map(course => course.filter(c => c.category === "BEGINNER"))  
        )         
 
         this.advanceCourses$ = courses$.pipe(
            map(courseArray => courseArray.filter( c => c.category === "ADVANCED"))
         )


    }
}

  










        // let courses$ = this._coursesService.getAllCourses()
        //     .pipe(
        //         map(res => res['payload']),
        //         shareReplay()
        //     );

        // this.beginnersCourses$ = courses$
        //     .pipe(
        //         map(course => course.filter(c => c.category === "BEGINNER"))
        //     )
        //     this.advanceCourses$ = courses$
        //     .pipe(
        //         map(course => course.filter(c => c.category === "ADVANCED"))
        //     )
        // courses$
        //     .subscribe(
        //         res => {
        //             this.courses = res;
        //             this.beginnersCourses = res.filter(course => course.category === "BEGINNER");
        //             this.advanceCourses = res.filter(course => course.category === "ADVANCED")
        //         }
        //     )
     