export default {
  global: {
    componenteFormativo:
      'Análisis y solución de problemas aplicando algoritmos',
    descripcionCurso:
      'El avance tecnológico lleva implícito la frontera del conocimiento. Esto, a su vez, genera nuevos conceptos, terminologías, notaciones, nomenclaturas y su representación a través de diagramas, planos o artefactos que terminan convirtiéndose en un lenguaje natural de la tecnología en cuestión. En este componente se presentan los artefactos, diagramas y nomenclaturas con los que se describen los algoritmos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodología de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diseño',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagramas de flujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elaborar diagramas de flujo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Herramientas digitales para creación y prueba de algoritmos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Uso de identificadores y palabras reservadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Operadores y jerarquía en los operadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estructuras de control secuencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ejemplo estructura de control secuencial',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estructura condicional',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructuras de iteración o de repetitivas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estructura de datos (arreglos, matrices)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Vectores',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Matrices',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Programación modular',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Conceptos básicos de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Entornos de codificación e instalación JavaScript',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Sintaxis del lenguaje JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Funciones y operaciones matemáticas',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Tipos de datos, operadores y orden de evaluación',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Expresiones y comentarios.',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Estructuras de selección ',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo: 'Estructuras de repetición ',
            hash: 't_10_5',
          },
          {
            numero: '10.6',
            titulo: 'Estructuras de datos',
            hash: 't_10_6',
          },
          {
            numero: '10.7',
            titulo: 'Estructuras de salto',
            hash: 't_10_7',
          },
          {
            numero: '10.8',
            titulo: 'Métodos de ordenamiento y búsqueda',
            hash: 't_10_8',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Depuración y fallas de sintaxis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Fallas de lógica  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Manejo de errores y excepciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228139-CF05-DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Diagramas de flujo',
      referencia:
        'Material_Audiovisual_100319633. (6 de enero de 2021). App Diagrams.net (básico para diagramas de flujo).',
      tipo: 'Video',
      link: 'https://youtu.be/jdnqmFpqTvo ',
    },
    {
      tema: '2. Diagramas de flujo',
      referencia:
        'Enrique Olivares. (23 de febrero de 2016). Introducción a utilizar el programa DIA para diagramas de flujo a nivel bachillerato. ',
      tipo: 'Video',
      link: 'https://youtu.be/DnRx9D7QWg8',
    },
    {
      tema: '2. Diagramas de flujo',
      referencia:
        'DiscoDurodeRoer. (27 de abril de 2015). Ejercicios PseInt - Básicos #1 - Empezando por lo básico.',
      tipo: 'Video',
      link: 'https://youtu.be/DHIi4dcaMEc ',
    },
    {
      tema: '2. Diagramas de flujo',
      referencia:
        'Insituto de Informática Uach. (08 de septiembre de 2020). Cómo descargar Draw.io 2 para dibujar diagramas de flujo.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=encz3h8TLWA',
    },
    {
      tema: '9. Entornos de codificación e instalación',
      referencia:
        'Framebits. (19 de enero de 2020). Descargar e instalar Node Js en Windows 10. [Video].',
      tipo: 'Video',
      link: 'https://youtu.be/v0x1Ku5Tgac',
    },
    {
      tema: '9. Entornos de codificación e instalación',
      referencia:
        'Code Compadre. (30 de junio de 2020). How to Download and Install Visual Studio Code for Windows 10. ',
      tipo: 'Video',
      link: 'https://youtu.be/KpzkPlh_HsU',
    },
    {
      tema: '9. Entornos de codificación e instalación',
      referencia:
        'VideoMarketingViral. (11 de enero de 2020). Descargar Google Chrome para PC 2021 (WINDOWS 7/8/10). [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/V-M2rMBhgKc',
    },
    {
      tema: '10. Sintaxis del lenguaje JavaScript',
      referencia: 'MDN. (2021). Array – JavaScript. ',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math ',
    },
    {
      tema: '10. Sintaxis del lenguaje JavaScript',
      referencia: 'MDN. (2021). Expresiones y operadores – JavaScript. ',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators ',
    },
    {
      tema: '10. Sintaxis del lenguaje JavaScript',
      referencia: 'MDN. (2021). Funciones – JavaScript. ',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions ',
    },
    {
      tema: '10. Sintaxis del lenguaje JavaScript',
      referencia: 'MDN. (2021). Array.prototype.find() – JavaScript.',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find ',
    },
    {
      tema: '10. Sintaxis del lenguaje JavaScript',
      referencia:
        'Choque, R. C. (10 de mayo de 2020). Cómo usar la consola de Google Chrome para JavaScript. [Video] YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/Hf3n-p3VYx4 ',
    },
    {
      tema: '10. Sintaxis del lenguaje JavaScript',
      referencia:
        'Autodidacta, F. (11 de mayo de 2017). Depurar o hacer debug a JavaScript con Google Chrome. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/I388w3wDkjc ',
    },
  ],
  glosario: [
    {
      termino: 'Código fuente',
      significado:
        'compuesto por la línea de texto de un programa en determinado lenguaje de programación.',
    },
    {
      termino: 'Código máquina',
      significado:
        'código de instrucciones que directamente interpreta el circuito microprogramable microprocesador de una computadora.',
    },
    {
      termino: 'Compilador',
      significado:
        'programa de computador encargado de traducir el código fuente de otro programa escrito en un lenguaje de programación a otro lenguaje de programación.',
    },
    {
      termino: 'Concatenar',
      significado: 'unir o enlazar dos o más cosas (RAE, 2021).',
    },
    {
      termino: 'Iteración',
      significado:
        'es repetir sucesivas veces un proceso con la finalidad de lograr una meta resultado u objetivo. A cada repetición del proceso también se le denomina "iteración", generalmente, y los resultados obtenidos en una iteración se emplean como punto de partida hacia la siguiente iteración.',
    },
    {
      termino: 'Modularidad',
      significado:
        'consiste en dividir un programa en módulos, cada uno de ellos debe poder ejecutarse por separado, pero están diseñados para trabajar con otros módulos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autodidacta, F. (11 de mayo de 2017). Depurar o hacer debug a JavaScript con Google Chrome. [Video]',
      link: 'https://www.youtube.com/watch?v=I388w3wDkjc&t=192s',
    },
    {
      referencia:
        'Choque, R. C. (10 de mayo de 2020). Cómo usar la consola de Google Chrome para JavaScript. [Video]',
      link: 'https://www.youtube.com/watch?v=Hf3n-p3VYx4',
    },
    {
      referencia:
        'Framebits. (19 de enero de 2020). Descargar e instalar Node Js en Windows 10. [Video].',
      link: 'https://youtu.be/v0x1Ku5Tgac',
    },
    {
      referencia:
        'López, J. (2009). Algoritmos y programación (guía para docentes).',
      link: 'https://eduteka.icesi.edu.co',
    },
    {
      referencia: 'MDN. (2021). Array - JavaScript.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array',
    },
    {
      referencia: 'MDN. (2021a). Expresiones y operadores - JavaScript.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators',
    },
    {
      referencia: 'MDN. (2021b). Math - JavaScript.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math',
    },
    {
      referencia:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    },
    {
      referencia: 'MDN. (2021d). Funciones - JavaScript',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions',
    },
    {
      referencia:
        'MDN. (2021e). Tipos de datos y estructuras en JavaScript - JavaScript.',
      link: 'https://developer.mozilla.org/es/docs/Web/',
    },
    {
      referencia:
        'Resnick, M. (2007). Sembrando semillas para una sociedad más creativa.',
      link: 'https://eduteka.icesi.edu.co/articulos/ScratchResnickCreatividad',
    },
    {
      referencia:
        'Rojas A., V. y Ñacato C., J. (1980). Técnica de flujogramas I. Editora Andina.',
    },
    {
      referencia: 'Vázquez, J. (2012). Análisis y diseño de algoritmos.',
    },
    {
      referencia: 'Vedia, M. (2018). Cuándo usar Return en JavaScript.',
      link:
        'https://medium.com/@mvtercero85/cuando-usar-return-en-javascript-7b80e025eb7f',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de gestión industrial - Regional Bogotá',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de gestión industrial - Regional Bogotá',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la industria y la comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la industria y la comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
