# TODO — Talca 3D

## Escena urbana 3D funcional

- [x] Renderizar una escena urbana 3D de Talca a partir del modelo `city.obj` y los datos de edificios suministrados.
- [x] Conservar y servir `city.js`, `city.json`, `city.obj` y `buildings.csv` como assets del proyecto.

## Exploración e interacción

- [x] Permitir navegación orbital interactiva con controles de rotación, zoom y desplazamiento por la escena.
- [x] Permitir selección de edificios mediante clic o toque para mostrar una ficha con nombre, dirección, tipo, niveles, altura, superficie y enlace a OpenStreetMap cuando exista.
- [x] Resaltar visualmente el edificio seleccionado sin bloquear la navegación.

## Información contextual

- [x] Mostrar estadísticas del distrito con cantidad de edificios, edificios con niveles conocidos y elementos viales.
- [x] Mostrar el radio y las coordenadas del centro de la escena en el panel contextual.
- [x] Mostrar estados de carga y error si los datos de la ciudad no se pueden cargar.

## Estilos y accesibilidad

- [x] Permitir alternancia entre estilos de visualización realista y cartoon/cartográfico, actualizando materiales, entorno y apariencia de la escena.
- [x] Presentar toda la interfaz en español, con panel adaptable a escritorio y móvil.
- [x] Mantener etiquetas ARIA, foco visible, contraste suficiente y controles táctiles claros.
- [x] Aplicar la paleta `#3B141A`, `#522129`, `#E5A853`, `#C9863B`, `#FDF3E7` y `rgba(253, 243, 231, 0.78)`.

## Entrega técnica

- [x] Servir la aplicación en el puerto configurado mediante un comando de desarrollo administrado.
- [x] Publicar `GET /manus-routes.json` con la ruta de inicio declarada.
- [x] Resolver los diagnósticos y guardar el cambio como checkpoint en `origin/main`.
