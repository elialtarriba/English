# Registro de Cambios - English.html

Este archivo servirá para registrar todos los cambios que vayamos realizando en el programa `English.html`.

## Historial de Cambios

- **Versión V22 (18 de Julio)**:
  - **Ajustes M.Estudio**: Al pulsar el botón "M.Estudio", la tarjeta y la barra de navegación se estiran ocupando el 100% de la pantalla en dispositivos móviles.
  - Se ha actualizado la versión a V22 en portada y en el Service Worker (`sw.js`).

- **Versión V21 (18 de Julio)**:
  - **Actualización de Service Worker**: Se actualizó el `CACHE_NAME` en `sw.js` de `v4` a `v21` para forzar a los dispositivos Android/iOS a borrar la caché antigua y descargar los últimos cambios de la aplicación.
  - **Mejora en el Modo M.Estudio**: Al pulsar el botón "M.Estudio", la tarjeta y la barra de navegación se han rediseñado mediante flexbox para estirarse y ocupar todo el alto y ancho disponible de la pantalla, eliminando los espacios vacíos en la parte inferior. Ahora se adapta perfectamente a la pantalla de todos los móviles y se mantiene visible el botón "M.Estudio".

- **Versión V20 (12 de Julio)**:
  - **Ajustes Visuales Flashcards**: Se ha aumentado el margen superior en la cara frontal de las flashcards para evitar que la palabra principal se solape con los botones superiores ("Inicio", "Validado", "Voltear") cuando hay una imagen de gran tamaño.
  - **Posición de Estrella de Favoritos**: Se ha sacado la estrella de la caja inferior y se ha centrado verticalmente entre el botón de estado (ej. "Neutro") y el texto "Pulsa para girar", evitando que se superponga al texto.
  - **Copyright**: Se ha devuelto el botón de Copyright a la fila de botones de exportación/importación (en la pantalla de inicio). Ahora es un botón cuadrado pequeño, con estética similar a los botones grises (`.btn-sec`), que contiene únicamente el símbolo "©" sin ningún texto. Se ha eliminado de la esquina superior derecha del inicio.

- **Versión V19 (12 de Julio)**:
  - **Botones Conditionals y Verb Tenses**: Se ha corregido el problema que hacía que el inicio no desapareciera. Ahora, al pulsar cualquiera de estos botones, la pantalla de inicio se oculta correctamente, evitando tener que hacer scroll hacia abajo.
  - **Posición de Estrella de Favoritos**: Se ha corregido la duplicación de la estrella. Ahora solo aparece en un único lugar, justo encima de la frase "Pulsa para girar", perfectamente centrada.
  - **Copyright Discreto**: El botón de copyright se ha simplificado a un discreto icono "©" con una opacidad muy baja (casi invisible a simple vista) en la esquina superior derecha del inicio, para evitar pulsaciones accidentales, y se ha retirado de todas las demás pantallas.

- **Versión V18 (11 de Julio)**:
  - **Modal de Copyright y Licencia**: Se ha integrado en el inicio un enlace al pie de la página ("Copyright © Elisabeth Altarriba 2026") que abre un modal explicando que la app es exclusivamente para uso personal y sin fines de lucro.
  - **Mejora en Contador de Filtros**: La función de recuento de palabras en la pantalla de inicio ahora suma correctamente todas las tarjetas, incluyendo niveles B2.1, B2.2, C1 y la categoría "Sustantivos". 
  - **Corrección Visual de Botones en Flashcards**:
    - Se movió el botón de Favoritos (⭐) a la fila superior de la tarjeta frontal para evitar que se superponga con el texto inferior de "Pulsa para girar".
    - Se ha reubicado el botón de "Negrita" (B) en el modo edición para que se encuentre elegantemente en la cabecera de la sección de traducción, evitando solapamientos.
    - Se ha eliminado la estrella de favoritos que aparecía de manera residual en el modo de vista trasera/ejemplos.
  - **Gestión de Ejemplos Mejorada**: Se ha añadido un botón rojo de "Borrar" explícito dentro de la edición de ejemplos, permitiendo al usuario eliminar un bloque de ejemplo directamente de la tarjeta sin tener que borrar el texto a mano y de forma intuitiva.
  - **Arreglo del Mensaje Congratulations**: Se ha rediseñado la interfaz del mensaje final de felicitación. Se eliminó el reborde de las letras que causaba problemas de solapamiento y se ha implementado una caja blanca translúcida con sombras elegantes, adaptando el tamaño del texto para que no se salga de las pantallas de dispositivos móviles.
  - **Limpieza de Repositorio**: Se ha eliminado un archivo de configuración intruso (`Labores.code-workspace`) que se había colado por error en el entorno de English.
  - **Corrección de Zoom Indeseado**: Se ha bloqueado el zoom automático que hacían los dispositivos móviles al tocar rápidamente (doble toque) el botón de estado de aprendizaje ("Ya me la sé", "Repasar", etc.), permitiendo cambiar de estado rápidamente sin que la pantalla se desajuste.
