# Registro de Cambios - English.html

Este archivo servirá para registrar todos los cambios que vayamos realizando en el programa `English.html`.

## Historial de Cambios

- **Versión V2 (28 de Agosto)**:
  - Se corrigió la navegación de las frases inspiratorias: la flecha izquierda vuelve a la frase original cuando se está viendo su traducción y las flechas avanzan y retroceden correctamente entre frases.
  - Se actualizó la versión visible, la caché y los parámetros de carga a V2.

- **Versión V1 (28 de Agosto)**:
  - Se reinició la numeración visible de la aplicación en V1.
  - Cada descarga mediante **Download HTML with my changes** genera ahora la siguiente versión consecutiva (V2, V3, V4…).
  - Se mantuvieron incrustadas las 1578 tarjetas y el logo correcto de AnglèsPro.
  - Se reinició la caché del Service Worker a V1.
  - Se restauraron las funciones de guardado que utiliza la descarga para que el botón exporte sin errores.
  - Se separaron los datos y las fotos de las tarjetas en `english_data.js` para evitar que `English.html` siga creciendo; los logos e iconos continúan incrustados. La aplicación utiliza ambos archivos.
  - Se separaron los datos y las fotos de las tarjetas en `english_data.js` para evitar que `English.html` siga creciendo; los logos e iconos continúan incrustados.

- **Versión V54 (28 de Agosto)**:
  - Se incrustaron las 14 tarjetas personales de la copia del 27/08; el inventario queda en **1578 tarjetas**.
  - Se sustituyeron los iconos de la aplicación por el logo correcto **AnglèsPro** en `English.html` y `manifest.json`.
  - Se actualizó la caché del Service Worker a V54 para que GitHub Pages y las PWA descarguen esta versión.

- **Versión V52 (28 de Agosto)**:
  - Se restauró el modal **Cards by section** y el acceso desde sus filas al Modo Estudio.
  - Se unificó el recuento real de tarjetas para que Total, Study Mode, Quiz Mode y filtros muestren las 1578 flashcards.
  - Se restauró la contraseña de edición (`5eli5`) para que el botón **Edit** permita entrar correctamente.
  - Se añadieron botones anterior/siguiente junto a las frases motivadoras para repasar idiomas y frases sin perder la navegación.
  - Se actualizó la versión de la aplicación y la caché del Service Worker a V52.

- **Versión V50 (28 de Agosto)**:
  - Se actualizó la versión visible, el manifiesto y el registro del Service Worker a V50.
  - Se mantienen todas las correcciones de exportación, CSS incrustado, flashcards y actualización de caché de V49.
  - Se reparó el código incrustado que podía cortar los scripts al encontrar `</script>` dentro de los datos de una flashcard.
  - Cada descarga mediante **Download HTML with my changes** genera automáticamente una versión consecutiva (V51, V52, etc.).
  - Se restauraron las funciones de contraseña, recuento y navegación que faltaban en la exportación anterior.

- **Versión V49 (28 de Agosto)**:
  - La exportación añade una copia completa y explícita del CSS dentro del HTML descargado.
  - Se actualizó la caché y el registro del Service Worker a V49.
  - Se mantiene el nombre `English.html`, el manifiesto y todos los recursos incrustados.

- **Versión V48 (27 de Agosto)**:
  - La exportación incrusta explícitamente todo el CSS, además de los datos y las librerías, para que la app conserve su diseño al subir solo `English.html`.
  - El archivo exportado se guarda como `English.html`, coincidiendo con la ruta de inicio del manifiesto.
  - Se mantiene el manifiesto y se actualiza el Service Worker a V48 para refrescar correctamente la app instalada.

- **Versión V47 (27 de Agosto)**:
  - Se corrigió la exportación: el HTML descargado queda marcado como archivo independiente y no intenta depender del manifiesto ni del Service Worker.
  - Se corrigió la actualización de la PWA: el Service Worker comprueba primero el HTML nuevo y solo usa la caché cuando no hay conexión.
  - Se actualizó la versión visible, el manifiesto y el registro del Service Worker a V47.

