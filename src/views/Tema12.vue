<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Fallas de lógica

    p.mb-5 Para realizar las depuraciones y correcciones en la lógica, es preciso realizar la ejecución paso a paso de algunas líneas de código, para poder apreciar los cambios que las variables tienen en el transcurso de la ejecución. A continuación, se indican algunas instrucciones para realizar una revisión paso a paso, cuando la depuración se hace desde un navegador web siguiente los siguientes pasos.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 A. Chrome DevTools

    .row.my-5
      .col-lg-5
        p Se puede ir a las herramientas de desarrollo (DevTools) pulsando #[code.etiqueta "Command+Option+I"] en Mac o #[code.etiqueta "Control+Shift+I"] en Windows y Linux para ver el panel de inspección en la parte izquierda de la ventana del navegador.  Al inspeccionar el elemento ofrece diferentes opciones para trabajar.
      .col-lg-7
        figure
          img(src='@/assets/curso/temas8-13/img48.svg', alt='')

    p.mb-5 Las opciones presentes para depuración en Chrome son:

    .tarjeta-azul.px-5.py-3.mx-5.mb-5

      ul.lista-ul--color.ps-2
        li
          i.fas.fa-check
          span.mb-0 #[strong Console:] la consola se utiliza para imprimir registros, muestra errores y advertencias.
        li
          i.fas.fa-check
          span.mb-0 #[strong Elements:] se pueden seleccionar los elementos para inspeccionar los elementos HTML y hacer estilos en ellos.
        li
          i.fas.fa-check
          span.mb-0 #[strong Sources:] permite navegar los archivos que están presentes en la página cargada y se puede elegir el archivo que se desea consultar.
        li.mb-0
          i.fas.fa-check
          span.mb-0 #[strong Network:] empleado para inspeccionar todas las llamadas de red que realizan los clientes al servidor, como las cabeceras HTTP, el contenido y el tamaño.

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 B. Seleccionar fuente (#[em sources])

    .row.my-5
      .col-lg-6
        p Una vez se tiene que ir a la sección del archivo con el código fuente a depurar, se puede navegar a través de él e identificar la porción   de código en la que se sospecha ocurre un error en la lógica.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas8-13/img49.jpg', alt='Imagen que muestra la selección de fuente.').m-auto

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 C. Marcar punto de interrupción

    .row.my-5
      .col-lg-6
        p Un punto de interrupción es una línea de código donde el programa se detendrá. Ya seleccionado el archivo a ser depurado, se puede ver que  hay números de línea escritos por cada línea de código. Se debe hacer clic en este número de línea y esta línea actuará como un punto de   interrupción y la ejecución se detendrá una vez que el control llegue a esta línea.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas8-13/img50.jpg', alt='').m-auto

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 D. Avanzar línea a línea

    .row.my-5
      .col-lg-6
        p Cuando la ejecución se detiene en el punto de interrupción, se puede reanudar la ejecución haciendo clic en el botón azul que se muestra en   la figura, así la ejecución avanza línea por línea. Aquí se puede inspeccionar cada línea de código junto con los valores contenidos en  las variables.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas8-13/img51.jpg', alt='').m-auto

    h4.mb-5
      span.span-amarillo.h4.ps-4.pe-4.py-2.mb-5 E. Comprobar el estado de las variables

    .row.my-5
      .col-lg-6
        p.mb-5 El punto más importante es conocer los valores de las variables, esto se hace pasando el ratón por encima de la variable. La principal  ventaja de usar puntos de ruptura es que se pueden conocer los valores de más de una variable al mismo tiempo, lo que no es posible en el  caso de las consolas de registro, donde se debe escribir #[code.etiqueta console.log()] para cada variable.

        a.anexo.mb-4.mb-lg-5.m-auto(href="https://youtu.be/I388w3wDkjc" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] Se puede ver un ejemplo en el siguiente enlace: https://youtu.be/I388w3wDkjc (Autodidacta F, 2017).

      .col-lg-6
        figure.mb-5
            img(src='@/assets/curso/temas8-13/img52.jpg', alt='').m-auto





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
