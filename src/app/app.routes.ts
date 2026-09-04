import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page')
        .then(m => m.HomePage)
  },

  {
    path: 'lessons',
    loadComponent: () =>
      import('./lessons/lessons.page')
        .then(m => m.LessonsPage)
  },

  {
    path: 'lessons/:id',
    loadComponent: () =>
      import('./lesson-detail/lesson-detail.page')
        .then(m => m.LessonDetailPage)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];