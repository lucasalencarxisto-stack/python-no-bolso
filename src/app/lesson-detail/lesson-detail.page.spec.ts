import { Component } from '@angular/core';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import { IonContent } from '@ionic/angular';

import {
  LESSONS,
  Lesson
} from '../data/lessons';

import {
  ProgressService
} from '../services/progress.service';

import {
  PythonTerminalComponent
} from '../components/python-terminal/python-terminal.component';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.page.html',
  styleUrls: ['./lesson-detail.page.scss'],
  standalone: true,

  imports: [
    IonContent,
    RouterLink,
    PythonTerminalComponent
  ]
})
export class LessonDetailPage {

  lesson?: Lesson;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public progress: ProgressService
  ) {

    this.route.paramMap.subscribe(params => {

      const id = Number(
        params.get('id')
      );

      this.lesson = LESSONS.find(
        lesson => lesson.id === id
      );

      if (!this.lesson) {
        this.router.navigate(['/lessons']);
      }

    });
  }

  get previousLesson(): Lesson | undefined {

    if (!this.lesson) {
      return undefined;
    }

    return LESSONS.find(
      lesson =>
        lesson.id === this.lesson!.id - 1
    );
  }

  get nextLesson(): Lesson | undefined {

    if (!this.lesson) {
      return undefined;
    }

    return LESSONS.find(
      lesson =>
        lesson.id === this.lesson!.id + 1
    );
  }

  completeLesson(): void {

    if (!this.lesson) {
      return;
    }

    this.progress.completeLesson(
      this.lesson.id
    );
  }

  goBack(): void {
    this.router.navigate(['/lessons']);
  }
}