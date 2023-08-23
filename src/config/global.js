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
        download: 'downloads/prueba.pdf',
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
      tema: '1.1 Planeación',
      referencia:
        'todopmp.com. (s.f.). <em>Guía PMBOK 6 – 49 procesos, entradas, herramientas y salidas</em>.',
      tipo: 'Página web',
      link: 'https://todopmp.com/cards/',
    },
    {
      tema: '1.1 Planeación',
      referencia:
        'EDAP – Project Business School. (2016). <em>MOOC PMP 302 Identificar Interesados</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aUkTxgaajBo',
    },
    {
      tema: '1.1 Planeación',
      referencia:
        'Virtual Training Lteam. (2016). <em>Partes Interesadas Stakeholders</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
    },
    {
      tema: '1.1 Planeación',
      referencia:
        'Calle, M. (2020). <em>Análisis de Interesados Mariz Poder Interés - PMI</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hDZ0uu0H1wc',
    },
    {
      tema: '1.2 Técnicas e instrumentos para elicitar requisitos',
      referencia:
        'Jibaro X. (2019). <em>Tipos de Pregundas en una encuesta</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mwnQuUi9014',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida <em>software</em>',
      significado:
        'se refiere a la aplicación de metodologías para el desarrollo del sistema <em>software</em> (AECC, 1986).',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <em>software</em>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Ágil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'el requerimiento se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'es la condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas (ISO 29148).',
    },
  ],
  referencias: [
    {
      referencia:
        'Baar, B. (2006). Using Stakeholder Analysis in Software Project Management. Universidad de Amsterdam.',
    },
    {
      referencia:
        'Braude, J. (2003). Ingeniería de software, una perspectiva orientada a objetos. Alfaomega.',
    },
    {
      referencia:
        'Cohen, L. (2011). Métodos de investigación educativa. La Muralla.',
    },
    {
      referencia:
        'Cohn, M. (2004). User Stories Applied for Agile Software Development. Pearson Education, Inc.',
    },
    {
      referencia:
        'Cox, K., Niazi, M., y Verner, J. (2009). Empirical study of Sommerville and Sawyer’s requirements engineering practices. IET Software, 3(5), 339.',
      link: 'https://doi.org/10.1049/iet-sen.2008.0076',
    },
    {
      referencia:
        'Curso de interacción persona-ordenador. (2021). Storyboarding',
      link: 'https://mpiua.invid.udl.cat/storyboarding',
    },
    {
      referencia:
        'Denscombe, M. (2010). The Good Research Guide. McGraw-Hill Education.',
    },
    {
      referencia:
        'Dornyei, Z. (2010). Questionnaires in Second Language Research: Construction, Administration, and Processing. Routledge.',
    },
    {
      referencia:
        'Durán, A., Bernárdez, B., Ruiz, A. y Toro, M. (1999). A Requirements Elicitatio Approach Based in Templates and Patterns.',
      link:
        'https://www.researchgate.net/publication/2890318_A_Requirements_Elicitation_Approach_Based_in_Templates_and_Patterns',
    },
    {
      referencia:
        'Gause, C., & Weinberg, G. M. (1989). Exploring Requirements: Quality Before Design. Dorset House.',
    },
    {
      referencia:
        'Granollers, T., Lorés, J., y Perdrix F. (2002). Prototipado. Capítulo 5: modelo de proceso de la ingeniería de la usabilidad y de la accesibilidad.',
    },
    {
      referencia:
        'Hernández, S., Fernández C., y Baptista L. (2006). Metodología de la investigación. McGraw Hill.',
    },
    {
      referencia:
        'Herrera J., Lizka J. (2003). Ingeniería de requerimientos, ingeniería de software.',
      link: 'http://www.monografias.com/trabajos6/resof/resof.shtml',
    },
    {
      referencia:
        'La oficina de proyectos de informática (2012). PMOinformatica.com.',
      link:
        'http://www.pmoinformatica.com/2012/10/plantillas-scrum-historias-de-usuario.html',
    },
    {
      referencia:
        'Piattini M., Calvo-Manzano J., Cervera J., y Fernández, L. (2004). Análisis y diseño de aplicaciones informáticas de gestión. Una perspectiva de ingeniería de software. Alfaomega-Rama.',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería de software. Pearson Educación.',
    },
    {
      referencia:
        'Ventura, M. T. (2002). La ingeniería de requerimientos como factor clave para el éxito de los proyectos de desarrollo de software.',
      link: 'http://132.248.9.195/ppt2002/0307178/Index.html',
    },
    {
      referencia:
        'Wessinger, K., (2012) Project Stakeholder Management. Engineering Management Journal, 14(84), 19-24.',
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
            'Centro para la industria de la comunicación gráfica - Regional Distrito Capital',
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
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Actividad didáctica',
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
