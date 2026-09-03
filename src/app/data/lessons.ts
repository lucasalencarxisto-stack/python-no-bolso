export type LessonBlock =
  | {
      type: 'text';
      title?: string;
      text: string;
    }

  | {
      type: 'analogy';
      title?: string;
      text: string;
    }

  | {
      type: 'list';
      title?: string;
      items: string[];
    }

  | {
      type: 'code';
      title?: string;
      code: string;
      explanation?: string;
      output?: string;
    }

  | {
      type: 'tip';
      text: string;
    }

  | {
      type: 'challenge';
      title?: string;
      description: string;
      hint?: string;
    }

  | {
      type: 'summary';
      title?: string;
      items: string[];
    };

export interface Lesson {
  id: number;
  number: string;
  icon: string;
  title: string;
  description: string;
  content: LessonBlock[];
}

export const LESSONS: Lesson[] = [
  {
    id: 1,
    number: 'AULA 01',
    icon: '🐍',
    title: 'Introdução ao Python',
    description: 'Entenda o que é programação, o que é Python e execute seu primeiro comando.',

    content: [
      {
        type: 'text',
        title: 'Antes de tudo: o que é programar?',
        text: 'Programar é escrever instruções para que o computador execute uma tarefa. Essas instruções precisam seguir regras que o computador consiga interpretar.'
      },

      {
        type: 'analogy',
        title: '🍳 Pense em uma receita',
        text: 'Uma receita ensina passo a passo como preparar um prato. Um programa funciona de forma parecida: você escreve uma sequência de instruções e o computador executa cada uma delas.'
      },

      {
        type: 'text',
        title: '🐍 E onde entra o Python?',
        text: 'Python é uma linguagem de programação. Ela nos permite escrever essas instruções usando uma sintaxe relativamente próxima da linguagem humana, o que facilita bastante o aprendizado.'
      },

      {
        type: 'list',
        title: 'Onde Python é utilizado?',
        items: [
          'Desenvolvimento de sites e APIs',
          'Automação de tarefas repetitivas',
          'Análise e processamento de dados',
          'Inteligência artificial e Machine Learning',
          'Cibersegurança e criação de scripts'
        ]
      },

      {
        type: 'code',
        title: 'Seu primeiro comando',
        code: 'print("Olá, mundo!")',
        explanation: 'print() é uma função do Python usada para mostrar alguma informação na tela.',
        output: 'Olá, mundo!'
      },

      {
        type: 'text',
        title: 'Entendendo linha por linha',
        text: 'A palavra print chama uma função. Os parênteses guardam aquilo que queremos enviar para essa função. O texto entre aspas é a mensagem que será exibida.'
      },

      {
        type: 'analogy',
        title: '📣 Pense no print() como um alto-falante',
        text: 'Você entrega uma mensagem para o print() e ele mostra essa mensagem para quem está usando o programa.'
      },

      {
        type: 'challenge',
        title: '🧠 Sua vez',
        description: 'Imagine que você queira mostrar a frase "Estou aprendendo Python!". Como ficaria o comando?',
        hint: 'Use print() e coloque a frase entre aspas.'
      },

      {
        type: 'tip',
        text: 'Não tente decorar toda a sintaxe agora. O mais importante é entender o padrão: escrevemos uma instrução e o Python executa essa instrução.'
      },

      {
        type: 'summary',
        title: '🎯 O que você aprendeu',
        items: [
          'Programar é dar instruções para o computador.',
          'Python é uma linguagem usada para escrever essas instruções.',
          'print() permite mostrar informações na tela.',
          'Textos em Python normalmente aparecem entre aspas.'
        ]
      }
    ]
  },

  // As aulas 02–06 podem continuar aqui como estão por enquanto.
];