- **Versión V46 (27 de Agosto)**:
  - `English.html` ahora incorpora también las flashcards originales de `english_data.js` y la librería `html2canvas`.
  - El HTML descargado desde **Download HTML with my changes** queda preparado para subirse solo, conservando las tarjetas existentes y permitiendo seguir creando y exportando nuevas flashcards.
  - Se actualizó el Service Worker a V46.

- **Versión V45 (23 de Julio)**:
  - Se añadió el logo **EliBi** encima del email en el reverso de la tarjeta giratoria del encabezado.
  - El logo EliBi quedó incrustado directamente en `English.html` y se amplió para ocupar buena parte del recuadro.
  - Se actualizó el Service Worker a V45 para refrescar el diseño en los dispositivos.

- **Versión V44 (23 de Julio)**:
  - El logo AnglèsPro y los iconos de instalación quedaron incrustados directamente en `English.html` y `manifest.json` como datos embebidos.
  - La aplicación ya no depende de subir archivos de imagen del logo a GitHub ni de descargarlos para funcionar.
  - Se actualizó el Service Worker a V44 y se eliminó la precarga de los archivos externos del logo.

- **Versión V43 (23 de Julio)**:
  - Se sustituyó el logo de la aplicación por el nuevo logo completo **AnglèsPro** en la portada y en el reverso de la tarjeta de título.
  - Se actualizaron el favicon, el icono de iPhone/iPad y los iconos de instalación de la PWA para usar el nuevo logo.
  - El nombre de la aplicación instalada ahora aparece como **AnglèsPro**.
  - Se actualizó la caché del Service Worker a V43 para que los dispositivos descarguen los nuevos iconos.

- **Versión V42 (23 de Julio)**:
  - Se unificó el inventario de tarjetas entre Home, Total, Cards by section y M.Estudio.
  - El total de `All` y las filas de estadísticas ya no heredan accidentalmente el filtro de Favoritos, estado, verificación, registro o búsqueda.
  - Al pulsar `All`, se limpian los filtros secundarios y se vuelve a mostrar la baraja completa; las 1564 tarjetas quedan verificables desde cualquier entrada.
  - Se actualizó la caché del Service Worker a V42 para que los móviles y nuevos dispositivos descarguen esta corrección.
  - En Quiz Mode, las categorías y niveles muestran una sola vez, entre paréntesis, el número real de tarjetas disponibles, sin cifras duplicadas ni ceros residuales.

- **Versión V41 (23 de Julio)**:
  - Se compactó la ventana **Cards by section** para que todas las líneas, los accesos rápidos y el botón Close quepan en la pantalla del móvil sin scroll.
  - Se rehízo el reparto de altura de **M.Estudio**: la foto aprovecha todo el espacio libre de la card y los botones de navegación quedan siempre visibles en la pantalla, sin scroll vertical para cambiar de tarjeta.
  - Se actualizó la caché y el registro del Service Worker a V41 para forzar la actualización en móviles.

- **Corrección de actualización móvil de V40 (22 de Julio)**:
  - Se corrigió la caché del Service Worker para que iPhone y Android descarguen el `English.html` actualizado cuando hay conexión.
  - Se añadió un identificador de actualización al registro del Service Worker para evitar que las PWA sigan mostrando una copia anterior de V40.
  - Se eliminó de la precarga un archivo de backup inexistente que podía impedir que el Service Worker se instalara.
  - La aplicación queda en modo offline-first: una vez cargada, abre la interfaz sin conexión sin esperar a la red.

- **Versión V40 (22 de Julio)**:
  - Se añadió en Settings una duración configurable para la bandera inicial, con 6,3 segundos por defecto y un rango de 0,5 a 600 segundos.
  - La duración elegida se guarda en el dispositivo y se aplica también al cambiar la bandera.

