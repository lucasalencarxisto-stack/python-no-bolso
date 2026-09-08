import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-course-complete',
  templateUrl: './course-complete.page.html',
  styleUrls: ['./course-complete.page.scss'],
  standalone: true,

  imports: [
    IonContent,
    RouterLink
  ]
})
export class CourseCompletePage {}