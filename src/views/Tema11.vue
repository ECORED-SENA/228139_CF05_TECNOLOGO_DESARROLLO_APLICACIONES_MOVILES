<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Depuración y fallas de sintaxis


    figure.mb-5
      img(src='@/assets/curso/temas8-13/img46.jpg', alt='')
    p.mb-5 La principal funcionalidad que se requiere en la depuración del código, es la mostrar salidas parciales de datos de depuración del estado de las variables, o tal vez se tenga la necesidad de mostrar que se está ejecutando determinada línea de código. Por lo general, la salida de JavaScript está dirigida hacia un navegador o hacia un flujo de datos de un servidor web, dejando la consola para realizar estas depuraciones

    .row.mb-5.align-items-center
      .col-lg-5
        p Hasta ahora se ha usado la consola para mostrar datos de depuración cuando se emplea #[strong console.log()], que es un método usado para mostrar mensajes de confirmación de operaciones o mitificaciones de éxito en las operaciones del algoritmo. Pero también existen más:
      .col-lg-7
        .tarjeta-azul.p-4
          ul.lista-ul--color.ps-2
            li
              i.fas.fa-check
              span #[strong console.log()] para enviar y registrar mensajes generales.
            li
              i.fas.fa-check
              span #[strong console.dir()] para registrar un objeto y visualizar sus propiedades.
            li
              i.fas.fa-check
              span #[strong console.warn()] para registrar mensajes de alerta.
            li
              i.fas.fa-check
              span #[strong console.error()] para registrar mensajes de error.

    //figure.my-5
      img(src='@/assets/curso/temas8-13/img47.jpg', alt='' style="width:500px").m-auto
      figcaption(style="width:500px").m-auto Figura 31/ Mensaje de depuración

    a.anexo.m-auto(href="https://youtu.be/Hf3n-p3VYx4" target="_blank" style="width: 100%")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p #[strong Enlace web.] Se puede revisar el procedimiento de despliegue y uso de consola para el navegador Google Chrome en el siguiente enlace https://youtu.be/Hf3n-p3VYx4 (Choque, R. C, 2020).

</template>

<script>
export default {
  name: 'Tema11',
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
