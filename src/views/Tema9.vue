<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Entornos de codificación e instalación JavaScript


    figure
      img(src='@/assets/curso/temas8-13/img2.jpg', alt='')

    .row.my-5
      .col-lg-7
        p En su mayoría los navegadores (Chrome, Mozilla, Edge) tienen intérprete de #[strong JavaScript] y adicional se puede instalar el intérprete para el sistema operativo de preferencia (Framebits, 2020).
        p Dado lo anterior, existen herramientas, manuales o videos que se emplean para el desarrollo de programas en #[strong JavaScript] y a continuación se comparten recursos de acceso y material audiovisual de apoyo de cada herramienta, tal como se indica en la siguiente tabla.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas8-13/img3.svg', alt='')


    .titulo-sexto.color-acento-botones
      h5 Tabla 3.
      span Entornos de codificación

    .tabla-a.mb-5
      table
        thead.header1
          tr
            th Herramienta
            th Recurso Web
            th Uso y/o instalación
        tbody
          tr
            td.text-center Editor y compilador en línea PlayCode
            td.text-center
              a.link(href="https://playcode.io/" target="_blank")
                | https://playcode.io/
            td Harlley Oliveira (2017). #[em PLAYCODE MAKERS: O QUE É JAVASCRIPT?]&nbsp;
              a.link(href="https://www.youtube.com/watch?v=1mjvPBHiYnY" target="_blank")
                | https://www.youtube.com/watch?v=1mjvPBHiYnY
          tr
            td.text-center Intérprete de JavaScript: Node js
            td.text-center.header2
              a.link(href="https://nodejs.org/es/" target="_blank")
                | https://nodejs.org/es/
            td Framebits. (19 de enero. 2020). Descargar e instalar Node Js en Windows 10.
              a.link(href="https://youtu.be/v0x1Ku5Tgac" target="_blank")
                | https://youtu.be/v0x1Ku5Tgac
          tr
            td.text-center Editor de código Visual Studio Code
            td.text-center
              a.link(href="https://code.visualstudio.com/" target="_blank")
                | https://code.visualstudio.com/
            td Code Compadre. (30 de junio. 2020). How to Download and Install Visual Studio Code for Windows 10.
              a.link(href="https://youtu.be/KpzkPlh_HsU" target="_blank")
                | https://youtu.be/KpzkPlh_HsU

          tr
            td.text-center El navegador: Google Chrome
            td.text-center
              a.link(href="https://www.google.com/chrome/" target="_blank")
                | https://www.google.com/chrome/
            td Choque, R. C. (2020, May 10). Cómo usar la consola de google chrome para Javascript. Youtube. Retrieved from
              a.link(href="https://www.youtube.com/watch?v=Hf3n-p3VYx4 " target="_blank")
                | https://www.youtube.com/watch?v=Hf3n-p3VYx4


</template>

<script>
export default {
  name: 'Tema9',
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
