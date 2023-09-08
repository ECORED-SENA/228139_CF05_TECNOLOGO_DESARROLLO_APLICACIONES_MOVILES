<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Estructuras de control secuencial

    p Una estructura es definida como un esquema con determinada distribución y orden que permite representar una idea de forma simplificada. La estructura de control secuencial es la más sencilla y es conocida como estructura lineal. Se compone de instrucciones que deben ejecutarse en forma consecutiva, una tras otra, siguiendo una línea de flujo. Los problemas más sencillos pueden resolverse haciendo uso únicamente de esta estructura. Por lo general, la estructura secuencial forma parte de soluciones a problemas complejos, en las que se la utilizan otras estructuras iterativas (repetir varias veces un conjunto de instrucciones) y condicionales (López, 2009).
    p.mb-5 La siguiente figura muestra la estructura general del algoritmo más básico.

    .row.justify-content-center
      .col-xl-6
        .row
          .col
            .titulo-sexto.color-acento-contenido
              h5 Figura 5.
              span Modelo de estructura secuencial
            figure.mb-5
              img(src='@/assets/curso/temas/img36.svg', alt='Imagen de la estructura de algoritmo básico, de estructura secuencial: Inicio, leer datos, procesos, mostrar resultados, final.', style="max-width: 600px").m-auto

    #t_5_1
    .titulo-segundo.color-acento-contenido
      .h2 5.1 Ejemplo estructura de control secuencial

    p Escribir un algoritmo para calcular el área de cualquier triángulo rectángulo, en él se debe pedir al usuario que ingrese los valores de la altura y la base del triángulo

    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")
        ul.lista-ul.mt-4
          li
            i.fas.fa-angle-right
            span #[strong Formular el problema:] está claramente planteado y consiste en calcular el área de un rectángulo.
          li
            i.fas.fa-angle-right
            span #[strong Resultados esperados:] se espera que el algoritmo sea capaz de calcular el área del rectángulo y mostrar en la pantalla el resultado de ese cálculo.
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] dos datos números que son la base y la altura del triángulo (se deben solicitar al usuario). El aprendiz debe preguntarse si sus conocimientos actuales de matemáticas le permiten resolver este problema, de no ser así, tendrá que plantear una estrategia para obtener los conocimientos requeridos. Para este ejemplo recordar que un triángulo rectángulo es aquel que uno de sus lados tiene un ángulo recto (90 grados).
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] los valores de base y altura son variables y se deben solicitar al usuario.
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] definir variables; asignar el valor 2 a la constante usando para dividir (divisor); solicitar al usuario el valor de la altura del triángulo; solicitar al usuario el valor de la base; aplicar la fórmula de área; mostrar el resultado.

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        p.mt-4 Mientras se está aprendiendo a diseñar algoritmos, es importante hacerlos en diagrama de flujo y en la medida en que se va adquiriendo experiencia con la representación de pseudocódigo, es más conveniente hacer esta representación, en razón de la velocidad a la hora de diseñarlo.

        .row.justify-content-center
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img37.svg', alt='Imagen que muestra la estructura del algoritmo del área del triángulo del ejemplo.' )
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img38.svg', alt='Imagen que muestra la estructura del algoritmo del área del triángulo del ejemplo.' )

    p.mb-5 Del diagrama de flujo y el pseudocódigo se puede notar lo siguiente: el identificador de área no tiene tilde por la razón antes mencionada, el tipo de dato REAL hace referencia a que es un número que no solamente puede contener un número entero, sino también un valor con cifras decimales.

    #t_5_2
    .titulo-segundo.color-acento-contenido
      .h2 5.2 Estructura condicional

    .row.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/img39.jpg', alt='')
      .col-lg-9
        p Es importante prestar atención a las estructuras que utilizan para resolver problemas y poderlas reconocer para lograr mayor control sobre la solución planteada.
        p.mb-0 La estructura condicional se emplea para indicarle al computador que debe evaluar una condición y, según el resultado, ejecutar el bloque de instrucciones. La forma más común está compuesta por una condición que se evalúa y dos bloques de instrucciones que se ejecutan: uno cuando la condición es verdadera y otro cuando la condición es falsa.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo:] un aprendiz aprueba un examen cuando la calificación de este es mayor o igual a 3. Elaborar un algoritmo que pida al usuario una calificación, aplicar el criterio de aprobación e imprimir “Aprobado” o “Reprobado”, según sea el caso.

    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")

        ul.lista-ul.mt-4
          li
            i.fas.fa-angle-right
            span #[strong Formular el problema:] es un problema sencillo de condición con dos operaciones o condición doble.
          li
            i.fas.fa-angle-right
            span #[strong Resultados esperados:] un aviso que reporte si el estudiante obtiene “Aprobado” o “Reprobado” el examen.
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] la calificación ingresada por el usuario. Para aprobar, la nota debe ser mayor o igual a 3.
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] aplicar el criterio de aprobación (calificación mayor o igual a 3).
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] solicitar al usuario que ingrese la calificación. Evaluar si la calificación es igual o superior a 3; en caso de ser verdadero, reportar “Aprobado”; en caso contrario, reportar “Reprobado”.

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        p.mt-4 En anterior análisis se contemplaron los datos de entrada, datos auxiliares (variable) operaciones (impresión en pantalla, lectura de datos e impresión en pantalla de resultados). Pero son muchas las palabras usadas en el análisis por lo tanto lo abreviamos con el siguiente código 	que, posteriormente, se explicará.
        .row.justify-content-center
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img40.svg', alt='Imagen de la estructura condicional, del ejemplo del aprendiz que aprueba según su calificación igual o mayor a tres.' )
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img41.svg', alt='Imagen de la estructura condicional, del ejemplo del aprendiz que aprueba según su calificación igual o mayor a tres.' )

    p En el ejemplo anterior, se introduce la calificación por teclado, tanto en el diagrama de flujo (con la representación de trapecio) o el pseudocódigo con la preposición #[strong LEER], luego este valor se compara en un condicional, en el diagrama de flujo con la representación de un rombo, mientras que en el pseudocódigo se una la preposición SI, seguido de las preposiciones que se han de ejecutar en caso de que la condición sea verdadera (note que está escrita más a la derecha). También se usa la preposición #[strong SI NO] para identificar el inicio de bloque de instrucciones a ejecutar si no se cumple la condición y la preposición #[strong FINSI] para indicar que no hay más intrusiones que ejecutar si se cumple o no la condición.
    p.mb-5 Como la condición evalúa dos condiciones si se cumple o no, y en cada caso existe un bloque de instrucciones (o alimenta una instrucción) a seguir se llama: #[strong ESTRUCTURA CONDICIONAL SIMPLE], ya que si la condición se cumple escribe algo y si no se cumple también hace otra operación.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p #[strong Ejemplo:] escribir un algoritmo en donde se pida la edad del usuario; si es mayor de edad debe aparecer un mensaje indicándolo.

    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")

          ul.lista-ul
            li
              i.fas.fa-angle-right
              span #[strong Formular el problema:] es un problema sencillo solo consiste en usar una sentencia de repetición.
            li
              i.fas.fa-angle-right
              span #[strong Resultados esperados:] el mensaje #[i “Esto es un algoritmo”] 7 veces impreso en pantalla.
            li
              i.fas.fa-angle-right
              span #[strong Datos disponibles:] constante con el número de repeticiones (7).
            li
              i.fas.fa-angle-right
              span #[strong Restricciones:] ninguna.
            li
              i.fas.fa-angle-right
              span #[strong Procesos necesarios:] hacer que se imprima en pantalla el mensaje 7 veces.
      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        .row.justify-content-center.my-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/img43.svg', alt='Imagen de la estructura del algoritmo del ejemplo propuesto.' )
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/img44.svg', alt='Imagen de la estructura del algoritmo del ejemplo propuesto.' )

    p.mb-5 En este ejemplo concreto,, no se ejecuta nada en caso de que NO se cumpla la condición. Este tipo de estructura condicional se denomina #[strong ESTRUCTURA CONDICIONAL SIMPLE]; además, todo el proceso #[i (pedir la edad, comprobar la condición, mostrar o no el mensaje)] se realiza una única vez y finaliza la ejecución del algoritmo, si se deseara que el programa repitiera estas mismas operaciones más de una vez, se tendría que usar una estructura de iteración como se verá a continuación.


    #t_5_3
    .titulo-segundo.color-acento-contenido.mb-5
      .h2 5.3 Estructuras de iteración o repetitivas

    .row.my-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/img42.jpg', alt='')
      .col-lg-8
        p Las estructuras iterativas o de repetición permiten ejecutar una o varias instrucciones, un número determinado de veces o indefinidamente hasta que se cumpla una condición. Esta estructura ayuda a simplificar los algoritmos.
        p En programación existen, como mínimo, dos tipos de estructuras repetitivas las cuales tienen variantes en los diferentes lenguajes de programación.
        p La característica común es que ambos tipos permiten ejecutar una o varias instrucciones:
        .cajon--azul2.p-4
          ul.lista-ul.mb-0
            li
              i.fas.fa-angle-right
              span Un número conocido de veces (#[strong Estructura PARA o #[i FOR]] en inglés).
            li.mb-0
              i.fas.fa-angle-right
              span Mientras se cumpla una condición (#[strong Estructura MIENTRAS o #[i WHILE]]).

    h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Estructura PARA (FOR)
    p.mb-4 Esta estructura se usa cuando se sabe el número de veces que se debe ejecutar un conjunto de operaciones.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo:] escribir un procedimiento que muestre siete (7) veces en pantalla la frase “Esto es un algoritmo”. Mostrar en pantalla la salida del en el computador.

    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")

        ul.lista-ul.mt-4
          li
            i.fas.fa-angle-right
            span #[strong Formular el problema:] es un problema sencillo solo consiste en usar una sentencia de repetición.
          li
            i.fas.fa-angle-right
            span #[strong Resultados esperados:] el mensaje “Esto es un algoritmo” 7 veces impreso en pantalla.
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] constante con el número de repeticiones (7).
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] ninguna.
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] hacer que se imprima en pantalla el mensaje 7 veces

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")

        .row.justify-content-center.mt-4
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img45.svg', alt='Imagen de la estructura del algoritmo del ejemplo propuesto.' )
          .col-lg-6
            figure.my-5
              img(src='@/assets/curso/temas/img46.svg', alt='Imagen de la estructura del algoritmo del ejemplo propuesto.' )


    .row
      .col-lg-2
        p La salida en pantalla sería:
      .col-lg-10
        .tr-blue.p-5
          p
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br
            |Esto es un algoritmo
            br

    p.mt-5 Existe una variable #[strong  i] que tendrá el valor 1, 2, 3 ... hasta 7, esta variable, se puede usar dentro del el bloque #[strong PARA] hasta #[strong FINPARA].
    p.mb-4 Ahora se presenta un ejemplo un poco más elaborado.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo:] se necesita elaborar un algoritmo que solicite al usuario un número entero y sume todos los números naturales que hay hasta ese número. Por ejemplo, si el usuario digita 3, el programa debe sumar: 1 + 2 + 3, si el usuario digita 5 el programa debe sumar 1+2+3+4+5. Al finalizar debe imprimir el resultado.

    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")

        ul.lista-ul
          li
            i.fas.fa-angle-right
            span #[strong Formular el problema:] necesita la sumatoria de los números en secuencia natural.
          li
            i.fas.fa-angle-right
            span #[strong Resultados esperados:] la suma de los números en sucesivos de uno hasta el número digitado por el usuario.
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] el dato entero que digita el usuario es la entrada.
          li
            i.fas.fa-angle-right
            span #[strong Datos adicionales:] se necesita un acumulador donde ir guardando el valor de las sumas sucesivas.
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] ninguna.
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] definir un acumulador con valor inicial cero, imprimir para que el usuario sepa que debe digitar un número (“Escriba el número”), Leer del teclado el número del usuario, sumar cada vez el dato que se va incrementando de uno en uno al valor digitado por el usuario.

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        .row.justify-content-center.my-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/img47.svg', alt='Imagen que muestra la estructura del algoritmo, al solicitar un número entero y la suma de los números naturales antes de él.' )
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='Imagen que muestra la estructura del algoritmo, al solicitar un número entero y la suma de los números naturales antes de él.')


    p.mb-5 En la anterior figura se muestra el algoritmo en sus dos representaciones más comunes, se propone en secciones posteriores hacer una prueba de escritorio a este problema.

    h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Estructura MIENTRAS (#[i WHILE])

    p.mb-4 La instrucción "Mientras", puede impedir la ejecución de un conjunto de instrucciones, si la evaluación de una condición lógica es falsa. Esto significa que es repetitiva únicamente cuando la evaluación de la condición es verdadera.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo:] realice un programa que permita obtener la factorial de un número dado por el usuario.

    h4.mb-5 #[span.etiqueta--amarilla.p-2 #[strong Análisis]]

    p.mb-2 #[i.fas.fa-angle-right] #[strong Formular el problema:]
    p.mb-2 La factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n.
    p #[strong Ejemplo:] ¡Matemáticamente #[code 5! = 5*4*3*2*1] o a la inversa: #[code 5! = 1*2*3*4*5].
    hr.hr.my-4
    p.mb-2 #[i.fas.fa-angle-right] #[strong Resultados esperados:]
    p.mb-5 La factorial del número digitado por el usuario.

    .titulo-sexto.color-acento-contenido
      h5 Figura 6.
      span Proceso de factorial
    figure
      img(src='@/assets/curso/temas/img49.svg', alt='Imagen que muestra el proceso de factorial del ejemplo propuesto: contador que va desde 1 hasta el número digitado por el usuario.' )

    p.my-5 En la anterior figura se observa que es preciso ir incrementando el valor en 1 (valor constante - contador -) hasta que llegue al número 5 (datos suministrados por el usuario); es decir, 1*2 = 2, este resultado se multiplica por 3 (2 * 3 = 6), 6 se multiplica por 4 (6 * 4 = 24), finalmente también 24 se multiplica por 5 y se obtiene la factorial (24 * 5 = 120), de esta forma, los resultados de las multiplicaciones se van acumulando hasta obtener la factorial.
    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")

        ul.lista-ul.mt-4
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] el dato entero que digita el usuario es la entrada.
          li
            i.fas.fa-angle-right
            span #[strong Datos adicionales:] se requiere de un acumulador donde ir guardando el valor de las multiplicaciones sucesivas, también un contador para ir contando el número secuencial (como lo hace el número i en el ciclo PARA).
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] la repetición se detiene cuando
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] definir un acumulador con valor inicial cero, imprimir para que el usuario sepa que debe digitar un número (“Por favor el número”), leer del teclado el número del usuario, multiplicar cada vez el dato que se va incrementando de uno en uno al valor digitado por el usuario.

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        .row.justify-content-center
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img50.svg', alt='Imagen que muestra la estructura del algoritmo del caso propuesto.' )
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img51.svg', alt='Imagen que muestra la estructura del algoritmo del caso propuesto.' )

</template>

<script>
export default {
  name: 'Tema3',
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
