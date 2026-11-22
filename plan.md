# Talca 3D — Plan de implementación y diseño

## Enfoque

Talca 3D será una experiencia web estática, responsive y accesible para explorar una representación del centro urbano de Talca, Chile. Se reutilizarán `city.obj`, `city.json`, `city.js` y `buildings.csv` entregados por el usuario; `city.js` permite abrir la escena sin depender de una API. El navegador cargará Three.js desde CDN y un servidor Node mínimo servirá los archivos con fallback seguro y la ruta de manifiesto requerida.

La escena conserva navegación orbital con rotación, zoom y desplazamiento; cada edificio es seleccionable por clic/toque y muestra una ficha con sus datos; el panel resume edificios, niveles conocidos y vías; el control de estilo reconstruye la escena en modo Realista o Cartografía cálida. La interfaz se presenta en español y usa la paleta solicitada: `#3B141A` como fondo, `#522129` para tarjetas, `#E5A853` y `#C9863B` para acentos, y `#FDF3E7` / `rgba(253,243,231,0.78)` para textos.

## Estructura del proyecto

- `index.html`: shell visual, accesibilidad, estilos y lógica Three.js reutilizada/adaptada.
- `city.js` / `city.json`: datos serializados de la escena urbana.
- `city.obj`: modelo fuente entregado, conservado como asset de referencia.
- `buildings.csv`: tabla de edificios de origen, conservada para trazabilidad.
- `server.mjs`: servidor estático Node sin dependencias externas; añade tipos MIME y `manus-routes.json`.
- `public/manus-routes.json`: manifiesto de la ruta `/`.
- `app.config.ts`: metadato de logo del proyecto.

## Diseño

### Direcciones consideradas

- **Atlas de Hormigón** (0.08): interfaz editorial de cartografía urbana, terracota y tipografía condensada.
- **Neón Topográfico** (0.06): herramienta geoespacial nocturna, azul petróleo y líneas luminosas.
- **Cuaderno del Maule** (0.07): bitácora cálida de visita guiada, marfil, oliva y naranja.

### Dirección elegida: Cuaderno del Maule reinterpretado en clave nocturna

- **Movimiento:** cuaderno de campo patrimonial con una superficie nocturna granate, como una lámina de observación arquitectónica iluminada por oro.
- **Principios:** la escena es protagonista; la información se lee por capas; los acentos dorados marcan acciones; el lenguaje visual combina precisión cartográfica con calidez local.
- **Filosofía de color:** `#3B141A` crea profundidad y concentración; `#522129` separa los módulos informativos del fondo; `#E5A853` funciona como hilo de exploración; `#C9863B` aporta una segunda temperatura para estados y etiquetas; el marfil mantiene contraste sin enfriar la experiencia.
- **Paradigma de layout:** lienzo 3D a pantalla completa con panel flotante editorial a la izquierda, barra de identidad arriba y microleyenda independiente a la derecha; en móvil el panel se convierte en hoja inferior.
- **Elementos firma:** marca “T” dentro de un medallón geométrico; regla de coordenadas dorada en el encabezado; etiquetas de sección en mayúsculas pequeñas con separación amplia.
- **Interacción:** orbit controls suaves y directos; selección con realce dorado; botones segmentados con estados inequívocos y foco visible; la ficha contextual explica el edificio sin interrumpir la exploración.
- **Animación:** entrada del panel con desplazamiento corto y opacidad; controles sin rebotes excesivos; realce de selección con cambio de emisión y transición de color; no se anima la cámara automáticamente.
- **Tipografía:** `Barlow Condensed` para titulares y métricas, `DM Sans` para lectura, etiquetas y controles. Jerarquía marcada por peso, escala y mayúsculas, no por exceso de color.
- **Esencia de marca:** una lupa digital para entender el centro de Talca, dirigida a curiosos, estudiantes y visitantes, diferenciada por convertir datos urbanos abiertos en una experiencia táctil. Personalidad: cercana, precisa, contemplativa.
- **Voz:** titulares breves y observacionales; CTAs claros, sin tono publicitario. Ejemplos: “Explora la trama urbana” y “Selecciona un edificio para abrir su ficha”.
- **Logotipo:** monograma “T” recortado en un medallón con una línea horizontal que evoca una calle y un punto dorado que marca una coordenada.
- **Color propio:** dorado azafrán `#E5A853`, usado de forma consistente para selección, navegación y datos activos.

## Dependencias y serving

No se requiere base de datos, autenticación ni backend de negocio. `server.mjs` escucha en `PORT` o `3000`, sirve el proyecto desde la raíz y se declara mediante `runtime/dev-commands`. Three.js y OrbitControls se cargan desde CDN; los datos urbanos se sirven localmente para conservar la experiencia autónoma del paquete recibido.
