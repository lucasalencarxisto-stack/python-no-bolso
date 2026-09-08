import { Component } from '@angular/core';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  IonContent
} from '@ionic/angular';

import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,

  imports: [IonContent, RouterLink
  ]
})
export class HomePage {

  quizMessageVisible = false;

  menuOpen = false;


  constructor(
    private router: Router,
    public progress: ProgressService
  ) {}


  toggleMenu(): void {

    this.menuOpen =
      !this.menuOpen;

  }


  closeMenu(): void {

    this.menuOpen = false;

  }


  openQuiz(): void {

    if (
      this.progress.isCourseCompleted()
    ) {

      this.router.navigate([
        '/quiz'
      ]);

      return;
    }


    this.quizMessageVisible = true;


    setTimeout(() => {

      this.quizMessageVisible = false;

    }, 3000);

  }

}