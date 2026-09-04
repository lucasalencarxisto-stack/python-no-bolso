import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  PyodideService
} from '../../services/pyodide.service';


@Component({
  selector: 'app-python-terminal',
  templateUrl: './python-terminal.component.html',
  styleUrls: ['./python-terminal.component.scss'],
  standalone: true,

  imports: [
    FormsModule
  ]
})
export class PythonTerminalComponent implements OnInit {

  @Input()
  initialCode = '';

  @Input()
  expectedOutput?: string;


  code = '';

  output = '';

  isRunning = false;


  challengeStatus:
    'idle' |
    'success' |
    'incorrect' = 'idle';


  friendlyError = '';

  technicalError = '';


  constructor(
    private pyodideService: PyodideService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
  this.code = this.initialCode;
}


  async runCode(): Promise<void> {

    if (
      !this.code.trim() ||
      this.isRunning
    ) {
      return;
    }


    this.isRunning = true;

    this.output = '';

    this.challengeStatus = 'idle';

    this.friendlyError = '';

    this.technicalError = '';

    this.cdr.detectChanges();


    console.log(
      '[Terminal] Iniciando execução:',
      this.code
    );


    try {

      const executionPromise =
        this.pyodideService.run(
          this.code
        );


      const result =
        await Promise.race([

          executionPromise,

          new Promise<string>(
            (_, reject) => {

              setTimeout(() => {

                reject(
                  new Error(
                    'A execução demorou mais de 10 segundos.'
                  )
                );

              }, 10000);

            }
          )

        ]);


      const normalizedResult =
        String(result ?? '').trim();


      this.output =
        normalizedResult ||
        '✓ Programa executado sem saída.';


      this.validateChallenge(
        normalizedResult
      );

    } catch (error) {

      console.error(
        '[Terminal] Erro:',
        error
      );


      const errorMessage =
        error instanceof Error
          ? error.message
          : String(error);


      this.technicalError =
        errorMessage;


      this.friendlyError =
        this.translatePythonError();


      this.output = '';

      this.challengeStatus = 'idle';

    } finally {

      this.isRunning = false;

      console.log(
        '[Terminal] isRunning:',
        this.isRunning
      );

      this.cdr.detectChanges();

    }

  }


  private validateChallenge(
    result: string
  ): void {

    if (
      this.expectedOutput === undefined ||
      this.expectedOutput === null
    ) {

      this.challengeStatus = 'idle';

      return;

    }


    const actual =
      this.normalizeOutput(
        result
      );


    const expected =
      this.normalizeOutput(
        this.expectedOutput
      );


    console.log(
      '[Challenge] Esperado:',
      expected
    );


    console.log(
      '[Challenge] Recebido:',
      actual
    );


    this.challengeStatus =
      actual === expected
        ? 'success'
        : 'incorrect';

  }


  private normalizeOutput(
    value: string
  ): string {

    return value
      .replace(/\r\n/g, '\n')
      .trim();

  }


  private translatePythonError(): string {

    return (
      'Parece que seu código tem alguma coisa para corrigir. ' +
      'Revise a dica do exercício, confira o que você escreveu ' +
      'e tente novamente.'
    );

  }


  clearOutput(): void {

    this.output = '';

    this.friendlyError = '';

    this.technicalError = '';

    this.challengeStatus = 'idle';

    this.cdr.detectChanges();

  }


  resetCode(): void {

    this.code = this.initialCode;

    this.output = '';

    this.friendlyError = '';

    this.technicalError = '';

    this.challengeStatus = 'idle';

    this.cdr.detectChanges();

  }

}