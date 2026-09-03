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

  code = '';

  output = '';

  isRunning = false;


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
    this.output = 'Executando...';

    this.cdr.detectChanges();


    try {

      const result =
        await this.pyodideService.run(
          this.code
        );

      this.output =
        result.trim() ||
        '✓ Programa executado sem saída.';

    } catch (error) {

      this.output =
        error instanceof Error
          ? error.message
          : String(error);

    } finally {

      this.isRunning = false;

      /*
       * O Pyodide/WebAssembly termina a execução
       * fora do fluxo normal de atualização
       * do Angular.
       *
       * Então avisamos explicitamente:
       * "ei Angular, redesenha isso aqui".
       */
      this.cdr.detectChanges();

    }
  }


  clearOutput(): void {
    this.output = '';
    this.cdr.detectChanges();
  }


  resetCode(): void {
    this.code = this.initialCode;
    this.output = '';

    this.cdr.detectChanges();
  }
}