- **Versión V38 (22 de Julio)**:
  - Se mejoró la escucha del traductor con estado de preparación, escucha continua y hasta tres reintentos automáticos si el navegador la cierra inesperadamente.
  - Se añadieron mensajes más claros para permisos, conexión a internet y ausencia de voz.

- **Versión V39 (22 de Julio)**:
  - El aviso de internet del traductor ahora aparece dentro de su ventana, encima del título y del recuadro de entrada.

- **Versión V37 (22 de Julio)**:
  - Se corrigió la parada del micrófono del traductor para que no muestre un falso mensaje de error al pulsar el botón para detener la escucha.

- **Versión V36 (22 de Julio)**:
  - Se actualizó la versión visible de la aplicación y la caché del Service Worker a V36.
  - El traductor permite seleccionar el idioma de voz, iniciar/detener la escucha y añadir varios dictados sin borrar el texto anterior.
  - Se mejoró la adaptación responsive de M.Estudio para que la navegación sea visible en móviles y iPad.

- **Versión V35 (22 de Julio)**:
  - Se añadió el traductor online con entrada escrita, micrófono, detección de idioma y aviso discreto de que requiere internet.
  - Cuando el navegador no ofrece reconocimiento de voz propio, el botón del micrófono enfoca la caja para usar el dictado del teclado o del dispositivo, sin necesitar API.
  - Los botones de filtros de M.Estudio ahora muestran el número real de tarjetas disponibles en cada momento, respetando los filtros activos y actualizándose al cambiar la selección.
  - El modal que se abre desde “Total” utiliza ahora el mismo recuento real que M.Estudio, para que las cifras de sus filas coincidan con las tarjetas que se muestran al entrar.
  - En M.Estudio enfocado, la tarjeta y la navegación son ahora responsive según la altura disponible, manteniendo visibles los botones de avanzar y retroceder en móviles, iPhone, iPad y orientación horizontal.
  - El traductor permite elegir Català, Español o English para el reconocimiento de voz; el botón 🎙️ funciona como iniciar/detener y la caja se ilumina mientras escucha.
  - Los dictados nuevos se añaden al texto existente sin borrar lo anterior; solo “Clear” vacía la caja.

- **Versión V34 (22 de Julio)**:
  - Se hizo interactivo el modal **Cards by section**: cada fila se hunde al pulsarla y abre el Modo Estudio con el filtro de la categoría o nivel seleccionado.
  - Se añadieron botones rápidos para B2.1, B2.2 y C1 entre “Otros” y “Close”, enlazados a sus tarjetas filtradas en el Modo Estudio.
  - Los accesos desde este modal ahora entran directamente en **M.Estudio**, mostrando solo las tarjetas del filtro elegido.
  - Se añadió el botón ⚙️ de configuración junto a la descarga del HTML, con una opción verde/roja para activar o desactivar la animación inicial de las banderas.
  - Se actualizó la aplicación a **V34**, incluida la caché del Service Worker.
  - El control de sonido se trasladó desde la fila del total a la ventana de configuración.
  - Los controles de Export, Import, Download HTML, configuración y copyright se hicieron más transparentes y se reorganizaron en dos filas rectangulares simétricas: Export/Import arriba y ⚙️/Download HTML/© abajo.
  - Se añadió separación entre el badge “English” y la tarjeta giratoria del título, y se aumentó y centró el logo del reverso junto al email.
  - El modal de copyright ahora muestra únicamente la captura de la licencia y el email de contacto.
  - La captura del copyright quedó incrustada directamente en `English.html` como base64, sin depender de un archivo de imagen externo.
  - Se añadió un traductor online junto al contador Total: popup con escritura, micrófono, detección del idioma y traducción al inglés o, si el origen es inglés, al catalán y al castellano.
  - Se añadió una marquesina discreta en la parte superior indicando que se requiere internet para usar el traductor y el micrófono.
  - El traductor incorpora botones **Clear** y **Copy**.
  - Los idiomas de destino aparecen separados, en negrita y con el color oscuro del tema para distinguirlos del texto traducido.

