<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Metodología de algoritmos

    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/img1.jpg', alt='')
      .col-lg-8
        p De manera implícita, en las distintas áreas productivas de la sociedad se usan algoritmos y un par de ejemplos pueden ser que, en la construcción de una casa, el ingeniero o el arquitecto analiza el terreno, diseña unos planos, realiza maquetas y así continúan siguiendo una secuencia lógica de procesos, para la resolución del problema; o un abogado que antes de defender a un cliente analiza las pruebas, elabora un plan, practica sus argumentos y sigue un método para lograr la defensa de su cliente. Se puede concluir, entonces, que una solución a la medida de un problema requiere una metodología que lleve a la solución final.

        p #[strong En el proceso de desarrollo de programas informáticos, aparte de conocer esta metodología, se necesita conocer las funciones que puede realizar un computador y la representación de las mismas.]

        p En general, existen tres (3) fases secuenciales para la elaboración de un algoritmo representadas en la siguiente figura y de las cuales se abordarán las dos primeras:

    //.titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Metodología de creación de algoritmos
    .row.justify-content-center
      .col-12.col-lg-10
        figure
          img(src='@/assets/curso/temas/img2.svg', alt='Metodología de creación de algoritmos: Análisis, Diseño e Implementación')

    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido
      .h2 1.1. Análisis

    .row.mb-5
      .col-auto
        figure.d-none.d-md-block
          img(src='@/assets/curso/temas/img3.svg', alt='' style='max-width: 80px')
      .col-md
        p Como se percibió en componentes anteriores, la fase de análisis trata de responder a la pregunta: #[strong ¿Qué es lo que se debe hacer?], y esto es necesario para entender el problema. Por ello, es preciso relacionar los datos de entrada, salida o resultados con los procesos a ejecutar con esta información y los datos auxiliares que se puedan requerir en las tareas.

    .row
      .col-lg-7
        p Hasta este punto parece que esas son las actividades propias del análisis, sin embargo, el éxito de un algoritmo consiste en reducir a cero la brecha de lo que el cliente necesita y los resultados que el algoritmo entrega. Para lograrlo en su totalidad, #[strong es importante indagar otros aspectos que corresponden a la naturaleza del problema,] las siguientes preguntas modeladoras son de referencia casi obligante a tener en cuenta:
      .col-lg-5
        .cajon.color-acento-botones.p-4.mb-5
          .h5.text-center ¿Qué es?
          .h5.text-center ¿Quiénes intervienen?
          .h5.text-center ¿Cómo interviene o se comporta?
          .h5.text-center ¿Cuándo?
          .h5.text-center ¿Cómo lo hace?
          .h5.text-center ¿Por qué? y
          .h5.text-center ¿Para qué?


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido
      .h2 1.2. Diseño

    .row.mb-4
      .col-auto
        figure.d-none.d-md-block
          img(src='@/assets/curso/temas/img4.svg', alt='' style='max-width: 80px')
      .col-md
        p En esta etapa se responde, básicamente, a la pregunta #[strong ¿Cómo se va a hacer?,] refiriéndose a la manera en la que el sistema va a realizar la tarea solicitada. Lo importante en este punto, es que debe quedar bien definido el problema, sin dar espacio a más de una interpretación de la acción o acciones que debe hacer el sistema.

    p En el proceso de desarrollo del algoritmo, las siguientes actividades son obligatorias, sobre todo si se está empezado en el diseño de soluciones basadas en algoritmos y no se cuenta con mucha experiencia:

    figure.my-5
      img(src='@/assets/curso/temas/img5.svg', alt='' style='max-width: 496px').m-auto

    p Para la verificación del algoritmo, se aplica una técnica denominada #[span.etiqueta--morada #[strong pruebas de escritorio o trazas, que trata de la validación y verificación del algoritmo mediante la ejecución de las sentencias u operaciones que lo componen (proceso),]] y así determinar sus resultados de salida a partir de una base determinada de elementos en la entrada del proceso.
    p.mb-5 Como el resultado del proceso de diseño es un algoritmo, es obligatorio saber representarlo de alguna manera, y se empleará inicialmente con la notación de pseudocódigo para hacer este tipo de representaciones.

    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Notación de diseño: pseudocódigo

    .row.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/img6.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        p.mb-5 Para expresar el contenido de un programa de computadora, se necesita de un lenguaje de programación que las computadoras pueden interpretar. Sin embargo, se puede expresar ese mismo contenido en el lenguaje natural lengua materna (español), empleando expresiones sencillas que lo simplifican y abrevian. Cuando se emplea esta técnica, se dice que está escrito en pseudocódigo.

        .cajon.color-acento-botones.p-4
          .row.align-items-center
            .col-auto
              figure.d-none.d-md-block
                img(src='@/assets/curso/temas/img30.svg', alt='Texto que describa la imagen' style='width: 100%')
            .col-md
              p.mb-0 #[strong Ejemplo: el cliente pide que se desarrolle un programa de computadora que le solicite al usuario un número, luego el sistema debe mostrar en pantalla el número digitado.]

    p.mb-5 A continuación, se aplica la metodología vista:

    TabsB.mb-5.color-acento-contenido
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")
        p #[span.etiqueta--amarilla #[strong Análisis:]] el dato de entrada debe ser un número ingresado por el usuario, pero antes de eso el sistema debe solicitarle al usuario que lo ingrese (digite) al programa, si no, ¿de qué otra manera el usuario sabría que el programa está esperando el ingreso de ese dato? Por lo tanto, una posible operación inicial dentro del algoritmo sería escribir en pantalla que “por favor se ingrese un número”.
        p La segunda operación es la de recibir ese número desde el teclado, para ingresarlo al programa, pero esto implica que se debe definir un dato intermedio donde se guardará ese valor y el cual identificará el valor ingresado (a este dato se denomina variable porque puede tener cualquier valor entero según digite el usuario). Ya ocurre el primer problema: para guardar el dato (variable) se debe definir dónde se almacenará o como podría referirse al dato ingresado dentro del programa, por lo tanto, antes de empezar el algoritmo se debe indicar al computador que reserve un espacio para guardar un número entero.

        p Una vez definida la variable, es posible referirse a ella, leer desde el teclado el número entero y almacenarlo en dicha variable.
        p Por último, el sistema debe imprimir el contenido de la variable (dato de salida), con lo cual se puede dar final al programa.

      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        p #[span.etiqueta--amarilla #[strong Diseño:]] en anterior análisis se contemplaron los datos de entrada, datos auxiliares (variable) operaciones (impresión en pantalla, lectura de datos e impresión en pantalla de resultados). Pero son muchas las palabras usadas en el análisis por lo tanto lo abreviamos con el siguiente código 	que, posteriormente, se explicará.

        .row.justify-content-center
          .col-12.col-lg-10.col-xl-9
            figure.bg-gray.my-4
              //.titulo-sexto.color-acento-contenido
                h5 Figura 2.
                span Pseudocódigo imprimir un número
              img(src='@/assets/curso/temas/img9.png', alt='' style='width:600px').m-auto


    p En #[span.etiqueta--morada ALGORITMO] se indica el nombre del algoritmo, y después se declaran las variables que serán usadas en él (con VAR) indicando su tipo de dato (un valor de tipo #[span.etiqueta--morada ENTERO], para este ejemplo)

    p Entre #[span.etiqueta--morada INICIO] y #[span.etiqueta--morada FIN] se escriben las diferentes acciones que realizará el algoritmo y usamos #[span.etiqueta--morada ESCRIBIR()] para indicar con esta palabra que se mostrará un mensaje por pantalla (el texto que se va a mostrar 'tal cual' debe ir entre paréntesis dobles), y #[span.etiqueta--morada LEER()] para recibir el dato desde el teclado.

    p.mb-5 Se debe tener en cuenta que cada línea termina en punto y coma (excepto #[span.etiqueta--morada INICIO] y #[span.etiqueta--morada FIN]), el punto y coma indica que lo que se ejecuta es una sentencia que hace una única operación, mientras que lo que está entre #[span.etiqueta--morada INICIO] y #[span.etiqueta--morada FIN] agrupa varias sentencias que se ejecutan en un orden determinado.

    h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Pruebas de escritorio o trazas

    p.mb-4 Las pruebas de escritorio son las simulaciones de ejecución de un algoritmo que permite determinar la validez o efectividad del mismo. Se trata de escribir en una tabla con tantas columnas como variables tiene el algoritmo y seguir las instrucciones poniendo los valores correspondientes.


    .tarjeta.tarjeta--gris.p-3.mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/infografia1t1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[strong Descargue y explore la infografía que se propone a continuación] y amplíe sus conocimientos sobre las pruebas de escritorio o trazas.
            .col-sm-auto
              a.boton.color-botones(:href="obtenerLink('/downloads/Infografia_Prueba_de_Escritorio.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .cajon.color-acento-botones.p-4.mb-5.mb-lg-0
      .row.align-items-center
        .col-auto
          figure.d-none.d-md-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col-md
          p #[strong Ejemplo:] escribir un algoritmo que calcule el cuadrado y el cubo de un número introducido por teclado y mostrar los resultados para el cubo y el cuadrado.

    TabsB.my-5.color-acento-contenido
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")
        p #[span.etiqueta--amarilla #[strong Análisis:]] nuevamente el dato de entrada debe ser un número ingresado por el usuario, y al igual que en el ejemplo anterior se debe solicitar al usuario que lo digite.
        p Antes de realizar las operaciones de elevar al cuadrado y al cubo, se necesita definir las dos variables que recibirán estos datos (el cuadrado, y el cubo), por lo tanto, el algoritmo debe definirlas antes de realizar las operaciones y asignarles a ellas los resultados.
        p Una vez realizadas las operaciones el algoritmo debe mostrar en pantalla el contenido de estas variables, con un mensaje texto que indique si es el resultado del cuadrado o del cubo.

      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        p.mb-4 #[span.etiqueta--amarilla Diseño:] la siguiente figura tiene la representación del resultado al análisis anterior.

        .row.justify-content-center
          .col-12.col-lg-8

            figure.bg-gray
              //.titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span Metodología de creación de algoritmos

              img(src='@/assets/curso/temas/img11.png', alt='Texto que describa la imagen' style='width:600px').m-auto

    p Las pruebas de escritorio permiten verificar que el pseudocódigo realice lo que se espera al resolver el problema. Sin embargo, por ahora es importante que a todos los pseudocódigos se les aplique, al menos, una de prueba de escritorio o las que se consideren necesarias.

    p #[strong La mayoría de las pruebas de escritorio se representan en una tabla, donde en cada columna se anotan las variables y condiciones si las hay,] en el   orden en que aparecen en el algoritmo, #[strong para entenderlo se tiene que recorrer línea a línea el pseudocódigo y así identificar tanto las variables  como condiciones] e ir anotándolas en la tabla de la prueba de escritorio.
    p Es importante que en la tabla no aparezcan variables o condiciones repetidas y en la última columna se pueden anotar los datos de salida para  entonces también anotar #[strong “Salida”].
    p.mb-5 Ejecutando, línea a línea, el algoritmo que propone el ejemplo anterior, se va llenando la tabla como se muestra enseguida:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Tablas de traza del algoritmo
    figure.mb-5
      img(src='@/assets/curso/temas/img12.svg', alt='' style='width:100%').m-auto

    p También es posible realizar pruebas de escritorio a otras representaciones de algoritmos, como los diagramas de flujo, expuestos a continuación, y que se representan con algoritmos recomendando que a cada ejemplo presentado se le realice la prueba de escritorio correspondiente.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
