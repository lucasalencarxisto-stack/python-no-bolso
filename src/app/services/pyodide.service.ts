import { Injectable } from '@angular/core';

import {
  loadPyodide,
  version as pyodideVersion
} from 'pyodide';

@Injectable({
  providedIn: 'root'
})
export class PyodideService {

  private pyodide: any = null;

  private loadingPromise: Promise<any> | null = null;


  private async initialize(): Promise<void> {

    if (this.pyodide) {
      console.log('[Pyodide] Runtime já carregado.');
      return;
    }

    console.log(
      '[Pyodide] Iniciando...',
      pyodideVersion
    );

    const indexURL =
      `https://cdn.jsdelivr.net/pyodide/v${pyodideVersion}/full/`;

    console.log(
      '[Pyodide] CDN:',
      indexURL
    );


    if (!this.loadingPromise) {

      this.loadingPromise = loadPyodide({
        indexURL
      });

    }


    try {

      this.pyodide = await Promise.race([

        this.loadingPromise,

        new Promise((_, reject) => {

          setTimeout(() => {

            reject(
              new Error(
                'O Python demorou mais de 20 segundos para inicializar.'
              )
            );

          }, 20000);

        })

      ]);

      console.log(
        '[Pyodide] ✅ Runtime carregado!'
      );

    } catch (error) {

      console.error(
        '[Pyodide] ❌ Erro ao inicializar:',
        error
      );

      /*
       * Permite uma nova tentativa.
       * Sem isso uma Promise quebrada ficaria
       * guardada para sempre.
       */
      this.loadingPromise = null;

      throw error;
    }
  }


  async run(code: string): Promise<string> {

    console.log(
      '[Pyodide] Código recebido:',
      code
    );

    await this.initialize();

    console.log(
      '[Pyodide] Executando Python...'
    );


    const stdout: string[] = [];

    const stderr: string[] = [];


    this.pyodide.setStdout({

      batched: (text: string) => {

        console.log(
          '[Python stdout]',
          text
        );

        stdout.push(text);

      }

    });


    this.pyodide.setStderr({

      batched: (text: string) => {

        console.error(
          '[Python stderr]',
          text
        );

        stderr.push(text);

      }

    });


    try {

      const result =
        await this.pyodide.runPythonAsync(
          code
        );


      console.log(
        '[Pyodide] Resultado:',
        result
      );


      const output: string[] = [
        ...stdout
      ];


      if (
        result !== undefined &&
        result !== null
      ) {

        output.push(
          String(result)
        );

      }


      if (stderr.length > 0) {

        output.push(
          ...stderr
        );

      }


      return output.join('\n');

    } catch (error) {

      console.error(
        '[Pyodide] ❌ Python falhou:',
        error
      );

      throw error;

    }
  }
}