# Registro de Cambios - English.html

Este archivo servirá para registrar todos los cambios que vayamos realizando en el programa `English.html`.

## Historial de Cambios

- **Inicio**: Creación de este archivo de registro para organizar nuestro trabajo.

---
*Añadiremos aquí cada modificación que hagamos paso a paso.*

- **Rediseño Botón Verificación (Modo Estudio)**: Se ha cambiado el diseño del botón de verificación en las flashcards para que sea idéntico en forma y estilo a los botones "Inicio" y "Voltear". Ahora tiene forma de píldora con el texto "○ Validar" (en rojo) o "✓ Validado" (en verde).
- **Alineación de Botones**: Se han alineado los tres botones ("Inicio", "Validar", "Voltear") en la misma línea en la parte superior de la tarjeta frontal.
  - El estado (rojo/verde) se guarda de forma persistente.
  - El estado es independiente entre el Modo Estudio y el Modo Quiz.

- **Corrección de "Conditionals" y Tarjeta Giratoria (25 de Junio)**: 
  - Se solucionó un error en JavaScript que bloqueaba el Modo Estudio y el Modo Quiz al entrar a Conditionals.
  - Se modificó la tarjeta del email para usar CSS Grid, adaptando su altura al contenido y evitando superposiciones con la etiqueta "English".
  - Se implementaron tamaños dinámicos (responsive con `clamp()`) para el logo superior y la tarjeta del email, logrando que no se corten en pantallas pequeñas de móvil.

- **Mejoras de Layout Móvil y Flashcards (26 de Junio)**:
  - Se centró y ajustó el espaciado del logo principal en la pantalla de Inicio para una apariencia más profesional.
  - Se incrementó el espaciado entre los 4 botones principales y se desplazaron ligeramente hacia abajo.
  - Se movieron los botones de Exportar/Importar datos al final de la pantalla de Inicio.
  - Se añadió la capacidad de desplazamiento horizontal (scroll) a los botones superiores del Modo Estudio para que todos sean accesibles en pantallas pequeñas.
  - En el Modo Estudio, al editar una flashcard, ahora se muestran siempre 4 campos para ejemplos, permitiendo agregar hasta 4 ejemplos. En modo vista normal, los espacios de ejemplos vacíos se ocultan automáticamente.
  - Se solucionó un pequeño fallo visual que cortaba los bordes de los botones superiores en Modo Estudio al desplazarse horizontalmente.

- **Favoritos y Estado de Aprendizaje en Modo Estudio (27 de Junio)**:
  - Se añadió la opción de marcar cualquier flashcard como "Favorita" tocando una estrella (☆ -> ⭐) en la parte inferior derecha, tanto en el anverso como en el reverso de la tarjeta.
  - Se implementó un nuevo filtro "⭐ Favoritos" en la barra superior (al lado del botón de palabra aleatoria).
  - Se añadió un botón de "Estado de Aprendizaje" en la flashcard, debajo de la imagen, con 4 niveles que rotan al pulsarse: Neutro, Ya me la sé (Verde), Repasar (Amarillo), y Siempre me equivoco (Rojo).
  - Se añadieron 3 botones de filtro rápido en la barra superior para ver exclusivamente las tarjetas en cada uno de estos tres estados de aprendizaje. Estos filtros son exclusivos entre sí y combinables con las categorías y favoritos.
  - El menú desplegable de "Cualquier registro" fue desplazado a la derecha de estos nuevos filtros para mantener la organización.

- **Migración a IndexedDB para solucionar límite de imágenes (3 de Julio)**:
  - Se modificó la arquitectura de almacenamiento para utilizar `IndexedDB` en lugar de sólo `localStorage`. Esto soluciona de raíz los problemas al guardar fotos ("Your browser has no local storage space"), ya que IndexedDB no tiene el estricto límite de 5MB.
  - Se implementó un modo híbrido que carga primero `localStorage` para ser rápido, pero recupera de `IndexedDB` todas las imágenes y ediciones pesadas de fondo.
  - Las acciones de guardado ahora escriben en ambas bases de datos simultáneamente como medida de seguridad redoblante.
  - Se añadieron alertas específicas por si incluso `IndexedDB` falla por falta total de espacio en el disco duro del usuario.
  - Se arregló un problema donde presionar en el menú sin desenfocar el campo de edición no guardaba las últimas letras (se forzó el guardado en los botones de navegación).
  - El botón superior "Guardar" del modo estudio ahora se llama "Exportar" y descarga un archivo JSON ligero con los datos en lugar de descargar todo el HTML (ya que el autoguardado funciona en tiempo real y no hace falta generar un nuevo HTML).
