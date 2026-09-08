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
    path: 'course-complete',
    loadComponent: () =>
      import('./course-complete/course-complete.page')
        .then(m => m.CourseCompletePage)
  },

  {
    path: 'quiz',
    loadComponent: () =>
      import('./quiz/quiz.page')
        .then(m => m.QuizPage)
  },

  {
    path: 'lab',
    loadComponent: () =>
      import('./lab/lab.page')
        .then(m => m.LabPage)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
  path: 'resources',
  loadComponent: () =>
    import('./resources/resources.page')
      .then(m => m.ResourcesPage)
},

];