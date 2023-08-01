import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import * as moment from 'moment';
import { fromEvent, noop } from 'rxjs';
import { concatMap, distinctUntilChanged, exhaustMap, filter, mergeMap, tap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements AfterViewInit {
  
  course : Course;
  form : FormGroup;


    constructor(
        @Inject(MAT_DIALOG_DATA) getcourse : Course,
       private dialogRef : MatDialogRef<CourseDialogComponent>

    ) {
          this.course = getcourse;
          this.form = new FormGroup({
            description : new FormControl(this.course.description, [Validators.required]),
        
            category : new FormControl(this.course.category, [Validators.required]),
        
           releaseAt : new FormControl(moment(),[Validators.required]),

           longDescription : new FormControl(this.course.longDescription, [Validators.required])

        })
     }

    ngAfterViewInit() {

    }

    save(){

    }


    close(){

        this.dialogRef.close();

    }
}
