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

  lessonCompleted = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public progress: ProgressService
  ) {

    this.route.paramMap.subscribe(params => {

      const id = Number(
        params.get('id')
      );


      const foundLesson = LESSONS.find(
        lesson => lesson.id === id
      );


      // Aula inexistente
      if (!foundLesson) {

        this.router.navigate([
          '/lessons'
        ]);

        return;
      }


      /*
       * A Aula 01 sempre pode ser acessada.
       *
       * Para qualquer outra aula,
       * a anterior precisa estar concluída.
       */
      if (
        foundLesson.id > 1 &&
        !this.progress.isCompleted(
          foundLesson.id - 1
        )
      ) {

        this.router.navigate([
          '/lessons'
        ]);

        return;
      }


      this.lesson = foundLesson;


      // Recupera o progresso salvo
      this.lessonCompleted =
        this.progress.isCompleted(
          this.lesson.id
        );

    });

  }


  get previousLesson(): Lesson | undefined {

    if (!this.lesson) {
      return undefined;
    }

    return LESSONS.find(
      lesson =>
        lesson.id ===
        this.lesson!.id - 1
    );

  }


  get nextLesson(): Lesson | undefined {

    if (!this.lesson) {
      return undefined;
    }

    return LESSONS.find(
      lesson =>
        lesson.id ===
        this.lesson!.id + 1
    );

  }


  completeLesson(): void {

    if (!this.lesson) {
      return;
    }


    this.progress.completeLesson(
      this.lesson.id
    );


    this.lessonCompleted = true;

  }


  goBack(): void {

    this.router.navigate([
      '/lessons'
    ]);

  }

}