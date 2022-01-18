# Melody of ours

Este es un proyecto desarrollado para la asignatura de Informática Audiovisual de la Universidad de Oviedo, que
implementa una versión musical del [juego de la vida](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

El trabajo se realizó en conjunto con [Álvaro García Peña](https://github.com/AGPAllStar)


## Sobre el proyecto

Se ha realizado utilizando React y Redux, así como la librería Tone.js para los sonidos.

Se puede ver la versión publicada de éste en el siguiente enlace: [Web Desplegada](https://laughing-hawking-695a87.netlify.app/)
La versión publicada se actualiza automáticamente cuando se hace un commmit a la rama main de este repositorio.

## Guía para desarrollo

Se deberá tener instalado en el sistema tanto [npm](https://www.npmjs.com/) como [yarn](https://yarnpkg.com/)

A continuación para instalar las dependecias se ejecutará:

```
yarn 
```

### Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```
yarn start
```
En este modo la app se servirá en [http://localhost:3000](http://localhost:3000) y
se recargará automáticamente con cualquier cambio realizado en el proyecto.


### Producción

Para generar la versión optimizada de producción de la aplicación, se ejecutará:

```
yarn build
```

Los archivos compilados así como los assets necesarios estarán en la carpeta `build` del proyecto, listos para ser servidos.

