# week7_day1

> React | create-react-app
>
> React | Intro, JSX and Elements
>
> React | Components and Props

## Main points: React
* Librería de Javascript para crear interfaces de usuario, también en formato **Single Page Application**.
* La transferencia de información entre componentes se realiza a través de `props` mediante un flujo unidireccional de datos padres > hijos.
* La prop `children` recoge todos los elementos anidados dentro de un componente.
* El paquete global `create-react-app` cubre todos los requerimientos para comenzar un proyecto de React: 

  ````npx create-react-app nombre-proyecto````

## Main points: Componentes funcionales

Los componentes funcionales:
   * Son funciones de Javascript
   * Sin estado
   * Retornan JSX
   * Disponen de las props recibidas como claves del parámetro por defecto - usualmente llamado `props`
   * Disponen de los contenidos anidados en el parámetro `children`

El desarrollo de componentes supone:
  - Importación de recursos externos (otros componentes, hojas de CSS, imágenes).
  - Declaración del componente.
  - Exportación del componente (por defecto o nominal).

## Main points: JSX
   * Javascript **eXtension** que produce *React elements* para ser renderizados en el DOM.
   * Los elementos de JSX son manejados como expresiones de Javascript.
   * Todas las etiquetas disponen de apertura y cierre.
   * La sintaxis de algunos atributos se ve alterada (`class` -> `className`).
   * No es posible retornar elementos adyacentes.
   * Es posible interpolar JS en elementos de JSX entre llaves.
   * Para interpolar el valor de un atributo es necesario omitir las comillas del mismo.

