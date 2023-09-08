<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Programación modular

    figure.mb-5
      img(src='@/assets/curso/temas/img59.jpg', alt='')

    p Existe un área que se denomina ingeniería del #[em software], que se interesa en el proceso de creación o producción de #[em software] y concentra sus esfuerzos en aportar herramientas, procedimientos y técnicas para su construcción.
    p La ingeniería del #[em software] propone que la construcción de #[em software] esté pensada en la descomposición de un problema en un conjunto de subproblemas independientes entre sí, más sencillos de analizar y resolver; estos subproblemas pueden ser tratados separadamente unos de otros. Lo anterior consiste, básicamente, en la modularidad del #[em software].
    p Debido a la modularidad se pueden probar los subprogramas o módulos de manera independiente, depurando errores antes de su uso en el programa principal y almacenándose para su posterior reutilización cuantas veces se necesite.
    p El enfoque básico de modularidad en un algoritmo puede estar compuesto de otros algoritmos que se especializan en una función determinada. Para saber cómo descomponer un algoritmo en pequeños algoritmos, se listan los aspectos que pueden ayudar a definir la división de algoritmos:

    AcordionA.my-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Según la funcionalidad: ")
        p.px-5 Un algoritmo debe realizar una función específica y no ir más allá de sus responsabilidades. Por ejemplo, si se tiene un módulo que calcula la multiplicación de dos números y devuelve el resultado, no sería adecuado que, además, imprima mensajes en pantalla o haga otra cosa diferente de su propósito.
      .row(titulo="Según su identificación: ")
        p.px-5 Cada módulo tiene un nombre de identificación que permite ejecutarlos y diferenciarlos de otros, es recomendable que al elegir este nombre que sea representativo de la función que realiza, de esa forma resulta intuitivo en el momento de usarlo dentro de un algoritmo.
      .row(titulo="Según sus datos de entrada:")
        p.px-5 Los módulos comúnmente reciben datos de entrada necesarios para realizar las operaciones requeridas. Se pueden clasificar los módulos de acuerdo con los parámetros que se requieren para obtener los resultados solicitados. Al momento de usar el módulo se tienen que agregar todos los parámetros necesarios, en el orden establecido y deben ser del tipo correcto.
      .row(titulo="Parámetro de salida: ")
        p.px-5 También se puede emplear los resultados a la salida del algoritmo para clasificar los módulos, ya que en el momento de definir un algoritmo se debe indicar el tipo de dato que devuelve al momento de la ejecución del algoritmo.
      .row(titulo="Pruebas de escritorios:")
        p.px-5 Como se mencionó antes, las pruebas escritorio sirven para depurar y probar que un algoritmo solucione el problema, en esta sesión se mencionarán los objetivos principales y se ejecutará una prueba a un algoritmo de mejor complejidad para su comprensión.

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure.d-none.d-xl-block.d-xxl-block
            img(src='@/assets/curso/temas/img30.svg', alt='' style='width: 100%')
        .col
          p #[strong Ejemplo:] realizar un algoritmo que solicite dos números e imprima cuál es el mayor de ambos, si son iguales, mostrar cualquiera.

    TabsB.my-5.color-acento-contenido
      .py-4.py-md-5(titulo="Análisis" :icono ="require ('@/assets/curso/temas/img7.svg')")
        ul.lista-ul
          li
            i.fas.fa-angle-right
            span #[strong Formular el problema:] es un algoritmo que solita y compara dos números para mostrar el mayor.
          li
            i.fas.fa-angle-right
            span #[strong Resultados esperados:] el número que es mayor de ambos.
          li
            i.fas.fa-angle-right
            span #[strong Datos disponibles:] 2 números ingresados por el usuario
          li
            i.fas.fa-angle-right
            span #[strong Datos adicionales:] ninguno.
          li
            i.fas.fa-angle-right
            span #[strong Restricciones:] validar cuál número es mayor para saber cuál mostrar.
          li
            i.fas.fa-angle-right
            span #[strong Procesos necesarios:] se requiere definir los datos a recibir, pedirle que al usuario que digite los números, comparar para saber cuál es el mayor y mostrarlo.

      .p-4(titulo="Diseño" :icono="require('@/assets/curso/temas/img8.svg')")
        .row.justify-content-center
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img60.svg', alt='Imagen de la estructura del algoritmo del ejemplo propuesto.' )
          .col-lg-5
            figure.my-5
              img(src='@/assets/curso/temas/img61.svg', alt='Imagen de la estructura del algoritmo del ejemplo propuesto.' )


          h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Diseño de prueba 1
          p #[strong Selección de datos:] se usarán para la prueba los números 34 y 16.
          p.mb-5 #[strong Salida esperada:] debe mostrar el número 34.

        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Prueba de escritorio de algoritmo el mayor de dos números

        figure.mb-5
          img(src='@/assets/curso/temas/img62.svg', alt='Imagen que muestra el diseño de prueba del algoritmo solicitado: mostrar el mayor de dos números.' )

    p Una prueba de escritorio no es determinante en este ejercicio, es necesario hacerla para los dos casos faltantes, en caso que el segundo número es mayor que el primero y el caso en que ambos números ingresados son iguales. Se propone que use el ejemplo de la figura 18 para realizar el desarrollo final del ejemplo.


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
