<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Manejo de errores y excepciones

    p Las excepciones son errores imprevistos que ocurren en la ejecución de un programa; son anormalidades que impiden o perturban el comportamiento o el flujo normal de las instrucciones de un programa.
    p El objetivo principal en el manejo de errores es separar el código de la lógica del programa, del código de manejo de excepciones: #[b de esta forma, al producirse la anomalía, si ocurre un error y existe un manejador de excepciones, él toma el control de la ejecución del programa].
    p En #[b JavaScript], el control de errores resulta muy necesario tal vez más que en otros lenguajes debido a la dificultad natural de este para testear aplicaciones o los cambios de versión de intérprete en múltiples navegadores.
    p La forma más sencilla de disparar un error es con la palabra reservada #[b throw], este comando permite enviar al intérprete de #[b JavaScript] el evento de que ha ocurrido un error, generalmente permite enviar cualquier tipo de dato, pero lo más común que envíe un #[b “Error”] como se muestra enseguida.

    figure.my-5
      img(src='@/assets/curso/temas8-13/img53.svg', alt='' style="width:500px").m-auto

    p.mb-5 Existe un tipo de estructura de control en #[b JavaScript] que está pendiente de revisar en el flujo de ejecución de un programa para detectar comportamientos inesperados, la estructura es #[b try … catch] que consta de un bloque que intenta la ejecución de una sesión de código (contexto), a la espera de que pueda ocurrir una posible excepción. Finalizado el contexto existe otro denominado catch que tiene un argumento o variable de contexto, donde se captura el elemento disparado.

    .row.my-5.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 25.
          span Bloque de captura de excepción

        figure.mb-5
          img(src='@/assets/curso/temas8-13/img54.jpg', alt='Imagen de bloque de captura de excepción' style="width:500px").m-auto

    p En la figura se muestra un algoritmo que divide dos números y, como se sabe, en este proceso se debe validar que no exista una división por 0 al no estar definida aritméticamente.
    p Para eso existe el contexto #[code.etiqueta try] que va desde la línea 4 a la línea 10, y dentro de él se verifica el caso que el divisor si es igual a 0 debe disparar una excepción. Ella es capturada en la línea 10 por el contexto catch en la variable e, de esta forma, el contexto de catch de la línea 10 a la 13 maneja la excepción, mostrando un mensaje de error y volviendo la variable resultada a nulo. Así, la excepción es lanzada y capturada y el programa no es interrumpido abruptamente, sino que es controlado a pesar de los problemas que se puedan presentar.


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
