import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { LESSONS } from '../data/lessons';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    RouterLink
  ]
})
export class LessonsPage {
  lessons = LESSONS;
}