# ReactTaller
¿Cuál es la diferencia entre un componente UI y un componente funcional en React?
-
-Componente UI:
-
- Un componente UI es cualquier pieza reutilizable de la interfaz de usuario de una aplicación React.
- Se centra en la presentación visual de la aplicación, definiendo cómo se verá en la pantalla.
- Un componente UI puede implementarse como un componente funcional o como una clase que extiende
  
-Componentes funcionales:
-
- Los componentes funcionales no tienen estado interno.
- Son generalmente más simples de escribir y mantener que los componentes de clase

¿Qué son las props en React y cuál es su propósito principal?
-
Las props permiten que diferentes componentes se comuniquen entre sí. Un componente padre puede enviar información a sus componentes hijos a través de las props, y estos hijos pueden utilizar esa información para renderizar su contenido de manera dinámica.
Los props permiten crear componentes reutilizables que se adapten.
Las props son una herramienta esencial en React para crear aplicaciones modulares y escalables. Al comprender cómo funcionan las props, podrás construir componentes reutilizables y gestionar la comunicación entre diferentes partes de tu aplicación de manera efectiva.

¿Qué son los children props en React y por qué no se recomienda su uso excesivo?
-
En React, los children props son una forma especial de pasar contenido a un componente. Este contenido puede ser cualquier elemento de React, texto, o incluso otros componentes. Básicamente, es el contenido que se coloca entre las etiquetas de apertura y cierre de un componente.
Aunque los children props son muy útiles, su uso excesivo puede llevar a algunos problemas tales como: Si un componente depende demasiado de sus children props, puede volverse difícil de reutilizar en diferentes contextos; Los componentes con muchos children pueden ser más difíciles de probar de forma aislada, Un uso excesivo de children puede hacer que el código sea menos legible y más difícil de mantener.

¿Qué es useState en React y para qué se utiliza principalmente?
-
useState es una herramienta esencial en React para crear componentes dinámicos e interactivos.
  
