<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Conceptos básicos de programación

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas8-13/img1.svg', alt='')
      .col-lg-7
        p Programar es el proceso de crear #[em software] escribiendo, probando, depurando y dando mantenimiento a las instrucciones del computador en un lenguaje de programación. A este conjunto de instrucciones se les denomina código fuente del #[em software] creado.
        p Existen centenares de lenguajes de programación, muchos de ellos fueron creados para dar respuesta a problemas particulares o máquinas específicas. No es de interés ahora discutir todos los tipos de lenguajes existentes, sino, más bien, conocer aquellos que pueden ser interpretados por computadores, #[em smartphones] o que pueden ser empleados para proveer servicios informáticos a través de internet y su clasificación más general.
        p Un lenguaje de programación es diferente al lenguaje de códigos que puede entender la máquina (lenguaje de máquina). Los lenguajes de programación, pueden dividirse en dos categorías: lenguajes interpretados o lenguajes compilados, a saber:

    .titulo-sexto.color-acento-botones
      h5 Tabla 2.
      span Lenguajes de programación

    .tabla-a.mb-5
      table
        thead.header1
          tr
            th Compilado
            th Interpretado
        thead.header2
          tr.text-center
            <th colspan="2">Definición</th>

        tbody
          tr
            td El código creado debe traducirse de manera que el procesador del computador o smartphone pueda comprenderlo, a este proceso se le llama compilación.
            td Un programa escrito en un lenguaje interpretado, necesita de otro programa auxiliar (el intérprete), que traduce los códigos fuentes de un programa y los interpreta para la máquina.
          tr
            td El lenguaje compilado necesita que antes de ser ejecutada una compilación se convierta el código fuente escrito a un lenguaje de máquina.
            td Un lenguaje interpretado es convertido a lenguaje de máquina cada vez que es ejecutado (para ello requiere del intérprete), que traduce las instrucciones.
        thead.header2
          tr.text-center
            <th colspan="2">Características</th>
        tbody
          tr
            td Para un lenguaje compilado luego de compilar un programa se debe crear ejecutables para cada uno de los sistemas operativos en los que lo vaya a utilizar. Es decir, un programa compilado en Linux no servirá en Windows o en Mac OS.
            td Por lo general, en el ciclo de desarrollo de #[em software] (tiempo entre el momento en que escribe el código y lo prueba) es más corto en un lenguaje interpretado dado que no se necesita realizar el proceso de compilación, cada vez que cambia el código fuente.
          tr
            td Cuando se está ejecutando un programa escrito en un lenguaje compilado es mucho más rápido que uno interpretado, dado que se encuentra en código de máquina.
            td Un lenguaje interpretado para ser ejecutado, debe tener instalado el interpretador.
          tr
            td Los lenguajes compilados están optimizados para el momento de la ejecución, pero esto significa más trabajo para el programador (compilarlo).
            td El código fuente en un lenguaje interpretado está optimizado para hacerle la vida más fácil al programador, aunque esto signifique una carga adicional de procesamiento para la máquina.
    p JavaScript, al igual que cualquier otro lenguaje de programación, tiene algunas características especiales: sintaxis, modelo de datos, etc. JavaScript es un lenguaje esencial para cualquier principiante de programación y también para quienes ya saben programar, debido a que las diferencias con otros lenguajes de programación son numerosas siendo un lenguaje necesario para el desarrollo de aplicaciones web y móviles hoy en día.
    p En adelante, JavaScript es el lenguaje de programación abordado y es un lenguaje interpretado que inicialmente fue creado para que los navegadores lo interpreten y hoy en día muchos dispositivos tienen el intérprete que permite correr programas escritos en él #[strong por lo que será más sencillo el trabajo tanto para la máquina como para el programador].



</template>

<script>
export default {
  name: 'Tema8',
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
