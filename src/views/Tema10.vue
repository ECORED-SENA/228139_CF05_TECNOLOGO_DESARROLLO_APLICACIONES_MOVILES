<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Sintaxis del lenguaje JavaScript

    figure.mb-5
      img(src='@/assets/curso/temas8-13/img4.jpg', alt='')
    p.mb-5 En adelante, se presentan las características básicas de la sintaxis de JavaScript, codificando algoritmos básicos, para ejemplificar la estructura propia del lenguaje de programación, sin embargo, se recomienda que siempre que se esté codificando algoritmos, se pueda tener a disposición la documentación técnica oficial del lenguaje y material complementario propuesto.

    #t_10_1
    .titulo-segundo.color-acento-contenido
      .h2 10.1 Funciones y operaciones matemáticas

    p En JavaScript se pueden utilizar muchas funciones matemáticas; por ejemplo, un algoritmo que toma dos números (8 y 6) y le aplica las 4 operaciones básicas y en el editor de código online PlayCode (disponible en &nbsp;
      a.link(href="https://playcode.io/" target="_blank") https://playcode.io/)
      | &nbsp; se revisan las características de la sintaxis del JavaScript y a la vez se conocen las operaciones matemáticas del lenguaje.

    p.mb-5 Ingresar en la ruta del navegador a &nbsp;
      a.link(href="https://playcode.io/new" target="_blank") https://playcode.io/new
      |, &nbsp; escribir el código de la línea 1 a la 12 en la pestaña script.js como se muestra en la siguiente figura:


    .row.justify-content-center.mb-5
      .col-12.col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Operaciones aritméticas con Javascript

        figure
          img(src='@/assets/curso/temas8-13/img5.jpg', alt='Imagen que muestra la el código para la función solicitada, las operaciones aritméticas con javascript y sus respectivos resultados en la consola' style='width: 427px').m-auto

    .tarjeta-azul.mb-5
      .row.p-5
        .col-lg-2
          img(src='@/assets/curso/temas8-13/img6.svg', alt='' style='width: 90px').m-auto
        .col-lg-10
          .h4 Explicación:

          p En las líneas 1 y 2 aparece la palabra reservada #[strong let] que sirve para indicar que se define una variable accesible en el contexto donde se crea (cuando se vea programación modular quedará más claro esto del contexto).

          figure
            img(src='@/assets/curso/temas8-13/img7.jpg', alt='').my-3

          p Las variables #[strong numero1] y #[strong numero2] se les asigna el valor correspondiente. Es de observar que se definen y se inicializa la variable en una misma línea, esto es una característica del lenguaje.
          img(src='@/assets/curso/temas8-13/img8.jpg', alt='').my-3
          p Luego en las líneas 4 al 7 se crean o se definen unas variables con la palabra reservada #[strong var], a diferencia de la palabra #[strong let] estas variables se pueden ver desde cualquier parte o módulo del script.
          img(src='@/assets/curso/temas8-13/img9.jpg', alt='').my-3
          p Una vez se crean las variables con identificadores suma, resta, producto, division, también son inicializados sus valores empleando las operaciones matemáticas respectivas.
          p Una de las formas que JavaScript permite mostrar los resultados es con la función log del objeto console y se accede #[strong console.log()] (con el operador punto .) y entre paréntesis lo que se desea mostrar en la pantalla de la consola.
          img(src='@/assets/curso/temas8-13/img10.jpg', alt='').my-3
    .tarjeta-azul.mb-5
      .row.p-5
        .col-lg-2
          img(src='@/assets/curso/temas8-13/img11.svg', alt='' style='width: 90px').m-auto
        .col-lg-10
          .h4 Validación:
          p Dentro de los paréntesis &nbsp;
            span.span-code-1.p-1 "la suma es: "
            span.span-code-2.p-1 +
            span.span-code-3.p-1 suma
            |, aparece la operación más + usado para sumar dos números antes, solo que acá no hay dos números sino una cadena de texto y un número, pero en este caso lo que hace el operador + es concatenar o juntar el texto “la suma es:” y el valor de la variable suma. A esta característica de los operadores se les llama sobrecarga de operadores, porque según el tipo de datos suma y según otra concatena.
    p Cuando las operaciones matemáticas son más complejas como la raíz cuadrada, la función exponencial, las funciones trigonométricas, existe un objeto que agrupa estas funciones se llama Math, puede ver la documentación técnica de la clase completa en Math (MDN, 2021b), a continuación, un ejemplo de su uso.
    p Se debe crear un algoritmo que muestre el seno del valor PI (3,1416) multiplicado por 3 la función, y también que nos eleve 6 a la tercera potencia mostrando su resultado:

    .row.justify-content-center.mb-5
      .col-12.col-lg-6

        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Uso del objeto Math

        figure.mb-5
          img(src='@/assets/curso/temas8-13/img12.jpg', alt='' style='width: 427px').m-auto

    p Se debe escribir el código fuente y obtener los mismos resultados en la consola, de esta forma se familiariza con la herramienta de trabajo.

    .tarjeta.tarjeta--gris.px-5.py-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas8-13/img13.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Métodos del objeto Math
              p.text-small.mb-0 Conozca el listado de funciones de la clase Math, descargando la tabla que se propone a continuación.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/DI_CF3_Funciones_clase_Math.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5 Todas las funciones matemáticas se pueden combinar con otras operaciones aritméticas o emplear operadores de evaluación de condición y previo a ello es preciso conocer los diferentes tipos de datos que existen.

    #t_10_2
    .titulo-segundo.color-acento-contenido
      .h2 10.2 Tipos de datos, operadores y orden de evaluación

    p.mb-5 Existen muchos tipos de operadores para JavaScript, cuya función es realizar una operación entre dos o más valores contenidos en variables, constantes o acumuladores:

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 A. Tipos de datos

    p JavaScript tiene los siguientes tipos de operadores (se describirán los principales para aprender a programar).
    p Según sea el tipo que las variables o constantes almacenan, se pueden clasificar en seis (6) tipos de datos primitivos la referencia del lenguaje dice que son:

    ul.lista-ul--color.mb-5
        li
          i.fas.fa-check
          span #[strong Undefined:] indeterminado o indefinido.
        li
          i.fas.fa-check
          span #[strong Boolean:] tipo booleano los valores posibles son true o false.
        li
          i.fas.fa-check
          span #[strong Number:] números enteros, o decimales.
        li
          i.fas.fa-check
          span #[strong String:] cadenas de texto.
        li
          i.fas.fa-check
          span #[strong BigInt:] números enteros grandes.
        li
          i.fas.fa-check
          span #[strong Symbol:] referencia a otros datos.

    p.mb-4 Otros tipos de datos más complejos o abstractos de datos:

    ul.lista-ul--color.mb-5
        li
          i.fas.fa-check
          span #[strong Null:] tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra null.
        li
          i.fas.fa-check
          span #[strong Object:] tipo estructural especial que no es de datos, pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos (new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new).
        li
          i.fas.fa-check
          span #[strong Function:] una estructura sin datos, aunque también responde al operador t.

    p.mb-4 Cuando se declaran variables se debe considerar los siguientes tipos, ya se han usado dos (2) de ellas:

    ul.lista-ul--color.ps-2.mb-5
        li
          i.fas.fa-check
          span #[strong var:] declara una variable, opcionalmente la inicia a un valor.
        li
          i.fas.fa-check
          span #[strong let:] declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
        li
          i.fas.fa-check
          span #[strong const:] declara un nombre de constante de solo lectura y ámbito de bloque.

    p.mb-5 Para ampliar la información de acuerdo con los tipos de datos y estructuras, se debe revisar el material complementario dispuesto:

    a.anexo.mb-4.mb-lg-5(href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_Types#tipos_de_datos" target="_blank" style="width: 422px")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p.mb-0 Enlace web. Tipos de datos y estructuras en JavaScript. (MDN, 2021e).

    p.mb-5 Una variable en JavaScript puede tener cualquier tipo de dato, entero, real, cadena de texto etc. JavaScript no es un lenguaje fuertemente tipado de manera que queda en el programador la responsabilidad de saber qué tipo de dato está almacenando en cada variable.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 B. Operadores

    p.mb-5.mt-3 Se considera una expresión, aunque de un tipo distinto, el asignar un valor a una variable. Para todas estas operaciones se emplean los denominados ‘operadores‘. Se listan a continuación algunos de los operadores que se utilizan con mucha frecuencia.

    TabsC.mb-5
      .p-4(titulo="Operadores de asignación")
        .row.mb-5
          .col-md-7.mb-4.mb-md-0
            .h4 Operadores de asignación
            p Un operador de asignación asigna un valor a la variable a la izquierda basándose en el valor de su operando derecho. El operador de asignación más simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de y a x. A continuación, se presenta una lista de operadores más usados.
            p También hay operadores de asignación compuestos que son una abreviatura de las operaciones enumeradas en la siguiente tabla:
          .col-md-5
            figure
              img(src='@/assets/curso/temas8-13/img14.svg', alt='' style='width:245px' ).m-auto

        .tabla-a
          table

            thead.header1
              tr
                th Nombre
                th Operador abreviado
                th Significado
            tbody
              tr
                td.text-center Asignación.
                td.text-center x = y
                td.text-center x = y
              tr
                td.text-center Asignación de adición
                td.text-center x += y
                td.text-center x = x + y
              tr
                td.text-center Asignación de resta
                td.text-center x -= y
                td.text-center x = x - y
              tr
                td.text-center Asignación de multiplicación
                td.text-center x *= y
                td.text-center x = x * y
              tr
                td.text-center Asignación de división
                td.text-center x /= y
                td.text-center x = x / y
              tr
                td.text-center Asignación de residuo
                td.text-center x %= y
                td.text-center  x = x % y
              tr
                td.text-center Asignación de exponenciación
                td.text-center x **= y
                td.text-center  x = x ** y
      .p-4(titulo="Operadores de comparación")
        .row.mb-5
          .col-md-7.mb-4.mb-md-0
            .h4 Operadores de comparación
            p Son operadores cuya función es comparar dos expresiones y como resultado de la comparación devuelven un valor falso o verdadero (booleano), que representa la relación de sus valores comparados. Existen operadores para comparar valores numéricos, pero también operadores para comparar cadenas y operadores para comparar otros tipos de datos (tabla 3).

          .col-md-5
            figure
              img(src='@/assets/curso/temas8-13/img15.svg', alt='' style='width:245px' ).m-auto

        .tabla-a
          table
            thead.header1
              tr
                th Operador
                th Descripción
                th Ejemplos que devuelven true
            tbody
              tr
                td Igual (==)
                td.text-center Devuelve true si los operandos son iguales.
                td.text-center 3 == var1
                    br
                    br
                    |"3" == var1
                    br
                    br
                    | 3 == '3'
              tr
                td No es igual (!=)
                td.text-center Devuelve true si los operandos no son iguales.
                td.text-center var1 != 4
                    br
                    br
                    |var2 != "3"
              tr
                td Estrictamente igual (===)
                td.text-center Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS.
                td.text-center 3 === var1
              tr
                td Desigualdad estricta (!==)
                td.text-center Devuelve true si los operandos son del mismo tipo, pero no iguales, o son de diferente tipo.
                td.text-center var1 !== "3"
                  br
                  br
                  | 3 !== '3'
              tr
                td Mayor que (>)
                td.text-center Devuelve true si el operando izquierdo es mayor que el operando derecho.
                td.text-center var2 > var1
                  br
                  br
                  | "12" > 2
              tr
                td Mayor o igual que (>=)
                td.text-center Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
                td.text-center var2 >= var1

                  br
                  br
                  | var1 >= 3
              tr
                td Menor que (<)
                td.text-center Devuelve true si el operando izquierdo es menor que el operando derecho.
                td.text-center var1 < var2
                  br
                  br
                  | "2" < 12
              tr
                td Menor o igual (<=)
                td.text-center Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
                td.text-center var1 <= var2
                  br
                  br
                  | var2 <= 5
      .p-4(titulo="Operadores de aritméticos")
        .row.mb-5
          .col-md-7.mb-4.mb-md-0
            .h4 Operadores de aritméticos
            p Los operadores aritméticos toman valores numéricos (ya sean     literales o variables) como sus operandos y devuelve un solo valor numérico. #[strong Los operadores aritméticos básicos son suma (+), resta (-),multiplicación (*) y división (/)].Estos operadores funcionan como en la mayoría de los otros     lenguajes de programación cuando se usan con números de punto flotante, teniendo en cuenta que la división por cero produce un error.

          .col-md-5
            figure
              img(src='@/assets/curso/temas8-13/img16.svg', alt='' style='width:245px' ).m-auto

        .tabla-a
          table

            thead.header1
              tr
                th Operador
                th Descripción
                th Ejemplo
            tbody
              tr
                td Residuo (%)
                td.text-center Operador binario. Devuelve el resto entero de dividir los dos operandos.
                td.text-center 12 % 5 devuelve 2
              tr
                td Incremento (++)
                td.text-center Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.
                td.text-center Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y, solo entonces, establece x en 4.
              tr
                td Decremento (--)
                td.text-center Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.
                td.text-center Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2.
              tr
                td Negación unaria (-)
                td.text-center Operador unario. Devuelve la negación de su operando.
                td.text-center Si x es 3, entonces -x devuelve -3.
              tr
                td Positivo unario (+)
                td.text-center Operador unario. Intenta convertir el operando en un número, si aún no lo es.
                td.text-center +"3" devuelve 3. +true devuelve 1.
              tr
                td Operador de exponenciación (**)
                td.text-center Calcula la base a la potencia de exponente, es decir, base exponente.
                td.text-center 2 ** 3 retorna 8.
                  br
                  br
                  |10 ** -1 retorna 0.1.

      .p-4(titulo="Operadores lógicos")
        .row.mb-5
          .col-md-7.mb-4.mb-md-0
            .h4 Operadores lógicos
            p Con los operadores lógicos, se pueden crear condiciones compuestas, por ejemplo, cuando se deben cumplir dos o más condiciones para elegir las operaciones ejecutar; además, se pueden describir estas combinaciones de condiciones (tabla 5 y figura 5).

          .col-md-5
            figure
              img(src='@/assets/curso/temas8-13/img17.svg', alt='' style='width:245px' ).m-auto

        .tabla-a
          table

            thead.header1
              tr
                th Operador
                th Uso
                th Descripción
            tbody
              tr
                td AND Lógico (&&)
                td.text-center expr1 && expr2
                td.text-center Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
              tr
                td OR lógico (||)
                td.text-center expr1 || expr2
                td.text-center Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
              tr
                td NOT lógico (!)
                td.text-center !expr
                td.text-center Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.

    a.anexo.mb-4.mb-lg-5(href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators " target="_blank" style="width:   422px")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p #[strong Enlace web.] Tipos de datos y estructuras en JavaScript. (MDN, 2021e).

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 C. Orden de evaluación de operadores.

    p.mb-5 Es importante recordar que los computadores ejecutan los operadores en un orden establecido. El siguiente es el orden (jerarquía), de acuerdo con los expuestos anteriormente, y deben conservar el orden de precedencia de operadores:
    ol.lista-ol--cuadro.mb-5
        li
          .lista-ol--cuadro__vineta
            span 1
          span #[strong Paréntesis] (se ejecutan primero los más internos).
        li
          .lista-ol--cuadro__vineta
            span 2
          span #[strong Signo] (-2), si un valor es positivo o negativo.
        li
          .lista-ol--cuadro__vineta
            span 3
          span #[strong Potencias] (^) y #[strong raíces y otras funciones] (Math.sqrt()); #[strong productos y divisiones] ( * y /), en este mismo orden.
        li
          .lista-ol--cuadro__vineta
            span 4
          span #[strong Sumas y Restas] (+ y -).
        li
          .lista-ol--cuadro__vineta
            span 5
          span #[strong Concatenación] (+).
        li
          .lista-ol--cuadro__vineta
            span 6
          span #[strong Relacionales] (=, <, >).
        li
          .lista-ol--cuadro__vineta
            span 7
          span #[strong Negación] (no).
        li
          .lista-ol--cuadro__vineta
            span 8
          span #[strong Conjunción] (y).
        li
          .lista-ol--cuadro__vineta
            span 9
          span #[strong Disyunción] (o).

    #t_10_3
    .titulo-segundo.color-acento-contenido
      .h2 10.3 Expresiones y comentarios.

    p.mb-5 JavaScript permite poner comentarios en el código fuente, como la mayoría de los lenguajes de programación y existen dos tipos de comentarios en línea que comienzan con una doble barra: //, y los comentarios multilínea, que comienzan con /* y terminan con */ tal como se observa en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-12.col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span Tipos de comentarios

        figure.mb-5
          img(src='@/assets/curso/temas8-13/img19.jpg', alt='Imagen de código fuente donde se han ingresado comentarios en línea; en este caso los comentarios comienzan con doble barra inclinada.' style="width:660px").m-auto

    p Los comentarios son importantes porque le dan mantenibilidad al programa, es decir que otro programador, o el mismo, tiempo después puede revisar el código y apoyarse en los comentarios para saber qué hace el algoritmo y como lo hace.
    p.mb-5 En adelante se procura que exista al menos un comentario en cada código fuente empleado para ejemplificar los elementos constitutivos del lenguaje de programación JavaScript y puede hacer lo mismo durante la creación de los diferentes códigos.

    #t_10_4
    .titulo-segundo.color-acento-contenido
      .h2 10.4 Estructuras de selección

    p.mb-5 La estructura de selección se necesita cuando el código de tu programa ejecuta uno de varios resultados posibles, basado en el valor de una condición.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo:] un aprendiz aprueba un examen cuando la calificación de este es mayor o igual a 3. Elaborar un programa  en JavaScript donde que dada una calificación, aplique el criterio de aprobación e imprima “Aprobado” o “Reprobado”, según sea el caso.


    p.my-5 Como resultado del análisis a este problema tenemos el diseño del siguiente algoritmo:

    .tarjeta-azul2.p-5.mb-5
      figure
        img(src='@/assets/curso/temas8-13/img20.svg', alt='' ).m-auto

    p.my-5 El mismo algoritmo se puede visualizar, pero ya en lenguaje de programación:
    .row.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 13.
          span Algoritmo calificaciones en Java Script

        figure
          img(src='@/assets/curso/temas8-13/img21.jpg', alt='Imagen que muestra el algoritmo de calificaciones en Java Script, según el ejemplo propuesto.').m-auto


      .col-lg-6
        p Como la línea 1 empieza con /* quiere decir que toda continuación será un comentario hasta que aparezca los caracteres */ (línea 3), en él se debe escribir que hace el algoritmo y otra información que se verá más adelante.

        p En la línea 4 se define un valor constante (es decir no se modificará más en todo el algoritmo donde definimos) se ha puesto por identificador la palabra calificacion.

        .tajeta-amarilla.p-3
          p #[strong Para recordar:] una palabra reservada es una palabra que no se puede utilizar como identificador de algún dato.

    p.mb-5 En la línea 6 ocurren varias cosas que se deben tener en cuenta:

    ol.lista-ol--cuadro.mb-5
        li
          .lista-ol--cuadro__vineta
            span 1
          span Se usa la palabra reservada if y entre paréntesis la condición que la se quiere comparar.

        li
          .lista-ol--cuadro__vineta
            span 2
          span Se emplea el símbolo corchete abierto { se llama abrir corchete.

        li
          .lista-ol--cuadro__vineta
            span 3
          span En la línea 7 se envía  la instrucción de que imprima el resultado de que aprobó.
        li
          .lista-ol--cuadro__vineta
            span 4
          span En la línea 8 se cierra un bloque de código con el símbolo corchete cerrado }, esto quiere decir  que hasta este punto termina el bloque. A todo lo que esté entre estos corchetes se le llamará CONTEXTO, en el primer contexto están agrupadas las operaciones que se ejecutarán si la condición calificacion >= 3 es verdadera.
        li
          .lista-ol--cuadro__vineta
            span 5
          span También en la línea 8 se observa la palabra reservada else, que sirve para indicarle al intérprete de JavaScript que se creará un bloque o contexto para cuando la condición evaluada por el if no se cumpla, y enseguida se abre el contexto con el carácter corchete abierto {.
        li
          .lista-ol--cuadro__vineta
            span 6
          span Luego, en la línea 9 se ha puesto la operación de escribir en la consola que ha reprobado.

        li
          .lista-ol--cuadro__vineta
            span 7
          span Para finalizar el contexto, se cierra con el carácter corchete cerrado }.

    p Ahora se debe escribir el programa y cambiar los valores de la constante para validar que el algoritmo está bien diseñado.

    hr.hr.my-5

    p.mb-5 De la misma forma, se puede realizar el algoritmo que, dada una edad en años, evalúe e imprima si es mayor de edad:

    .row.mb-5
      .col-lg-6

        .titulo-sexto.color-acento-contenido
          h5 Figura 14.
          span Escribir en pantalla si es o no mayor de edad

        figure
          img(src='@/assets/curso/temas8-13/img22.jpg', alt='Imagen que muestra el algoritmo de ser o no mayor de edad, según el ejemplo propuesto.').m-auto

      .col-lg-6
        p.mb-3 De acuerdo con la figura 14, no existe un contexto si no se cumple la condición de mayoría de edad a esta estructura se denomina #[strong CONDICIONAL SIMPLE].

        p El flujo de ejecución del algoritmo anterior es básico y puede haber otros mucho más complejos como las estructuras de repetición o iterativas que también tienen una sintaxis particular.

    #t_10_5
    .titulo-segundo.color-acento-contenido
      .h2 10.5 Estructuras de repetición

    p.mb-5 Las estructuras de repetición permiten repetir un bloque de instrucciones, determinado o no, un número de veces. A continuación, se ejemplifican los más comunes (#[code FOR], #[code WHILE]) que se pueden codificar también en la sintaxis de JavaScript.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-55 A. Estructura de repetición #[code FOR]

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo 1:] escribir un procedimiento que muestre siete (7) veces en pantalla la frase “Esto es un algoritmo”. Mostrar en pantalla la salida del ejercicio.

    .row.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 15.
          span Imprimir 7 veces un mensaje

        figure
          img(src='@/assets/curso/temas8-13/img23.jpg', alt='Imagen que muestra el código para imprimir 7 veces un mensaje, según ejemplo propuesto.').m-auto


      .col-lg-6
        p Como se puede observar en la línea 4, se ha usado la palabra reservada #[code.etiqueta for] y dentro del paréntesis aparecen tres (3) instrucciones (separadas por punto y coma).
        p La primera instrucción #[code.etiqueta let i = 0;] es la creación e inicialización de una variable con identificador #[code.etiqueta i], como se usó la palabra reservada let se está indicado que la variable i solo podrá ser accedida dentro del contexto del #[code.etiqueta for].
        p Luego se ve una condición #[code.etiqueta i < 7;], esta condición significa que mientras que #[code.etiqueta i] tenga valores de 0 a 6 debe ejecutar el bloque o contexto definido en el #[code.etiqueta for] (desde el corchete abierto hasta el corchete cerrado).
        p Una vez ha terminado de ejecutar el contexto (línea 6) se ejecutará la tercera sentencia de la línea 7 o sea #[code.etiqueta i++], esta línea es equivalente a #[code.etiqueta i = i + 1]; incrementar en 1 la variable #[code.etiqueta i], luego de incrementarla procede a evaluar nuevamente la condición y si se cumple volverá a ejecutar las instrucciones que están dentro el contexto (lo que está dentro de paréntesis).
        p Es de notar que los valores toman la variable #[code.etiqueta i] son 0, 1, 2, 3, 4, 5, 6. En total 7 valores el número de veces que se necesita que se repita el bucle.

    .cajon.color-acento-contenido.p-4.mb-4
      .h5 Para recordar:
      p El carácter punto y coma se usa para decirle al computador, o intérprete, que ha finalizado una instrucción. La estructura de repetición PARA (FOR) se usa cuando se sabe cuántas veces se debe repetir un grupo de instrucciones.


    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo 2:] se necesita elaborar un algoritmo en JavaScript que, dado un número entero, sume todos los números naturales que hay hasta ese número. Por ejemplo, si el usuario digita 3, el programa debe sumar: 1 + 2 + 3, si el usuario digita 5 el programa debe sumar 1+2+3+4+5. Al finalizar, debe imprimir el resultado.

    .row.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 16.
          span Sumar los números desde 1 hasta un número.

        figure
          img(src='@/assets/curso/temas8-13/img24.jpg', alt='Imagen que muestra el código para sumar los números desde 1 hasta un número, según ejemplo propuesto.').m-auto

      .col-lg-6
        p Como se puede ver, se decide una constante con valor 5, y una variable que será para el algoritmo un acumulador donde se almacenarán las sumas. También, note que los valores de #[code.etiqueta i] van desde 1 hasta exactamente el valor que tiene la constante (es decir 5).

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 B. Estructura de repetición #[code WHILE]

    p.mt-3.mb-5 A través del ejemplo del cálculo de factorial se explicará el uso y comportamiento de la sentencia while. Recordando el algoritmo diseñado:

    .tarjeta-azul2.p-5.mb-5
      figure
        img(src='@/assets/curso/temas8-13/img25.svg', alt='Imagen del algoritmo de cálculo de factorial con el que se explicará el uso y comportamiento de la sentencia while.' style="width: 360px")

    p.mb-5 De acuerdo con el anterior algoritmo, el resultante para el cálculo de factorial es:

    .row.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 17.
          span Seudocódigo algoritmo cálculo de factorial
        figure.mb-sm-3
          img(src='@/assets/curso/temas8-13/img55.jpg', alt='Imagen que muestra el pseudocódigo algoritmo cálculo de factorial, según el ejemplo en cuestión.')

      .col-lg-5
        p Es ideal poder transcribir el código usando &nbsp;
          a.link(href="https://playcode.io/" target="_blank")
                | https://playcode.io
          |, para lo cual se debe escribir la condición del while, es decir, #[code.etiqueta contador <= numero] de último, para que el sistema #[strong PlayCode] no entre a un ciclo que nunca termina. Una vez funcione correctamente, se propone el código que está entre comentarios (//) para practicar las dos formas de sintaxis.
        p Es de recordar que las estructuras de repetición básicas y su sintaxis pueden pasar su aplicación más común para recorrer la estructura de datos.

    #t_10_6
    .titulo-segundo.color-acento-contenido
      .h2 10.6 Estructuras de datos

    p.mb-5 Las estructuras de datos también conocidas como arreglos, son importantes en el desarrollo de algunos algoritmos son obligatorias a la hora de hacer aplicaciones web o móviles; por ello, se explica su sintaxis en JavaScript para los vectores, matrices y registros.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 A. Vectores

    p.mt-3.mb-5 Los vectores se definen en JavaScript como un tipo de dato con métodos, y atributos que lo definen. Es ideal analizar lo siguiente:

    .row.mb-5
      .col-lg-6

        .titulo-sexto.color-acento-contenido
          h5 Figura 18.
          span Definición de un vector

        figure.mb-sm-3
          img(src='@/assets/curso/temas8-13/img26.jpg', alt='Imagen que muestra el código definición de un vector, según el ejemplo en cuestión.').m-auto

      .col-lg-6
        p En la línea 1 se ve cómo se define un vector con identificador frutas, de tres (3) elementos, cada uno de ellos es una cadena de texto con una fruta.
        p En la línea 3 se manda imprimir en la consola todo el vector con su contenido, como se ve en la consola.
        p En la línea 4 se le llama al atributo #[code.etiqueta frutas.length] que contiene el tamaño del vector (es decir 3).


    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Acceder a los elementos de un vector

    .row.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 19.
          span Indexar un vector
        figure.mb-sm-3
            img(src='@/assets/curso/temas8-13/img27.jpg', alt='Imagen que muestra el código de indexación de un vector, según el ejemplo en cuestión.').m-auto

      .col-lg-6
        p Los índices de los vectores se comienzan en cero, en otras palabras, #[strong el índice del primer elemento de un vector es 0], y el del último elemento es igual al valor de la propiedad length del array restándole 1. #[strong Si se utiliza un número de índice no válido, se obtendrá: ] #[code.etiqueta undefined].

    p.mb-5 Ahora, se debe crear un programa que guarde los resultados de la tabla de 5 en un vector, con estos resultados recorrer el vector e imprimir la tabla del 5:

    .row.justify-content-center.mb-5
      .col-12.col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 20.
          span Crear la tabla del 5.
        figure.mb-5
          img(src='@/assets/curso/temas8-13/img28.jpg', alt='Imagen que muestra el código para la creación de un programa que guarde los resultados de la tabla de 5 en un vector.' ).m-auto

    p.mb-5 Es ideal revisar la lista de los métodos más comunes en los arreglos:

    .titulo-sexto.color-acento-botones
      h5 Tabla 4.
      span Funciones comunes de un vector

    .tabla-a.mb-5
      table

        thead.header1
          tr
            th Función
            th Operador abreviado
        tbody
          tr
            td.text-center indexOf()
            td.text-center Devuelve el índice del primer elemento del array que sea igual a elemento Buscado, o -1 si no existe.
          tr
            td.text-center join()
            td.text-center Concatena en un string todos los elementos de un array.
          tr
            td.text-center push()
            td.text-center Añade uno o más elementos al final de un array y devuelve el nuevo valor de su propiedad length.
          tr
            td.text-center pop()
            td.text-center Elimina el último elemento de un array, y devuelve dicho elemento.
          tr
            td.text-center sort()
            td.text-center Ordena los elementos de un array, modificando este, y devuelve el array ordenado.
          tr
            td.text-center shift()
            td.text-center Elimina el primer elemento de un array, y devuelve dicho elemento.

    a.anexo.mb-4.mb-lg-5(href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions" target="_blank" style="width: 422px")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p #[strong Enlace web.] Tipos de datos y estructuras en JavaScript. (MDN, 2021e).

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 B. Matrices

    p.mt-3.mb-5 Las matrices se pueden ver lógicamente como un vector, y cada uno de sus elementos es otro vector, así la representación de la matriz queda codificada como muestra la figura siguiente:

    .titulo-sexto.color-acento-contenido
      h5 Figura 21.
      span Matriz de 3x4

    figure.mb-5
      img(src='@/assets/curso/temas8-13/img29.svg', alt='Ejemplo de código para la creación de una matriz de 3x4 donde los valores de cada posición son nombres de frutas.' ).m-auto

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 C. Registros

    p.mt-3.mb-5 Hasta ahora se ha visto cómo un arreglo es la colección de datos del mismo tipo, pero un registro es una colección de datos de diferente tipo que se relacionan entre sí:

    .titulo-sexto.color-acento-botones
      h5 Tabla 5.
      span Registros
    .tabla-a.mb-5
      table
        thead.header1
          tr
            th Nombre
            th Correo
            th Edad
            th Saldo

        tbody
          tr
            td.text-center Juan
            td.text-center juan@sindato.com
            td.text-center 19
            td.text-center 36.234
          tr
            td.text-center Luis
            td.text-center luis@sindato.com
            td.text-center 18
            td.text-center 23.234
          tr
            td.text-center Andrea
            td.text-center andrea@sindato.com
            td.text-center 22
            td.text-center 0
          tr
            td.text-center Pedro
            td.text-center pedro@sindato.com
            td.text-center 12
            td.text-center 65.234
          tr
            td.text-center Maria
            td.text-center maria@sindato.com
            td.text-center 16
            td.text-center 123


    #t_10_7
    .titulo-segundo.color-acento-contenido
      .h2 10.7 Estructuras de salto

    p.mb-5 Estas estructuras son instrucciones que permiten romper la ejecución natural o secuencial de los programas, permitiendo que se salte a otro punto de la ejecución del programa, estas instrucciones tienen las palabras reservadas: #[code.etiqueta continue], #[code.etiqueta break] y #[code.etiqueta return]:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="Sentencia <code>continue</code>").p-4
        p.mb-5 La sentencia continue se salta a la siguiente iteración del ciclo for o while como se presenta en el siguiente ejemplo y teniendo en cuenta los resultados.

        figure.mb-5
          img(src='@/assets/curso/temas8-13/img33.jpg', alt='Imagen que muestra un código donde la sentencia continue se salta a la siguiente iteración del ciclo for o while.')

        p Como se observa, cuando la variable i tiene el valor 3, se ejecuta la sentencia continue se salta la sentencia donde debe imprimir el valor de 3, por ese motivo no aparece en la consola.

      div(titulo="Sentencia <code>break</code>").p-4
        p.mb-5 Por otro lado, la sentencia break, detiene la ejecución del ciclo independientemente de cuántas veces este configurando el ciclo.

        figure.mb-5
          img(src='@/assets/curso/temas8-13/img34.jpg', alt='Imagen que muestra código con uso de sentencia break.')

        p En la anterior imagen, cuando i tiene el valor de 3 ya no se sigue ejecutando más el ciclo, aunque esté programado para ejecutarse 5 veces, solo ejecuta 3 iteraciones y, ya que en el tercero luego de evaluar la condición #[code.etiqueta i == 3] ejecuta la sentencia #[code.etiqueta break] haciendo que termine todo.

      div(titulo="Sentencia <code>return</code>").p-4
        p Sirve para terminar la ejecución de un bloque de instrucciones, se usa mucho en programación modular cuando se quiere retornar un resultado, se usará más adelante.
        p.mb-5 Por ejemplo, se tiene una función que divide un número entre 4 y se ha creado para obtener resultados. En el primer caso se le pasa 27 para que lo divida entre 4 pero como no hay return dentro, devuelve #[code.etiqueta undefined]. No accede al número porque el número solo vive dentro de la función y no hay nada que dé el valor. Si se le agrega return, efectivamente se obtiene el resultado de la división.
        figure
          img(src='@/assets/curso/temas8-13/img35.jpg', alt='Imagen que muestra código con sentencia return y sin sentencia return.')


    #t_10_8
    .titulo-segundo.color-acento-contenido
      .h2 10.8 Métodos de ordenamiento y búsqueda

    .row.mb-5.align-items-center
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas8-13/img36.svg', alt='')

      .col
        p.mb-0 Existen varias técnicas de ordenamiento de vectores las cuales son importantes para realizar búsquedas y, al igual que en la vida real, es más fácil buscar en un lugar que esté ordenado que en uno que no lo esté, como #[strong JavaScript está diseñado para pequeños algoritmos que resuelven pequeños problemas y convertirlos en servicios], el uso de esas técnicas no tiene mucha aplicabilidad, pues la diferencia en tiempos computacionales de ejecución es considerable solo cuando se manejan volúmenes de datos grandes, mientras que para volúmenes de datos cortos o pequeños los tiempos computacionales no tienen diferencias comparables. Es por eso que, si en #[strong JavaScript] el volumen de datos en los arreglos no será grande, no es necesario la aplicación de esas técnicas.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 A. Ordenamiento de cadenas de texto

    .row.my-5
      .col-lg-6

        .titulo-sexto.color-acento-contenido
          h5 Figura 22.
          span Ordenamiento de números como cadenas de texto

        figure.mb-sm-3
          img(src='@/assets/curso/temas8-13/img37.jpg', alt='Imagen de código para el ordenamiento de números como cadenas de texto.').m-auto

      .col-lg-6
        p.mt-5 Se ordenará un vector de mayor a menor valor y de acuerdo con los datos que tiene, se debe tener en cuenta que el arreglo se modifica al ordenarlo, devolviendo la misma matriz ordenada, pero no una nueva. Esto es importante, si se quiere mantener inmutable el vector y obtener otro ordenado, lo que se tendría que hacer es una copia del arreglo antes de ordenarlo.
        p Por defecto el método #[code.etiqueta Array.sort()] ordena los elementos del array como si fueran cadenas inclusive si los datos son de tipo entero.
        p La imagen muestra un arreglo de datos numéricos a ordenar en la línea 1, en la línea 2 se muestra en consola el vector, se ha usado la función #[code.etiqueta join(‘, ’)] que sirve para concatenar los datos del vector o arreglo poniendo entre ellos una coma #[code (, )] y espacio. Luego se aplica la función #[code.etiqueta sort()] en la tercera línea de código y, posteriormente, se muestra el vector ya ordenado. Como se observa, el resultado en consola es un ordenamiento como si los elementos fueran cadenas de texto.
    .row.my-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 23.
          span Ordenamiento de cadenas de texto

        figure.mb-sm-3
          img(src='@/assets/curso/temas8-13/img38.jpg', alt='Imagen de código para el ordenamiento de cadenas de texto de forma ascendente.').m-auto


      .col-lg-6
        p.mt-5 El ejemplo de la figura anterior muestra un ordenamiento de cadenas de texto.


    .row.my-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 24.
          span Invertir el orden de los elementos
        figure.mb-sm-3
          img(src='@/assets/curso/temas8-13/img39.jpg', alt='Imagen de código para el ordenamiento de cadenas de texto de forma descendente.').m-auto

      .col-lg-6
        p.mt-5 También es posible ordenar el arreglo de forma descendente con el método #[code.etiqueta Array.reverse()].

        p.mb-5 La función #[code.etiqueta Array.reverse()] no ordena los elementos, simplemente toma los elementos y les invierte el orden, es decir, el primero pasa a ser el último, el segundo, el penúltimo y así hasta que el último pasa al primer puesto, es por esto que primero se ordena en orden ascendente y luego se invierte para lograr el orden descendente.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 B. Ordenamiento de datos numéricos


    p.mt-5 El ordenamiento con la función #[code.etiqueta Array.sort()] se hace considerando los elementos del arreglo como cadenas de texto. Antes de ver cómo se ordenan con datos numéricos se explicará que es una función en #[strong JavaScript].

    .tarjeta.tarjeta--gris.p-4
      h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] ¿Qué es una función?
      p Las funciones son uno de los bloques de construcción fundamentales en #[strong JavaScript].Una función en #[strong JavaScript] es similar a un procedimiento o #[em “un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida”]. Para usar una función, se debe definir en algún lugar del ámbito en el que se desea llamarla (MDN, 2021d).

      .row.my-5.justify-content-center
        .col-lg-6

          //.titulo-sexto.color-acento-contenido
            h5 Figura 25.
            span Ejemplo de declaración de una función en javascript

          figure.mb-sm-3
            img(src='@/assets/curso/temas8-13/img40.jpg', alt='').m-auto


      p Como se puede observar en la anterior imagen, se usa la palabra reservada #[code.etiqueta function] y luego se escoge un identificador para la función que para este caso es #[code.etiqueta operacion], luego entre paréntesis se seleccionan nombres para las variables de entrada (en el ejemplo #[strong a, y b]), a continuación, se define un contexto (espacio de código entre llaves {}) para indicar cuáles son las   instrucciones que ejecutará la función.


    p.mt-5 Para ordenar un vector con datos numéricos se debe pasar como argumento una función al método #[code.etiqueta Array.sort()], esta función indica qué operación debe hacerse sobre los datos a comparar entre dos datos del arreglo. Para comparar si un número es mayor que otros es muy común usar la resta porque si se resta un número solo existen tres tipos de respuestas.

    .row.my-4.justify-content-center
      .col-lg-6
        figure.my-5
          img(src='@/assets/curso/temas8-13/img41.jpg', alt='').m-auto


    p Cuando a un número #[strong a] le restamos un número #[strong b] #[code.etiqueta (a - b)]:

    ul.lista-ul--color.mb-5
      li
        i.fas.fa-angle-right
        span si el resultado es negativo es porque #[strong b] es mayor que #[strong a].
      li
        i.fas.fa-angle-right
        span si el resultado es positivo es porque #[strong a] es mayor que #[strong b].
      li
        i.fas.fa-angle-right
        span si el resultado es cero es porque #[strong a] y #[strong b] son iguales.


    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 C. Ordenamiento de registros

    .row.my-5
        .col-lg-6
          figure.mb-sm-3
            img(src='@/assets/curso/temas8-13/img43.jpg', alt='').m-auto

        .col-lg-6
          p Suponiendo que se tienen los registros de la tabla, se desea ordenarlos de mayor edad a menor edad.

          .titulo-sexto.color-acento-botones
            h5 Tabla 6.
            span Ordenamiento de registros

          .tabla-a.mb-5
            table
              thead.header1
                tr
                  th Usuario
                  th Edad
                  th Rol

              tbody
                tr.header2
                  td.text-center Mariela
                  td.text-center 31
                  td.text-center SAC
                tr.header3
                  td.text-center Eduardo
                  td.text-center 30
                  td.text-center SEO
                tr.header2
                  td.text-center Andrés
                  td.text-center 34
                  td.text-center Project Manager


    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 D. Buscar un elemento

    .row.my-5
        .col-lg-6
          figure.mb-sm-3
            img(src='@/assets/curso/temas8-13/img44.jpg', alt='').m-auto


        .col-lg-6
          p El método #[code.etiqueta find()] devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada #[code.etiqueta Array.prototype.find()] - JavaScript, MDN, 2021.

    p.mb-5 Se usa el identificar elemento para referenciar a la variable que se va a aplicar el criterio que en el ejemplo es encontrar el primer elemento que sea mayor que 10.

    .row.my-4
      .col-lg-6
        figure.mb-sm-3
          img(src='@/assets/curso/temas8-13/img45.jpg', alt='').m-auto

      .col-lg-6
        p En ocasiones, es clave que, en lugar de retornar un solo valor, el resultado sea más de uno, por ejemplo, si en el arreglo se retornan los valores que son mayores que 10, debe retornar otro vector con los valores resultados. Para esto existe la función Array.filter(), que crea un nuevo arreglo con los datos que cumplan con la condición.

    p Es de interés notar que la consola solo retornó los datos que cumplen la condición que el elemento es mayor que 10.
    p En la medida que se va avanzando en el conocimiento de la sintaxis del lenguaje, el código fuente se va enriqueciendo de elementos y por tanto de complejidad, esto hace que sea necesario conocer herramientas para la depuración de fallas y corregir los fallos en la redacción del código.


</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
