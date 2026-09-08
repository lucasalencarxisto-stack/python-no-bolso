import { Component } from '@angular/core';

import {
  Router,
  RouterLink
} from '@angular/router';

import { IonContent } from '@ionic/angular';

import {
  ProgressService
} from '../services/progress.service';


interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,

  imports: [
    IonContent,
    RouterLink
  ]
})
export class QuizPage {

  questions: QuizQuestion[] = [

    {
      question:
        'Qual comando usamos para mostrar uma informação na tela em Python?',

      options: [
        'show()',
        'print()',
        'display()',
        'console()'
      ],

      answer: 1,

      explanation:
        'A função print() é usada para mostrar informações na saída do programa.'
    },

    {
      question:
        'Qual código cria corretamente uma variável chamada nome?',

      options: [
        'nome == "Ana"',
        'var nome = "Ana"',
        'nome = "Ana"',
        'string nome = "Ana"'
      ],

      answer: 2,

      explanation:
        'Em Python usamos = para atribuir um valor a uma variável.'
    },

    {
      question:
        'Qual tipo representa números inteiros em Python?',

      options: [
        'str',
        'float',
        'bool',
        'int'
      ],

      answer: 3,

      explanation:
        'int representa números inteiros, como 10, 25 ou -3.'
    },

    {
      question:
        'Qual função é usada para receber uma entrada do usuário?',

      options: [
        'input()',
        'print()',
        'read()',
        'scan()'
      ],

      answer: 0,

      explanation:
        'input() permite receber uma informação digitada pelo usuário.'
    },

    {
      question:
        'Qual palavra inicia uma condição em Python?',

      options: [
        'when',
        'if',
        'case',
        'check'
      ],

      answer: 1,

      explanation:
        'A palavra-chave if inicia uma condição.'
    },

    {
      question:
        'Por que a indentação é importante em Python?',

      options: [
        'Ela muda a cor do código',
        'Ela serve apenas para organização',
        'Ela define blocos de código',
        'Ela deixa o programa mais rápido'
      ],

      answer: 2,

      explanation:
        'Python utiliza indentação para determinar quais instruções pertencem a determinado bloco.'
    }

  ];


  currentIndex = 0;

  selectedIndex: number | null = null;

  score = 0;

  answered = false;

  finished = false;


  constructor(
    private router: Router,
    private progress: ProgressService
  ) {

    /*
     * Impede acesso direto ao Quiz
     * antes da conclusão do curso.
     */
    if (
      !this.progress.isCourseCompleted()
    ) {

      this.router.navigate([
        '/home'
      ]);

    }

  }


  get currentQuestion(): QuizQuestion {

    return this.questions[
      this.currentIndex
    ];

  }


  selectAnswer(
    index: number
  ): void {

    if (this.answered) {
      return;
    }


    this.selectedIndex = index;

    this.answered = true;


    if (
      index ===
      this.currentQuestion.answer
    ) {

      this.score++;

    }

  }


  nextQuestion(): void {

    if (
      this.currentIndex ===
      this.questions.length - 1
    ) {

      this.finished = true;

      return;

    }


    this.currentIndex++;

    this.selectedIndex = null;

    this.answered = false;

  }


  restartQuiz(): void {

    this.currentIndex = 0;

    this.selectedIndex = null;

    this.score = 0;

    this.answered = false;

    this.finished = false;

  }

}