- **Versión V33 (22 de Julio)**:
  - Se eliminó el recuadro visual de las fotografías de las flashcards en modo normal y M.Estudio: sin borde, esquinas redondeadas ni sombra, y con un tamaño responsive mayor aprovechando el espacio disponible sin salirse de la pantalla.
  - Se añadió un fallback incrustado para el logo de la portada, usando el icono JPEG embebido en el HTML cuando `Logo_angles.JPG` no se carga correctamente en Android u otros dispositivos.
  - Se añadió un botón simétrico de **App Theme / Colores de la app** debajo de “Pulsa aquí para inspirarte”. Incluye temas pastel rosa, morado, verde, azul, amarillo, naranja, lavanda, menta, marrón claro, blanco, negro, gris y dos combinaciones coordinadas.
  - La selección de tema se guarda por dispositivo y se aplica a toda la interfaz.
  - Se actualizó el Service Worker a V33 para forzar la actualización de caché en móviles, iPhone, iPad y Android.
  - En la cabecera de Inicio, el título “English” queda alineado a la derecha; al girarlo, la cara con el email y el logo queda alineada a la izquierda.
  - Se corrigió el tema **Mint** para que aplique diferentes tonalidades menta de forma consistente en todas las pantallas, tarjetas, formularios, modales y controles.
  - Se tradujo la interfaz visible al inglés; se conservan las traducciones españolas de las flashcards porque son contenido didáctico.
  - Se hizo el botón de temas más discreto y bajo, manteniendo la simetría con el resto de botones.
  - Se corrigió la aplicación de todos los temas, incluido Gris, sobre fondos, tarjetas, botones, formularios y pantallas secundarias.
  - Se ajustó el botón Theme a una altura compacta real y se corrigió el reverso de English para que el correo se adapte y no quede cortado.
  - Las frases inspiradoras vuelven a alternar español e inglés e incluyen “Every cloud has a silver lining.”
  - Se corrigió el desbordamiento visual del botón Theme: ahora usa una disposición horizontal compacta de 360×44 px y queda centrado sin invadir los botones de exportación.
  - Se igualaron los colores de los controles del modo Study y de los filtros de categorías con el tema activo.
  - El filtro All dejó de usar la sombra 3D marrón oscura y ahora utiliza una sombra suave del color seleccionado.
  - Se suavizó aún más el borde y la sombra del botón All para que destaque sin resultar demasiado intenso.
  - El botón de validación ahora muestra siempre `VALIDADO` en verde o `NO VALIDADO` en rojo, independientemente del tema elegido.
  - Se corrigió la prioridad CSS del botón de validación para que el estado rojo/verde se mantenga también al pasar el cursor por encima.
  - Se añadió una introducción visual de 7 segundos: la bandera 🇬🇧 ondea, se transforma en 🇺🇸 y desaparece con fade; al pulsar el logo de los tres globos se puede repetir.
  - Se mejoró la animación para que la bandera se mueva lateralmente con efecto de tela ondulando y el cambio entre 🇬🇧 y 🇺🇸 se haga mediante crossfade.
  - Se sustituyó el emoji por banderas SVG semitransparentes a pantalla completa, con desplazamiento animado mediante turbulencia para simular viento y tela real.
  - Se ralentizó la ondulación a 3,8 segundos y se redujo ligeramente la opacidad para que la app se vea un poco mejor debajo.
  - Se eliminó el efecto de pantalla blanca usando mezcla transparente en las zonas claras de las banderas y se ralentizó de nuevo la ondulación a 4,8 segundos.
  - Se ralentizó la ondulación a 6,5 segundos para lograr un movimiento más suave.
  - Se añadió la cita bilingüe “They did not know it was impossible, so they did it.” / “No sabían que era imposible, así que lo hicieron.”

