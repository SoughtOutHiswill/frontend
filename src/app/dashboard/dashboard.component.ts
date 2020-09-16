import { CourseService } from '../course.service';
import { Course } from '../course';
import { COURSES } from '../mock-courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[];

  constructor(private CourseService: CourseService) { }
  
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void{
    this.CourseService.getCourses().subscribe( courses => this.courses=courses);
  }
}
