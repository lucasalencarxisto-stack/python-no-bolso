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
      starterCode?: string;
      expectedOutput?: string;
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

  // =========================================================
  // AULA 01
  // =========================================================
  {
    id: 1,
    number: 'AULA 01',
    icon: '🐍',
    title: 'Introdução ao Python',
    description:
      'Entenda o que é programação, o que é Python e execute seu primeiro comando.',

    content: [
      {
        type: 'text',
        title: 'Antes de tudo: o que é programar?',
        text:
          'Programar é escrever instruções para que o computador execute uma tarefa. Essas instruções precisam seguir regras que o computador consiga interpretar.'
      },

      {
        type: 'analogy',
        title: '🍳 Pense em uma receita',
        text:
          'Uma receita ensina passo a passo como preparar um prato. Um programa funciona de forma parecida: você escreve uma sequência de instruções e o computador executa cada uma delas.'
      },

      {
        type: 'text',
        title: '🐍 E onde entra o Python?',
        text:
          'Python é uma linguagem de programação. Ela nos permite escrever essas instruções usando uma sintaxe relativamente próxima da linguagem humana, o que facilita bastante o aprendizado.'
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
        explanation:
          'print() é uma função do Python usada para mostrar alguma informação na tela.',
        output: 'Olá, mundo!'
      },

      {
        type: 'text',
        title: 'Entendendo linha por linha',
        text:
          'A palavra print chama uma função. Os parênteses guardam aquilo que queremos enviar para essa função. O texto entre aspas é a mensagem que será exibida.'
      },

      {
        type: 'analogy',
        title: '📣 Pense no print() como um alto-falante',
        text:
          'Você entrega uma mensagem para o print() e ele mostra essa mensagem para quem está usando o programa.'
      },

      {
        type: 'challenge',
        title: '🧠 Sua vez',
        description:
          'Mostre na tela a frase "Estou aprendendo Python!"',
        hint:
          'Use print() e coloque a frase entre aspas.',
        starterCode: '',
        expectedOutput:
          'Estou aprendendo Python!'
      },

      {
        type: 'tip',
        text:
          'Não tente decorar toda a sintaxe agora. O mais importante é entender o padrão: escrevemos uma instrução e o Python executa essa instrução.'
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


  // =========================================================
  // AULA 02
  // =========================================================
  {
    id: 2,
    number: 'AULA 02',
    icon: '🖨️',
    title: 'Usando o print()',
    description:
      'Aprenda a mostrar textos, números e outras informações na tela.',

    content: [
      {
        type: 'text',
        title: 'Conversando com quem usa o programa',
        text:
          'Muitos programas precisam mostrar alguma informação para quem está usando. Em Python, uma das formas mais simples de fazer isso é usando a função print().'
      },

      {
        type: 'code',
        title: 'Mostrando uma mensagem',
        code: 'print("Olá!")',
        explanation:
          'Tudo que estiver entre as aspas será mostrado na tela.',
        output: 'Olá!'
      },

      {
        type: 'text',
        title: 'Também podemos mostrar números',
        text:
          'O print() não serve apenas para textos. Também podemos usar números diretamente dentro dos parênteses.'
      },

      {
        type: 'code',
        title: 'Exibindo um número',
        code: 'print(10)',
        explanation:
          'Números não precisam estar entre aspas.',
        output: '10'
      },

      {
        type: 'analogy',
        title: '📺 Pense em uma televisão',
        text:
          'O programa possui várias informações internamente. O print() funciona como a tela que permite mostrar uma dessas informações para você.'
      },

      {
        type: 'challenge',
        title: '🧠 Sua vez',
        description:
          'Use print() para mostrar a frase "Python é legal!"',
        hint:
          'Coloque a frase entre aspas dentro dos parênteses do print().',
        starterCode: '',
        expectedOutput:
          'Python é legal!'
      },

      {
        type: 'tip',
        text:
          'Quando usamos texto em Python, normalmente colocamos esse conteúdo entre aspas.'
      },

      {
        type: 'summary',
        title: '🎯 O que você aprendeu',
        items: [
          'print() mostra informações na tela.',
          'Textos normalmente ficam entre aspas.',
          'Números podem ser enviados diretamente ao print().',
          'Podemos usar vários print() em um mesmo programa.'
        ]
      }
    ]
  },


  // =========================================================
  // AULA 03
  // =========================================================
  {
    id: 3,
    number: 'AULA 03',
    icon: '📦',
    title: 'Variáveis',
    description:
      'Aprenda a guardar informações para utilizar depois no programa.',

    content: [
      {
        type: 'text',
        title: 'Guardando informações',
        text:
          'Durante a execução de um programa, muitas vezes precisamos guardar alguma informação para utilizar depois. Para isso, podemos usar variáveis.'
      },

      {
        type: 'analogy',
        title: '📦 Pense em uma caixa',
        text:
          'Imagine uma variável como uma caixa que possui um nome. Podemos guardar uma informação nessa caixa e consultar seu conteúdo sempre que precisarmos.'
      },

      {
        type: 'code',
        title: 'Criando uma variável',
        code:
`nome = "Ana"

print(nome)`,
        explanation:
          'A variável nome guarda o texto "Ana". Depois usamos print(nome) para mostrar o conteúdo armazenado.',
        output:
          'Ana'
      },

      {
        type: 'text',
        title: 'O sinal de igual',
        text:
          'Em uma variável, o sinal = representa atribuição. Isso significa que estamos colocando um valor dentro daquela variável.'
      },

      {
        type: 'code',
        title: 'Outro exemplo',
        code:
`idade = 20

print(idade)`,
        explanation:
          'Agora a variável idade guarda o número 20.',
        output:
          '20'
      },

      {
        type: 'challenge',
        title: '🧠 Sua vez',
        description:
          'Crie uma variável chamada nome com o valor "Ana" e mostre essa variável usando print().',
        hint:
          'Primeiro use nome = "Ana". Depois use print(nome).',
        starterCode:
`nome = "Ana"

# mostre a variável abaixo
`,
        expectedOutput:
          'Ana'
      },

      {
        type: 'tip',
        text:
          'Um bom nome de variável ajuda a entender o programa. Prefira nomes como idade, nome e pontuacao em vez de letras aleatórias.'
      },

      {
        type: 'summary',
        title: '🎯 O que você aprendeu',
        items: [
          'Variáveis armazenam informações.',
          'O sinal = atribui um valor a uma variável.',
          'Podemos mostrar uma variável usando print().',
          'Uma variável deve possuir um nome claro.'
        ]
      }
    ]
  },


  // =========================================================
  // AULA 04
  // =========================================================
  {
    id: 4,
    number: 'AULA 04',
    icon: '🔢',
    title: 'Tipos de dados',
    description:
      'Conheça textos, números inteiros, números decimais e valores verdadeiros ou falsos.',

    content: [
      {
        type: 'text',
        title: 'Nem toda informação é igual',
        text:
          'Um programa pode trabalhar com textos, números, valores decimais e várias outras formas de informação. Em Python, essas informações possuem tipos diferentes.'
      },

      {
        type: 'list',
        title: 'Alguns tipos importantes',
        items: [
          'str — textos',
          'int — números inteiros',
          'float — números com casas decimais',
          'bool — verdadeiro ou falso'
        ]
      },

      {
        type: 'code',
        title: 'Exemplos de tipos',
        code:
`nome = "Lucas"
idade = 20
altura = 1.75
estudante = True`,
        explanation:
          'Cada variável está guardando um tipo diferente de informação.'
      },

      {
        type: 'analogy',
        title: '🧰 Ferramentas diferentes',
        text:
          'Imagine uma caixa de ferramentas. Um martelo e uma chave de fenda são ferramentas, mas possuem usos diferentes. Os tipos de dados funcionam de forma parecida.'
      },

      {
        type: 'code',
        title: 'Valores booleanos',
        code:
`estudante = True

print(estudante)`,
        explanation:
          'True significa verdadeiro. O outro valor booleano disponível é False.',
        output:
          'True'
      },

      {
        type: 'challenge',
        title: '🧠 Sua vez',
        description:
          'Crie as variáveis idade = 15, altura = 1.65 e estudante = True. Depois mostre cada valor com print().',
        hint:
          'Você precisará utilizar três comandos print(), um para cada variável.',
        starterCode:
`idade = 15
altura = 1.65
estudante = True

# mostre os três valores abaixo
`,
        expectedOutput:
`15
1.65
True`
      },

      {
        type: 'tip',
        text:
          'Python consegue identificar automaticamente o tipo de muitos valores de acordo com a forma como eles são escritos.'
      },

      {
        type: 'summary',
        title: '🎯 O que você aprendeu',
        items: [
          'str representa textos.',
          'int representa números inteiros.',
          'float representa números decimais.',
          'bool representa True ou False.'
        ]
      }
    ]
  },


  // =========================================================
  // AULA 05
  // =========================================================
  {
    id: 5,
    number: 'AULA 05',
    icon: '⌨️',
    title: 'Entrada de dados',
    description:
      'Entenda como programas podem receber informações de quem está usando.',

    content: [
      {
        type: 'text',
        title: 'Programas também podem ouvir',
        text:
          'Até agora nosso programa apenas mostrou informações. Mas muitos programas também precisam receber informações fornecidas pelo usuário.'
      },

      {
        type: 'code',
        title: 'Conhecendo o input()',
        code:
`nome = input("Digite seu nome: ")

print(nome)`,
        explanation:
          'A função input() permite receber uma informação digitada pelo usuário.'
      },

      {
        type: 'analogy',
        title: '🎤 Pense em um microfone',
        text:
          'Se o print() funciona como um alto-falante, o input() pode ser imaginado como um microfone: ele recebe uma informação e entrega essa informação ao programa.'
      },

      {
        type: 'text',
        title: 'Guardando a resposta',
        text:
          'Normalmente armazenamos a informação recebida pelo input() em uma variável para que possamos utilizá-la depois.'
      },

      {
        type: 'code',
        title: 'Usando uma resposta',
        code:
`nome = "Carlos"

print("Olá,", nome)`,
        explanation:
          'Neste exemplo estamos simulando uma informação recebida e utilizando seu conteúdo depois.',
        output:
          'Olá, Carlos'
      },

      {
        type: 'challenge',
        title: '🧠 Sua vez',
        description:
          'A variável nome já possui o valor "Carlos". Mostre a mensagem "Olá, Carlos".',
        hint:
          'Você pode usar print("Olá,", nome).',
        starterCode:
`nome = "Carlos"

# escreva seu código abaixo
`,
        expectedOutput:
          'Olá, Carlos'
      },

      {
        type: 'tip',
        text:
          'Neste exercício estamos simulando a entrada de dados para que você possa praticar diretamente no terminal do aplicativo.'
      },

      {
        type: 'summary',
        title: '🎯 O que você aprendeu',
        items: [
          'input() permite receber informações.',
          'Podemos guardar uma entrada em uma variável.',
          'Depois podemos reutilizar esse valor.',
          'Entrada e saída permitem criar programas interativos.'
        ]
      }
    ]
  },


  // =========================================================
  // AULA 06
  // =========================================================
  {
    id: 6,
    number: 'AULA 06',
    icon: '🧠',
    title: 'Condições com if e else',
    description:
      'Faça o programa tomar decisões de acordo com diferentes situações.',

    content: [
      {
        type: 'text',
        title: 'Programas podem tomar decisões',
        text:
          'Nem sempre um programa executa exatamente o mesmo caminho. Podemos definir condições para que determinadas instruções sejam executadas apenas em algumas situações.'
      },

      {
        type: 'analogy',
        title: '🚦 Pense em um semáforo',
        text:
          'Se o sinal estiver verde, você pode seguir. Caso contrário, deve esperar. O programa pode analisar condições de uma forma parecida.'
      },

      {
        type: 'code',
        title: 'Usando if',
        code:
`idade = 20

if idade >= 18:
    print("Maior de idade")`,
        explanation:
          'O código dentro do if será executado somente quando a condição for verdadeira.',
        output:
          'Maior de idade'
      },

      {
        type: 'text',
        title: 'E se a condição for falsa?',
        text:
          'Podemos utilizar else para indicar o que deverá acontecer quando a condição do if não for verdadeira.'
      },

      {
        type: 'code',
        title: 'Usando if e else',
        code:
`idade = 16

if idade >= 18:
    print("Acesso permitido")
else:
    print("Acesso negado")`,
        explanation:
          'Como idade é menor que 18, o bloco do else será executado.',
        output:
          'Acesso negado'
      },

      {
        type: 'tip',
        text:
          'Observe os espaços antes do print(). Em Python, a indentação faz parte da estrutura do código.'
      },

      {
        type: 'challenge',
        title: '🧠 Desafio final',
        description:
          'A variável idade possui o valor 20. Crie uma condição que mostre "Acesso permitido" quando idade for maior ou igual a 18.',
        hint:
          'Use if idade >= 18: e lembre-se de indentar o print().',
        starterCode:
`idade = 20

# escreva sua condição abaixo
`,
        expectedOutput:
          'Acesso permitido'
      },

      {
        type: 'summary',
        title: '🎯 O que você aprendeu',
        items: [
          'if executa código quando uma condição é verdadeira.',
          'else pode ser usado quando a condição é falsa.',
          'Operadores como >= podem comparar valores.',
          'Indentação é importante em Python.'
        ]
      }
    ]
  }

];