- **Versión V32 (22 de Julio)**:
  - **Gran Fusión de Datos (201 Tarjetas Nuevas)**: Se ha extraído todo el diccionario antiguo de nivel C1 (YanAngles) con sus 161 palabras y sus 20 fotos incrustadas. También se han extraído las 40 tarjetas personalizadas creadas recientemente por el usuario junto con sus 69 fotos.
  - **Base de Datos Externa**: Todo este contenido masivo (tarjetas, fotos, ejemplos y colores) se ha inyectado de forma nativa en un nuevo archivo externo `english_data.js` para aligerar la página principal y limpiar la memoria local del navegador, permitiendo al usuario volver a tener el 100% del almacenamiento disponible para futuras cartas y fotos.
  - **Detección de Duplicados Inteligente**: Se ha mejorado la lógica de carga para que, si el usuario aún conservaba sus cartas personalizadas antiguas en su memoria local (`localStorage`), la app reconozca automáticamente que ya están integradas de forma nativa y no las duplique visualmente.
  - Se ha actualizado el Service Worker a V32.

- **Versión V24 (22 de Julio)**:
  - **Ajustes en Tarjetas y M.Estudio**: 
    - Se agruparon los botones de las banderas (UK, US) y el botón de favoritos (estrella) dándoles el mismo estilo circular pequeño.
    - Se eliminó el texto "Pulsa para girar" de la parte frontal de las tarjetas.
    - Se modificó la regla CSS del modo M.Estudio para que la barra inferior quede visible y no haga falta hacer scroll.
    - Se ha modificado el comportamiento al avanzar o retroceder tarjetas: ahora, si la tarjeta estaba girada (mostrando la parte de atrás), la siguiente tarjeta se mostrará también girada.
  - Se ha actualizado el Service Worker a V30 para forzar la actualización de estos cambios en los dispositivos.

- **Versión V28 (22 de Julio)**:
  - **Mejora del Modo M.Estudio**: Se ha hecho el diseño más adaptativo para pantallas de móvil e iPad. Ahora la foto se expande aprovechando el espacio, se ha eliminado el recuadro alrededor de la foto en este modo y el tamaño general de los textos y botones ha aumentado para un mejor uso.
  - Se ha actualizado el Service Worker a V28.

- **Versión V27 (19 de Julio)**:
  - **Ubicación de Frases Motivadoras**: Se ha cambiado la ubicación del botón de frases motivadoras. Ahora se encuentra en la pantalla de inicio, por encima de los botones de importar/exportar, pero debajo de los modos de juego ("Study Mode", "Quiz Mode", etc.).
  - Se ha actualizado la versión a V27 en la portada (`English.html`) y en el Service Worker (`sw.js`).

- **Versión V26 (19 de Julio)**:
  - **Frases Motivadoras Integradas**: Se ha introducido un nuevo sistema de frases motivadoras en la pantalla de inicio. Se trata de un botón estilizado (transparente, con bordes redondeados y sombra sutil) que permite leer frases que inspiran a seguir aprendiendo.
  - Al pulsar el botón, el idioma de la frase alterna entre Español e Inglés de forma dinámica y aleatoria (incluyendo banderas 🇪🇸/🇬🇧 correspondientes), con una agradable animación de desvanecimiento ("fade") al cambiar el texto.
  - Se corrigió un error por el cual el bloque de JavaScript que controla las frases había quedado atrapado erróneamente dentro de un "event listener", impidiendo que el botón respondiera a los toques.
  - Se ha actualizado la versión a V26 en la portada (`English.html`).

- **Versión V25 (19 de Julio)**:
  - **Reubicación y Ajuste de Botones de Pronunciación**: Se movieron los botones de pronunciación (🇬🇧 y 🇺🇸) de su posición original junto a la palabra hacia una nueva posición debajo de la imagen (entre la foto y el botón de estado) para mejorar el diseño visual. Se ha ajustado su tamaño a petición del usuario.
  - **Corrección de Solapamiento Visual**: Se ha incrementado el margen y el relleno superior de las flashcards en la cara principal. Esto soluciona un problema visual por el cual palabras muy largas o con letras muy grandes (como "disappointed") llegaban a chocar o superponerse con los botones superiores ("Inicio", "Validado", "Voltear") en dispositivos como Mac, iPad o Android.
  - Se ha actualizado la versión a V25 en la portada (`English.html`) y en el Service Worker (`sw.js`).

