import {
  Injectable
} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PyodideService {

  private pyodide: any = null;

  private loadingPromise:
    Promise<any> | null = null;

  private scriptPromise:
    Promise<void> | null = null;


  private readonly pyodideVersion =
    '314.0.6';


  private get indexURL(): string {

    return (
      'https://cdn.jsdelivr.net/pyodide/' +
      `v${this.pyodideVersion}/full/`
    );

  }


  private loadPyodideScript():
    Promise<void> {

    /*
     * Se o Pyodide já estiver carregado,
     * não adicionamos o script novamente.
     */
    if (
      typeof (window as any).loadPyodide
      === 'function'
    ) {

      return Promise.resolve();

    }


    if (this.scriptPromise) {

      return this.scriptPromise;

    }


    this.scriptPromise =
      new Promise<void>(
        (resolve, reject) => {

          const script =
            document.createElement(
              'script'
            );


          script.src =
            `${this.indexURL}pyodide.js`;

          script.async = true;


          script.onload = () => {

            console.log(
              '[Pyodide] ✅ Script carregado'
            );

            resolve();

          };


          script.onerror = () => {

            this.scriptPromise = null;

            reject(
              new Error(
                'Não foi possível carregar o Pyodide.'
              )
            );

          };


          document.head.appendChild(
            script
          );

        }
      );


    return this.scriptPromise;

  }


  private async initialize():
    Promise<void> {

    if (this.pyodide) {

      console.log(
        '[Pyodide] Runtime já carregado.'
      );

      return;

    }


    console.log(
      '[Pyodide] Iniciando...',
      this.pyodideVersion
    );


    console.log(
      '[Pyodide] CDN:',
      this.indexURL
    );


    await this.loadPyodideScript();


    if (!this.loadingPromise) {

      const loadPyodide =
        (window as any).loadPyodide;


      if (
        typeof loadPyodide !==
        'function'
      ) {

        throw new Error(
          'loadPyodide não está disponível.'
        );

      }


      this.loadingPromise =
        loadPyodide({

          indexURL:
            this.indexURL

        });

    }


    try {

      this.pyodide =
        await Promise.race([

          this.loadingPromise,

          new Promise(
            (_, reject) => {

              setTimeout(() => {

                reject(
                  new Error(
                    'O Python demorou mais de 20 segundos para inicializar.'
                  )
                );

              }, 20000);

            }
          )

        ]);


      console.log(
        '[Pyodide] ✅ Runtime carregado!'
      );

    } catch (error) {

      console.error(
        '[Pyodide] ❌ Erro ao inicializar:',
        error
      );


      this.loadingPromise = null;

      throw error;

    }

  }


  async run(
    code: string
  ): Promise<string> {

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

      batched: (
        text: string
      ) => {

        console.log(
          '[Python stdout]',
          text
        );

        stdout.push(text);

      }

    });


    this.pyodide.setStderr({

      batched: (
        text: string
      ) => {

        console.error(
          '[Python stderr]',
          text
        );

        stderr.push(text);

      }

    });


    try {

      const result =
        await this.pyodide
          .runPythonAsync(
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


      return output.join(
        '\n'
      );

    } catch (error) {

      console.error(
        '[Pyodide] ❌ Python falhou:',
        error
      );

      throw error;

    }

  }

}