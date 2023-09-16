<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diagramas de flujo

    p Una forma común de presentar los algoritmos es con diagramas de flujo, que consiste en una representación por medio de un gráfico. Mientras en seudocódigo las sentencias se representaban con preposiciones en diagramas de flujo la preposición es reemplazada por una figura.

    p.mb-5 Tomando el ejemplo propuesto en la figura 1, la representación del algoritmo sería la siguiente:

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Diagrama de flujo imprimir un entero
    figure.mb-5
      img(src='@/assets/curso/temas/img13.png', alt='Imagen de la representación del algoritmo Imprimir un entero. Su estructura es: inicio, por favor ingrese un número, entrada, entrada, fin.')


    .tarjeta.tarjeta--gris.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/infografia1t2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ventajas de los diagramas de flujo
              p.text-small.mb-0 Es ideal revisar la siguiente infografía sobre las ventajas de la representación gráfica de un algoritmo a través del diagrama de flujo.
            .col-sm-auto
              a.boton.color-botones(:href="obtenerLink('/downloads/Infografia_ventajas_diagrama_de_flujo.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5 Retomando los ejemplos dados a lo largo de este componente formativo, la representación del algoritmo que calcula el cuadrado y el cubo de un número introducido por teclado y mostrar los resultados del cubo y del cuadrado, es:

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Diagrama de flujo imprimir el cuadrado y el cubo de un entero
    figure.mb-5
      img(src='@/assets/curso/temas/img14.svg', alt='Imagen de la representación del algoritmo Imprimir el cuadrado y el cubo de un entero. Su estructura es: inicio, por favor ingrese un número, entrada, cuadrado entrada por entrada, cubo entrada por entrada por entrada, cuadrado, cuadrado, fin.')

    p La Organización Internacional para la Estandarización (ISO, por su sigla en inglés) y el Instituto Nacional Americano de Estandarización (ANSI, por su sigla en inglés), estandarizaron los símbolos que han sido mayormente aceptados en 1985. Con el fin de evitar la utilización de símbolos diferentes para representar procesos iguales (López, 2009).
    p Los siguientes son los principales símbolos para crear diagramas de flujo:
    .tarjetas_container.mb-5
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img15.svg', alt='Símbolo de Inicio / Final' style='width:312px')
        .h4.mt-2.text-center Inicio/Final
        p.text-center Se utiliza para indicar el inicio y el final de un diagrama; del Inicio solo puede salir una línea de flujo y al Final solo debe llegar una línea (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img16.svg', alt='Símbolo de Decisión' style='width:312px').m-auto
        .h4.mt-2.text-center Decisión
        p.text-center Indica la comparación de dos datos y dependiendo del resultado lógico (falso o verdadero) se toma la decisión de seguir un camino del diagrama u otro (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img17.svg', alt='Símbolo de Entrada general' style='width:312px').m-auto
        .h4.mt-2.text-center Entrada General
        p.text-center Entrada/Salida de datos en General (en esta guía, solo se usará para la Entrada) (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img18.svg', alt='Símbolo de Iteración' style='width:312px')
        .h4.mt-2.text-center Iteración
        p.text-center Indica que una instrucción o grupo de instrucciones deben ejecutarse varias veces (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img19.svg', alt='Símbolo de Entrada por teclado' style='width:312px').m-auto
        .h4.mt-2.text-center Entrada por teclado
        p.text-center Instrucción de entrada de datos por teclado. Indica que el computador debe esperar a que el usuario teclee un dato que se guardará en una variable o constante (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img20.svg', alt='Símbolo de Salida impresa' style='width:312px').m-auto
        .h4.mt-2.text-center Salida Impresa
        p.text-center Indica la presentación de uno o varios resultados en forma impresa (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img21.svg', alt='Símbolo de Llamada a subrutina' style='width:312px')
        .h4.mt-2.text-center Llamada a subrutina
        p.text-center Indica la llamada a una subrutina o procedimiento determinado (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img22.svg', alt='Símbolo de Salida en pantalla' style='width:312px').m-auto
        .h4.mt-2.text-center Salida en Pantalla
        p.text-center Instrucción de presentación de mensajes o resultados en pantalla (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img23.svg', alt='Símbolo de Acción / Proceso general' style='width:312px').m-auto
        .h4.mt-2.text-center Acción/Proceso General
        p.text-center Indica una acción o instrucción general que debe realizar el computador (cambios de valores de variables, asignaciones, operaciones aritméticas, etc.) (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img24.svg', alt='Símbolo de Conector' style='width:312px')
        .h4.mt-2.text-center Conector
        p.text-center Indica el enlace de dos partes de un diagrama dentro de la misma página (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img25.svg', alt='Símbolo de Flujo' style='width:312px').m-auto
        .h4.mt-2.text-center Flujo
        p.text-center Indica el seguimiento lógico del diagrama. También indica el sentido de ejecución de las operaciones (López, 2009).
      .tarjetas_container--organizada.p-3.m-3
        img(src='@/assets/curso/temas/img26.svg', alt='Símbolo de Conector' style='width:312px').m-auto
        .h4.mt-2.text-center Conector
        p.text-center Indica el enlace de dos partes de un diagrama en páginas diferentes (López, 2009)

    #t_2_1
      .titulo-segundo.color-acento-contenido
        .h2 2.1 Elaborar diagramas de flujo

    p.mb-4 Cuando el algoritmo se desea representar como diagrama de flujo, se deben tener en cuenta algunos principios para su elaboración (Rojas y Ñacato, 1980):
    //todo Pendiente agregar infografía

    .tarjeta.tarjeta--gris.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/infografia1t2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Diagramas de flujo
              p.text-small.mb-0 Conozca tales principios y generalidades, descargando y explorando la infografía que a continuación se propone:
            .col-sm-auto
              a.boton.color-botones(:href="obtenerLink('/downloads/Infografia_diagrama_de_flujo.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    #t_2_2
    .titulo-segundo.color-acento-contenido
      .h2 2.2 Herramientas digitales para creación y prueba de algoritmos

    p Para aprender a reconocer los elementos que componen los diagramas de flujo se puede hacer uso de la herramienta denominada Draw.io a través del enlace &nbsp;
      a.link(href="https://app.diagrams.net/ " target="_blank")
        |https://app.diagrams.net/
      | &nbsp;con la que puede usar una cuenta de correo de Google, o misena.edu.co para acceder y crear un nuevo diagrama.
    p.mb-5 Es ideal ingresar y seleccionar los diagramas que se muestran en la siguiente figura.

    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Seleccionar formas
    figure.mb-5
      img(src='@/assets/curso/temas/img28.png', alt='Imagen del entorno de Draw.io que muestra las posibilidades de diagramas por seleccionar. La imagen resalta la selección específica de Formas')
      figcaption  Nota.Tomada de https://app.diagrams.net/

    p En caso de contar con intermitencia de internet se puede realizar el ejercicio propuesto a través del programa de libre distribución disponible en &nbsp;
      a.link(href="http://dia-installer.de/" target="_blank") http://dia-installer.de/
      | o puede acceder a la versión de escritorio de Draw.io disponible en &nbsp;
      a.link(href="https://app.diagrams.net/" target="_blank") https://app.diagrams.net/
      |.

    p.mb-5 Consulte el video que se propone en el siguiente enlace y afiance sus conocimientos en cómo descargar draw io 2 para dibujar diagramas de flujo:

    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=encz3h8TLWA" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p #[strong Enlace web.] Instituto de Informática Uach. (08 de septiembre de 2020). Cómo descargar draw io 2 para dibujar diagramas de flujo. [Video].

    p.mt-5 El programa de mayor uso para el diseño y depuración de algoritmos en pseudocódigo es #[strong PSeInt] disponible en &nbsp;
      a.link(href="http://pseint.sourceforge.net/" target="_blank") http://pseint.sourceforge.net/.



</template>

<script>
export default {
  name: 'Tema2',
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
