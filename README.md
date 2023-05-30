
#<h1>Simulador RVL rediseñado en angular</h1>
 <p> El objetivo de esta demostracion es poder mostrar el potencial de realizarlo con un framework mas moderno que ayude al desarrollador
    en sus tareas, acelerándose los tiempos de desarrollo gracias al reemplazo de GTK por Angular el cual trae muchas mas posibilidades al momento
    de plantear alternativas innovadoras y que puedan en última instancia beneficiar al usuario final del simulador que es el estudiante</p>
 
#<h2> Comandos básicos para la ejecución </h2>
<p>Se configuró el siguiente script "npm run electron" el cual puede ejecutar una instancia de nodejs en el ordenador local del desarrollador.</p>
<p/> Además si se lo desea puede ejecutarse el programa en un entorno web utilizando los comandos de Angular ng serve -o para que lo ejecute abriendo una nueva página local
e incluso ng serve --watch -o para que sumado a lo anterior se actualice ante los cambios</p>

#<h2> Modificaciones respecto a las versiones anteriores del simulador</h2>
<p> Como el objetivo final de este equipo de desarrollo es hacer el simulador mas útil para el alumno, haciendo que el mismo disfrute del uso del mismo
  y contribuya a una gran experiencia en el cursado de redes se han aprovechado las posibilidades de un desarrollo con html, css y javascript 
  se han planteado mejoras con respecto al RVL anterior, entre las cuales se pueden listar:</p>
  <ul>
  <li> Se cambiaron las barras de herramientas tanto la botonera de ejecución como el panel de objetos y guías de trabajo para que las mismas
  sean flotantes (se pueden arrastrar a lo largo de la pantalla) y puedan minimizarse (caso del panel de objetos) de forma tal que la protagnosista de esta simulacion sea la topología, ocupando todo el ancho de la pantalla
  </li>
    <li>Se rediseñó el proceso de conexión para que el mismo sea mas intuitivo y agradable a la vista, estableciendo diferentes efectos visuales para hacerle sentir 
      al alumno que el simulador tiene vida y que responde ante sus acciones
  </li>
   <li> Se elimino el drag and drop de dispositivos y fue reemplazado por un click para de esa forma poder crear objetos con mas fluidez en lugar de arrastrar y soltar todo el tiempo
  </li>
</ul>

<footer> La versión de Angular utilizada es Angualr 12 </footer>