- **Versión V17**:
  - **Corrección Crítica de Ejemplos Duplicados**: Se arregló un bug severo que causaba que la numeración (`1. `) y las etiquetas de resaltado (negritas `<em>`) se guardaran como parte del texto del usuario en el modo edición. Ahora, la UI de los números está completamente aislada del texto, y el resaltado dinámico de la palabra objetivo se deshabilita temporalmente mientras se edita la tarjeta.
  - **Limpieza Automática**: Se ha añadido lógica que limpiará de forma silenciosa el código residual y los duplicados en las tarjetas afectadas por este bug tan pronto como se vuelvan a abrir.

- **Versión V16**:
  - **Categoría Sustantivo**: Se añadió "Sustantivo" a las categorías de palabras.
  - **Layout de UI**: El botón "Validar" en el reverso de la flashcard ahora aparece a la izquierda del botón de Foto.
  - **Correcciones al guardar**: Los ejemplos ahora mantienen su formato (negritas, cursivas, etc.) al ser guardados, usando `innerHTML` en vez de texto plano.
  - **Solapamiento al guardar**: Se arregló un bug crítico de sobrescritura de datos (ej. entre "advice" y "advise") basado en posiciones; ahora el guardado utiliza las claves únicas de las tarjetas, haciendo la búsqueda, edición y borrado mucho más seguros y robustos.
  - **Nuevas Animaciones de UI**:
    - **Giro Orgánico**: Girar las flashcards ahora simula un efecto 3D físico, incluyendo sombras dinámicas y curvas de aceleración para sentirse menos robótico.
    - **Botón Favorito**: Al marcar una tarjeta como favorita se activa una animación de salto de estrellitas doradas (partículas) muy satisfactoria.
    - **Botón Validar**: Se ha implementado un elegante efecto de trazo tipo pluma para la animación de las tarjetas marcadas como aprendidas (efecto "Magia" / Tinta).

- **Versión V15 (5 de Julio)**:
  - **Corrección de "Ribetes Fantasma"**: Se blindó la lógica del botón `[ ]` (ribete) para que barra y limpie automáticamente recuadros vacíos que quedaban atascados al borrar texto.
  - **Mejora del Modo Zoom**: Se corrigió un error por el cual el botón "+ Añadir ejemplo" no refrescaba visualmente la caja al estar en la vista de lupa.
  - **Restauración de Logo**: Se recuperó la imagen `logo.jpg` del reverso de la tarjeta de inicio, que se había eliminado por error en limpiezas previas. Se actualizó el Service Worker (`sw.js` a v4) para cachear también este logo y asegurar que se vea en modo sin conexión.
  - **Mejora Visual del Ribete**: El estilo del ribete (`.border-highlight`) se ha actualizado a `display: inline-block` para que al seleccionar múltiples líneas de texto, se encapsulen perfectamente en una sola "caja/bloque" sólida en lugar de romperse el borde al final de cada línea.

- **Conversión a PWA (Opción Offline) (3 de Julio)**:
  - Se creó el archivo `manifest.json` y `sw.js` (Service Worker) para que la aplicación funcione de forma offline y pueda instalarse como una Progressive Web App (PWA) real en dispositivos móviles.
  - Se vinculó el manifiesto y el icono `Logo_angles.JPG` en el archivo `English.html`.
  - Se añadió una marca invisible "V1" al final de `English.html` para confirmar la versión.

