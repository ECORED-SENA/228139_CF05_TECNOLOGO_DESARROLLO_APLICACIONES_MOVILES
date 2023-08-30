<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Uso de identificadores y palabras reservadas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1t3.jpeg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la elaboración de diagramas de flujo o algoritmos muchas veces se necesitan datos auxiliares, a continuación, se definen algunos de estos tipos de datos auxiliares.
          br
          br
          | Los identificadores son nombres que se dan a los elementos utilizados para resolver un problema y poder diferenciar unos de otros. De acuerdo con López (2009), al asignar nombres (identificadores) a variables, constantes y procedimientos se deben tener en cuenta algunas reglas, a saber:

    .tarjeta--cian.p-5.my-5
      ul.lista-ul--color
        li
          i.fas.fa-chart-pie
          span Pueden estar formados por una combinación de letras y números (saldoMes, salario, fecha2, etc.).
        li
          i.fas.fa-chart-pie
          span El primer carácter de un nombre debe ser una letra.
        li
          i.fas.fa-chart-pie
          span La mayoría de los lenguajes de programación diferencian las mayúsculas de las minúsculas.
        li
          i.fas.fa-chart-pie
          span Los nombres deben ser nemotécnicos, con solo leerlos se puede entender lo que contienen.
        li
          i.fas.fa-chart-pie
          span Deben ser muy descriptivos; no utilizar abreviaturas, a menos que se justifique.
        li
          i.fas.fa-chart-pie
          span Es conveniente utilizar una sola palabra para nombrar páginas, controles, variables, etc.
        li
          i.fas.fa-chart-pie
          span No utilizar caracteres reservados (%, +, /, >, etc.) tampoco letras acentuadas (á, é, í, ó, ú).
        li
          i.fas.fa-chart-pie
          span No utilizar palabras reservadas por los lenguajes de programación.

    .cajon--azul.ps-4.pe-4.py-3.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='max-width: 60px')
        .col
          p.mb-0 #[strong Ejemplo:] listar los identificadores usados en los algoritmos previos.

    p #[span.etiqueta--amarilla #[strong Solución:]] en el algoritmo de imprimir un número entero usando el identificador de #[strong entrada] para representar el número digitado.
    p En el algoritmo de imprimir el cuadrado y el cubo de un número entero empleando el identificador de #[strong entrada] para representar el número digitado, el identificador cuadrado para representar el valor del cuadrado de entrada y el identificador #[strong cubo] para almacenar el cubo entrada.
    p.mb-5 Todos los lenguajes de programación tienen unas palabras para nombrar sus comandos, instrucciones y funciones; estas palabras no se pueden usar como indicadores.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Variables")
        p Para los algoritmos con diversos conjuntos de datos iniciales, se debe determinar una independencia entre los datos iniciales de un problema y la estructura de su solución. Esto se hace mediante la utilización de variables (cantidades que se suelen emplear y que durante la ejecución del algoritmo pueden tomar cualquier valor de un intervalo de valores posibles).
        p Las variables son espacios de trabajo (contenedores) dispuestos para almacenar datos (valores). El valor de una variable puede ir cambiando en   algún paso del algoritmo o permanecer sin cambios; por lo tanto, el valor de una variable es el del último valor o dato asignado a esta. En la  figura 6, las variables eran los indicadores #[strong cuadrados] y #[strong cubo.]
      .row(titulo="Constantes")
        p Las constantes se crean de la misma forma que las variables, a diferencia que se procura su definición o creación a inicio del algoritmo. Las constantes consisten en datos que, luego de ser asignados, no cambian en ninguna instrucción del algoritmo; pueden contener constantes matemáticas (pi).
      .row(titulo="Contadores")
        p.mb-4 Un contador es una variable que está en ambos lados de una asignación (a la derecha y a la izquierda) interna, a la que se le suma un valor constante. Es necesario haberla iniciado al principio del algoritmo, ya que va a ser leído su contenido.
        .cajon--azul.p-4.mb-4
          .row.align-items-center
            .col-auto
              figure.d-none.d-xl-block.d-xxl-block
                img(src='@/assets/curso/temas/img30.svg', alt='' style='max-width: 60px')
            .col-auto
              p.mb-0 #[strong Ejemplo:] definir un contador llamado contador que se incremente en uno cada vez tres veces.

        figure.mb-4
          img(src='@/assets/curso/temas/img31.svg', alt='' style='max-width: 800px').m-auto

        p Como se puede ver en el algoritmo, tres veces se incremente en 1 (uno) el valor del contador y al final de la ejecución su valor es de 3. Es importante notar que contador inicia con un valor, el valor 0, si esta asignación inicial no se hace el computador pondría un valor aleatorio y el valor al final del algoritmo sería indeterminado.


      .row(titulo="Acumuladores")
        p Los acumuladores son una versión ampliada de contadores, tienen las mismas características que un contador excepto el valor que se va incrementando no es una constante sino una que es un valor variable.

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
