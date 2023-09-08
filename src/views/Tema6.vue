<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estructura de datos

    figure.mb-5
      img(src='@/assets/curso/temas/img52.jpg', alt='')

    p.mb-5 Es importante conocer el concepto de arreglos e identificar cuándo usarlos en la aplicación en los algoritmos. Así mismo, ser capaz de resolver problemas básicos mediante diagramas de flujo y pseudocódigo. De otra parte, existen varios tipos de arreglos y de estos los más comunes son los vectores y las matrices.

    #t_6_1
    .titulo-segundo.color-acento-contenido
      .h2 6.1  Vectores

    p Los arreglos o #[em array], en inglés, (matriz, arreglo o vector) se definen como un conjunto finito y ordenado de elementos del mismo tipo. La propiedad “ordenado” quiere decir que el elemento primero, segundo, tercero, …, enésimo de un #[em array] puede ser identificado y accedido. Cuando se dice que los elementos de un arreglo son homogéneos, significa que son del mismo tipo de datos. Un arreglo puede estar compuesto de todos sus elementos de tipo letras, otro puede tener todos sus elementos de tipo entero, etc. Los arreglos se conocen como matrices en matemáticas, y tablas en temas financieros (Vázquez, 2012).
    p Según sus dimensiones, los arreglos se clasifican en:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img53.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.tarjeta--amarilla
            .p-4
              h4.text-center Unidimensionales
              p De una dimensión, comparables con una lista de elementos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img54.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.tarjeta--amarilla
            .p-4
              h4.text-center Multidimensionales
              p Son arreglos de varias dimensiones o los más comunes son bidimensionales (dos dimensiones o tablas) o arreglos multidimensionales (tridimensionales, por ejemplo).

    .titulo-sexto.color-acento-contenido
      h5 Figura 7.
      span Matriz unidimensional con 10 elementos

    figure.mb-5
      img(src='@/assets/curso/temas/img55.svg', alt='' ).m-auto


    p Cada vector está compuesto de un número de elementos ya definidos, esto hace que sea una estructura estática (no puede aumentarse ni reducirse). Cada elemento está referenciado por la posición que ocupa dentro del vector. Estas posiciones son llamadas índices; nótese que empieza a contar desde 0.

    p Para referirse un vector se usa un identificador como se hace con las variables o constantes, pero queda entre corchetes [ ], por ejemplo si el vector se llama lista, y se quiere acceder al quinto elemento del vector, se debe hacer así lista[4], es de notar que la quinta posición se accede con el índice 4, porque se empezó a contar desde 0.

    p.mb-5 Para realizar las operaciones de asignación, lectura/escritura sobre un vector, se recomienda usar las estructuras repetitivas para, a través de ellas, manipular los índices correspondientes a las posiciones del arreglo.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p.mb-0 #[strong Ejemplo:] hacer un programa que pida 5 números enteros al usuario y los guarde en un arreglo de números en un arreglo, luego que imprima los números mayores de 100.

    p.my-5 A continuación, se revisan dos ejemplos:

    TabsB.my-5.color-acento-contenido
      .p-4(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img33.svg')")
        ul.lista-ul
          li
            i.fas.fa-angle-right
            span #[strong Formular el problema:] pedirle al usuario 5 números enteros almacenarlos en un arreglo y luego recorrer el arreglo para buscar los números mayores a 100.
          li
            i.fas.fa-angle-right
            span #[strong Resultados esperados:] imprimir en pantalla de los 5 números ingresados por el usuario solamente los mayores a 100.
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] 5 números ingresados por el usuario.
          li
            i.fas.fa-angle-right
            span #[strong Datos adicionales:] por cada uno de esos números validar si son mayores que 100 y mostrar los que lo sean en la pantalla.
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] ninguna.
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] se requiere definir un arreglo de tamaño 5, se necesita pedir 5 veces un entero y almacenarlos en el vector. Luego se debe recorrer las 5 posiciones del vector para comparar en cada uno de los datos si es mayor que 100, si el número comparador es lo que se debe imprimir. Como 5 es un número invariante, el programa lo define como una constante de nombre tamano (no se usa la ñ porque no permite ni acentos latinos ni tildes), se debe usar la sentencia repetitiva PARA porque se sabe el número de veces que se debe repetir cada acción.

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img34.svg')")

        .row.justify-content-center
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img56.svg', alt='Imagen que muestra la estructura del algoritmo del ejemplo propuesto y el algoritmo mismo.' )
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img57.svg', alt='Imagen que muestra la estructura del algoritmo del ejemplo propuesto y el algoritmo mismo.' )

    #t_6_2
    .titulo-segundo.color-acento-contenido
      .h2 6.2 Matrices

    p.mb-5 Las matrices son arreglos de más de una dimensión, en la siguiente figura se presenta un ejemplo de una matriz de 2 dimensiones que son 4x5 (correspondiente a 4 columnas y 5 filas).

    .titulo-sexto.color-acento-contenido
      h5 Figura 8.
      span Matriz de 4 X 5
    .row
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/img58.svg', alt='Imagen de una matriz de 4 X 5. Cuatro columnas y cinco filas.' )

      .col-lg-6
        p Para recorrer estas estructuras de datos se requieren ciclos anidados; estas técnicas se abordarán más adelante.

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
