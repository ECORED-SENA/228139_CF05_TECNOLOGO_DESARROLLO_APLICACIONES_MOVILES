<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Operadores y jerarquía en los operadores

    figure.mb-4
      img(src='@/assets/curso/temas/img32.jpg', alt='')

    p.mb-4 Los operadores son símbolos que sirven para manipular datos. Y en un algoritmo es necesario dejar un espacio en blanco a cada lado del signo aritmético. Los operadores y las funciones que realizan se clasifican como se indica a continuación:

    .contenedor-listas.mb-5.mx-auto
      ul.lista-ul--separador
        li
          i.fas.fa-angle-right
          span #[strong Aritméticos:] permiten realizar operaciones entre datos de tipo numérico y dan como resultado otro valor de tipo numérico. Ejemplo: producto o multiplicación (*); división (/); suma (+); resta (-); asignación (=).
        li
          i.fas.fa-angle-right
          span #[strong Alfanuméricos:] permiten operar con datos de tipo carácter (letras) o cadenas de texto. La mayoría de los lenguajes de programación admiten el operador + para realizar la concatenación (unión) de caracteres o cadenas.
        li
          i.fas.fa-angle-right
          span #[strong Relacionales:] permiten la comparación entre datos del mismo tipo de dato y dan como resultado dos valores posibles: verdadero o falso. Ejemplo: igual a (=); menor que (<); mayor que (>,) mayor e igual que (>=).
        li
          i.fas.fa-angle-right
          span #[strong Lógicos:] posibilitan la evaluación lógica de dos expresiones de tipo lógico. Dan como resultado uno de dos valores posibles: verdadero o falso. Ejemplo: negación (no); conjunción (y); disyunción(o).

    h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Jerarquía en los operadores

    p.mb-5 Las computadoras ejecutan los operadores en un orden establecido y el siguiente es el orden (jerarquía) para ejecutar operadores:

    .contenedor-listas.mb-5.mx-auto
      ol.lista-ol--cuadro.lista-ol--separador
        li
          .lista-ol--cuadro__vineta
            span 1
          span Paréntesis (se ejecutan primero los más internos).
        li
          .lista-ol--cuadro__vineta
            span 2
          span Signo (-2), si un valor es positivo o negativo.
        li
          .lista-ol--cuadro__vineta
            span 3
          span Potencias (^) y Raíces (sqrt); Productos y Divisiones (* y /), en este mismo orden.
        li
          .lista-ol--cuadro__vineta
            span 4
          span Sumas y Restas (+ y -).
        li
          .lista-ol--cuadro__vineta
            span 5
          span Concatenación (+).
        li
          .lista-ol--cuadro__vineta
            span 6
          span Relaciónales (=, <, >).
        li
          .lista-ol--cuadro__vineta
            span 7
          span Negación (no).
        li
          .lista-ol--cuadro__vineta
            span 8
          span Conjunción (y).
        li
          .lista-ol--cuadro__vineta
            span 9
          span Disyunción (o).

    p El siguiente ejemplo permite comprender mejor la jerarquía de operadores:
    .tabla-b.my-5

      .titulo-sexto.color-acento-botones
        h5 Tabla 1.
        span Orden de ejecución de una expresión matemática

      table
        thead.encabezado-tabla
          tr
            th(style="width:10%") Orden
            th Operación
            th(style="width:70%") Explicación y expresión resultante
        tbody
          tr
            th.text-center 1
            td #[strong 7 + 8]
            td
              p Primero que todo lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores de esta forma el computador se interesará en resolver primero el contenido de #[strong (7 + 8)]. Y el resultado será #[strong 15].
              p De esta forma, la expresión queda reducida a:
              p #[strong (2 + 15 * 16 + 3#[sup 2]) /4 +5]
          tr
            th.text-center 2
            td #[strong 3#[sup 2]]
            td
              p De la expresión resultante luego de la operación 1,se observa que nuevamente hay un paréntesis por reducir, de manera que la computadora intentará resolver su contenido primero, como dentro del paréntesis está la expresión de elevar al cuadrado el número 3 #[strong (3#[sup 2])] que tiene como resultado 9, la expresión resultante sería:
              p #[strong (2 + 15 * 16 + 9) /4 +5]
          tr
            th.text-center 3
            td #[strong 15 * 16]
            td
              p De los paréntesis de la expresión resultante la operación de más jerarquía es la multiplicación #[strong 15 * 16] que tiene como resultado 240, la expresión resultante sería:
              p #[strong (2 + 240 + 9) /4 +5]
          tr
            th.text-center 4
            td #[strong 2+24+9]
            td
              p De la expresión resultante el que tiene mayor precedencia es el paréntesis por lo tanto la suma aritmética de su contenido data como expresión resultante:
              p #[strong 251/4 +5]
          tr
            th.text-center 5
            td #[strong 251/4]
            td
              p De la expresión resultante el operador de mayor jerarquía es la división y da como resultado 62.75 que en la siguiente operación se le sumará el valor de 5 la expresión resultante será:
              p #[strong 62,75 + 5]
          tr
            th.text-center 6
            td #[strong 62,75 + 5]
            td #[strong 67,75]

    p.mb-4 A continuación, se revisan dos ejemplos:
    TabsB.mb-5.color-acento-contenido
      .py-4.py-md-5(titulo="Ejemplo 1" :icono ="require ('@/assets/curso/temas/img33.svg')")
        p Una computadora debe ejecutar las siguientes operaciones, se debe escribir en el orden que la computadora ejecutará las operaciones de la siguiente expresión matemática: #[strong (2 + (7 + 8) * 16 + 3#[sup 2] ) /4 +5.]
        p Solución: primero que todo, lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores, de esta forma la computadora se interesará en resolver primero el contenido de #[strong (7 + 8)].
      .py-4.py-md-5(titulo="Ejemplo 2" :icono="require('@/assets/curso/temas/img34.svg')")
        p Escribir la siguiente ecuación como una expresión que la computadora pueda interpretar en el orden adecuado.
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/temas/img35.svg', alt='')
          .col
            p #[strong sqrt] (6#[sup 2]/2 + 7) / 8#[sup 2]


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
