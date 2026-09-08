import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

import {
  LESSONS,
  Lesson
} from '../data/lessons';

import {
  ProgressService
} from '../services/progress.service';


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

  lessons: Lesson[] = LESSONS;


  constructor(
    public progress: ProgressService
  ) {}


  isLessonUnlocked(
    lesson: Lesson
  ): boolean {

    // A primeira aula sempre fica disponível
    if (lesson.id === 1) {
      return true;
    }

    // As outras dependem da conclusão da anterior
    return this.progress.isCompleted(
      lesson.id - 1
    );

  }


  isLessonCompleted(
    lesson: Lesson
  ): boolean {

    return this.progress.isCompleted(
      lesson.id
    );

  }

}