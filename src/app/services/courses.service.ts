import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { pluck, shareReplay } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    getCoursesUrl = `${environment.baseUrlCourses}courses`
    constructor(private _http: HttpClient) {

    }

    getAllCourses(): Observable<  Course[] > {
        return this._http.get<{ payload: Course[] }>(this.getCoursesUrl)
        .pipe(
            //   map(res => res['payload'])
             
             pluck('payload'),
             shareReplay()
            )
    }


    updateCourseDetails(){
      //  this._http.patch()
    }
}