- **Configuración y Limpieza (3 de Julio)**:
  - Se creó un archivo `.gitignore` para excluir archivos que no deben subirse a GitHub, como `.DS_Store`, copias de seguridad (`English_Backup_Datos.json`), scripts temporales y configuraciones locales.
  - Se eliminaron scripts temporales (`.js`) y el logo antiguo (`logo.jpg`) que ya no formaban parte del proyecto, para mantener la carpeta limpia.

- **Modificaciones de UI y Datos (3 de Julio)**:
  - Se eliminó la variante "EliBi" del selector de Variantes en el Modo Estudio. Las tarjetas existentes con esta opción volverán a mostrarse como "Sin especificar".

- **Mejoras en Flashcards (Modo Estudio), Filtros y Botones (3 de Julio)**:
  - Se agrupó el "Registro", el nuevo selector de "Curso (CEFR)" y "Variante de inglés (Banderas/EliBi)" en una sola fila en el reverso de las tarjetas.
  - Se añadieron nuevos campos a la estructura de datos para guardar el nivel CEFR (A1-C2) y la variante regional.
  - Se modificaron los filtros superiores del Modo Estudio: "Cualquier nivel" ahora es "Nivel", "Cualquier registro" es "Registro".
  - Se introdujo un nuevo filtro para "Curso (CEFR)".
  - Se actualizó el botón "Todas" con un ribete oscuro para destacarlo.
  - Los botones de niveles (B2.1, B2.2, C1) ahora tienen un diseño más cuadrado y de la misma longitud.
  - El botón "Ver normal" se renombró a "Editando" en el modo de edición de flashcards.

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
  - **Corrección Crítica (5 de Julio)**: Se arregló un fallo por el cual, al estar editando texto en una flashcard y tocar directamente un menú desplegable (Nivel, Variante, Curso, Tipo), el texto modificado se borraba. Además, se solucionó la pérdida de datos al usar los botones de navegación ("Siguiente", "Anterior", "Aleatoria", "Filtros" o "👁️ Editando") sin antes haber guardado los campos de texto. Todo esto se solucionó forzando un guardado automático del texto antes de que la tarjeta se vuelva a procesar.
- El botón superior "Guardar" del modo estudio ahora se llama "Exportar" y descarga un archivo JSON ligero con los datos en lugar de descargar todo el HTML (ya que el autoguardado funciona en tiempo real y no hace falta generar un nuevo HTML).

- **Mejoras en Flashcards (Ejemplos, Estructura y Búsqueda) (5 de Julio - V14)**:
  - **Refactorización de Ejemplos**: Se ha eliminado el antiguo sistema de "Significados" estáticos numerados. Ahora se pueden añadir ejemplos ilimitados uno tras otro mediante el botón "Añadir ejemplo". Los números (`1. `, `2. `) se añaden de forma automática solo si hay más de un ejemplo.
  - **Control de Flashcards Duplicadas**: Al crear una flashcard nueva, el sistema revisa todas las existentes. Si detecta la misma palabra con la misma categoría, no permite crearla. Si es la misma palabra con otra categoría (ej. un adjetivo y un adverbio), solicita confirmación antes de añadirla como una tarjeta separada.
  - **Búsqueda Invertida (Español -> Inglés)**: La barra de búsqueda ahora respeta el botón "Al Revés". Cuando está activo, la búsqueda sólo devuelve resultados buscando en las traducciones al español (y ejemplos en español), ignorando las palabras inglesas para resultados más precisos.
  - **Mejoras UI en Estructura**: El título superior ahora se llama "ESTRUCTURA - CÓMO SE USA". Se ha movido la barra de herramientas a una sola línea con scroll horizontal (para que quepa siempre en móviles pequeños).
  - **Nuevos Botones de Formato**: Añadidos botones `B` (Negrita), `S` (Tachar), `✅`, `❗️` y `[ ]` (Ribete del color del Tema) a la barra de Estructura. El botón del Ribete cuenta con una función inteligente para poner y quitar resaltados transparentes seleccionando una palabra.
  - **Sincronización Zoom-Modal**: Corregido un fallo por el que presionar "Añadir ejemplo" mientras se tenía la flashcard abierta en grande (Zoom) borraba los cambios recién escritos.
  - Se añadió la versión "V14" en la pantalla de inicio (junto al contador Total).
