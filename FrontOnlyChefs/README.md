# Proyecto Astro

Este proyecto está construido con **Astro** y utiliza **Tailwind CSS** para los estilos. Aquí encontrarás una guía detallada sobre cómo contribuir, ejecutar el proyecto, y trabajar con ramas en Git.

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Agregar Bibliotecas Externas](#agregar-bibliotecas-externas)
- [Flujo de Trabajo con Git](#flujo-de-trabajo-con-git)
- [Contribuyendo al Proyecto](#contribuyendo-al-proyecto)

## Requisitos
- **Node.js** (versión 16 o superior)
- **NPM** (generalmente incluido con Node.js)

## Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone <https://github.com/bvazquezj/OnlyChefs-Front>
   cd <FrontOnlyChefs>
    ```bash
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia el proyecto:
    ```bash
    npm run dev
    ```
    Esto iniciará el servidor de desarrollo, generalmente en `http://localhost:3000`. Puedes acceder a la página web en tu navegador.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- `src/pages`: Contiene las páginas de la aplicación.
- `src/components`: Contiene los componentes de la aplicación.
- `src/layouts`: Contiene las plantillas de diseño de la aplicación.

## Agregar Bibliotecas Externas
Este proyecto ya incluye `Tailwind CSS` para el diseño. Si necesitas agregar alguna biblioteca adicional, sigue estos pasos.

Ejemplo: Agregar `React`

Instala `React` y `ReactDOM`:

```bash
npm install react react-dom
```

Crea un archivo `.jsx` o `.tsx` en la carpeta `components` (ej. `MiComponente.jsx`): 

```jsx
import React from 'react';
export default function MiComponente() {
    return <div>¡Hola desde React!</div>;
}
```

Importa el componente en tu archivo `.astro`:
 
```jsx
    ---
    import MiComponente from '../components/MiComponente.jsx';
    ---
    <MiComponente />
``` 
¡Y eso es todo! Puedes empezar a usar React en tu proyecto Astro. Asi mismo puedes agregar otras bibliotecas externas como `Angular` o `Vue` etc.

## Flujo de Trabajo con Git
Para mantener un flujo de trabajo limpio y colaborativo, usaremos ramas y Pull Requests (PR). Aquí te mostramos cómo hacerlo.
 
### Paso 1: Crear una Nueva Rama 
 
 Antes de comenzar a trabajar en una nueva funcionalidad o corrección, crea una nueva rama. Esto asegura que la rama main (o master) permanezca estable y funcional.
 
Cambia a la rama main y asegúrate de estar actualizado:
 
```bash 
    git checkout main
    git pull origin main
```  

Crea y cambia a una nueva rama con un nombre descriptivo:
 
```bash
    git checkout -b nombre-de-la-rama
```  
Ejemplos de nombres de ramas:   
 
```bash
    feature/agregar-formulario-de-contacto
    fix/corregir-error-de-navegacion
```  
### Paso 2: Realizar Cambios y Hacer Commits
 
Realiza los cambios necesarios en el código. Una vez que estés listo para guardar tus cambios, utiliza `git add` para añadir los archivos modificados:
 
```bash
    git add .
```  
Haz un commit con un mensaje descriptivo:
 
```bash
    git commit -m "Descripción breve de los cambios realizados"
```  
### Paso 3: Enviar Cambios a la Rama Remota
 
Envía tus cambios a la rama remota en GitHub/GitLab:
 
```bash
    git push origin nombre-de-la-rama
```  
### Paso 4: Crear una Pull Request (PR)
 
Dirígete a la página del repositorio en GitHub/GitLab. Verás una notificación para abrir una Pull Request para tu rama. Haz clic en "Compare & pull request". Añade una descripción detallada de los cambios y envía la PR.
 
### Paso 5: Revisión y Aprobación
 
Un miembro del equipo revisará tus cambios. Una vez aprobados, se podrá hacer el merge a la rama principal. 

## Contribuyendo al Proyecto
 
- Fork el repositorio si es tu primera colaboración.
- Clona tu fork y sigue el Flujo de Trabajo con Git.
- Abre una PR con tus cambios y asegúrate de que pase las pruebas.    
- Espera la aprobación de otro miembro del equipo antes de hacer el merge.

Eso es todo! ¡Gracias por tu contribución y ayuda!