- **Versión V24 (19 de Julio)**:
  - **Pronunciación Nativa (TTS)**: Se ha integrado la Web Speech API nativa del navegador para reproducir las palabras y frases en inglés sin necesidad de conexión ni APIs de pago. Se han añadido dos botones (🇬🇧 y 🇺🇸) para poder escuchar tanto la pronunciación británica como la estadounidense. Estos botones han sido ubicados estratégicamente debajo de la imagen de la flashcard, entre la foto y el botón de estado ("Repasar", "Siempre me equivoco").
  - **Corrección en Modal "Tarjetas por secciones"**: Se ha corregido un error en el conteo donde los niveles (B2.1, B2.2) aparecían siempre a 0. Además, se han incluido todas las nuevas categorías (C1, Sustantivos, Idioms, Sust & Verb, Adj & Verb, Otros) para que el desglose sea 100% fiel al inventario real.
  - **Nuevos Filtros y Tipos de Palabras**: Se han añadido "Idioms", "Sust & Verb" (Sustantivo y verbo) y "Adj & Verb" (Adjetivo y verbo) a los tipos de flashcards que se pueden elegir, y se han incluido los correspondientes botones de filtro en el Modo Estudio.
  - **Reordenación de Filtros**: Se han ordenado los botones de la barra de filtros del Modo Estudio para que los niveles (B2.1, B2.2, C1) aparezcan antes que los tipos gramaticales.
  - **Mejora Visual Inicio**: Se ha añadido un pequeño margen para separar visualmente el número total de la palabra "flashcards", y se ha añadido un retraso de 150ms a los botones de navegación junto con soporte para iOS (`ontouchstart`) que permite apreciar la animación 3D de hundido (`:active`) en los dispositivos táctiles.
  - Se ha actualizado la versión a V24 en portada y en el Service Worker (`sw.js`).

- **Versión V23 (19 de Julio)**:
  - **Copia de Flashcard como Imagen**: El botón de copiar de la tarjeta ahora abre un menú desplegable. Permite copiar solo el texto (como antes) o generar una captura de pantalla perfecta de la tarjeta (con la cara frontal a la izquierda y la cruz a la derecha) en formato PNG y pegarla en el portapapeles. Se ha descargado e integrado `html2canvas.min.js` para que esto funcione totalmente sin conexión.
  - **Identificador visual en Ejemplos**: En el Modo Edición, ahora aparece la palabra o frase en inglés al lado del título "Ejemplos" (tanto en la tarjeta principal como en el modo lupa) para no olvidar qué palabra se está editando.
  - **Sellos rápidos de Llamitas**: En la sección de Traducción (modo edición), se han añadido dos pequeños botones ("🔥" y "🔥 B/N") que permiten insertar rápidamente una llamita a color o en blanco y negro (escala de grises) como si fueran sellos.
  - **Ajustes M.Estudio**: Al pulsar el botón "M.Estudio", la tarjeta y la barra de navegación se estiran ocupando el 100% de la pantalla en dispositivos móviles.
  - **Sonidos y Estética 3D**: Se han añadido sonidos suaves de pulsación a los botones del menú principal y un botón de Altavoz para silenciarlos. Además, se han modernizado los botones de los modos de juego y etiquetas totales dándoles un diseño en 3D.
  - Se ha actualizado la versión a V23 en portada y en el Service Worker (`sw.js`).

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

- **Mejora en Copia de Tarjetas como Imagen (19 de Julio)**:
  - Se modificó la captura de imagen de la flashcard (`html2canvas`) para que **no elimine** los corazones de favoritos, el estado de aprendizaje (Validado, Repasar, etc.) y los iconos de las llamas de dificultad. Ahora estos elementos sí aparecerán en las fotos copiadas al portapapeles.
