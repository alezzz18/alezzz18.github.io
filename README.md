# Portafolio · Alejandro Gutiérrez

Portafolio personal de desarrollador Full Stack. Sitio estático (HTML, CSS y JavaScript sin dependencias), responsive y con modo claro/oscuro.

🔗 **https://alezzz18.github.io**

## Ver en local

Abre `index.html` en el navegador, o levanta un servidor sencillo:

```bash
python3 -m http.server 8080
# luego abre http://localhost:8080
```

## Publicar en GitHub Pages

1. Crea en GitHub un repositorio público llamado **`alezzz18.github.io`** (sin README).
2. Desde esta carpeta:
   ```bash
   git add .
   git commit -m "Primera versión del portafolio"
   git remote add origin https://github.com/alezzz18/alezzz18.github.io.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. En 1 o 2 minutos el sitio estará en `https://alezzz18.github.io`. Ese es el enlace para la bio de Instagram.

## Estructura

```
index.html            Contenido de todas las secciones
css/styles.css        Estilos, paleta (variables) y responsive
js/main.js            Tema claro/oscuro, menú móvil, animaciones
assets/icons/         Favicon
```

## Personalizar

- **Colores:** variables al inicio de `css/styles.css` (`:root` para el modo claro, `[data-theme="dark"]` para el oscuro).
- **Textos del efecto de escritura:** arreglo `roles` en `js/main.js`.
- **Contacto:** enlaces `wa.me`, Instagram y GitHub en la sección `#contacto` de `index.html`.
