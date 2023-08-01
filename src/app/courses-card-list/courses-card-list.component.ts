import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {CourseDialogComponent} from "../course-dialog/course-dialog.component";


@Component({
    selector: 'app-course-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input('courses') courses :Course[] = []

    constructor(private dialog: MatDialog) {

    }

    ngOnInit() {

    }


    onEditCourse(course : Course){
       // console.log(course);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = course;

        const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig)

    }
    
}







    //     const mySubject = new Subject<number>();
    //     const mySubject$ = mySubject.asObservable()
    //     mySubject$.subscribe(console.log);

    //   mySubject.next(1);
    //   mySubject.next(2);
    //   mySubject.next(3);
    //   mySubject.next(4);
    //   mySubject.complete();
  