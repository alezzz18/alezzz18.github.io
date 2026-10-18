# Plan del Portafolio — Alejandro Gutiérrez

> Desarrollador Full Stack · 20 años
> Sitio estático publicado en **GitHub Pages**, enlazado desde la bio de Instagram.

---

## 1. Objetivo

Un portafolio de una sola página, rápido y pensado **primero para celular** (la mayoría de las visitas llegarán desde Instagram), que:

- Diga en 5 segundos **quién soy y qué hago**.
- Muestre **trabajos reales** (páginas web y aplicaciones web).
- Demuestre lo que ofrezco con el propio sitio: **responsive + modo claro/oscuro**.
- Tenga un **llamado a la acción claro**: escribirme (WhatsApp / Instagram / correo).

---

## 2. Stack técnico

| Decisión | Elección | Motivo |
|---|---|---|
| Base | **HTML + CSS + JavaScript puro** | GitHub Pages lo sirve tal cual, sin build ni dependencias. |
| Estilos | CSS propio con **variables (custom properties)** | Facilita el cambio de tema claro/oscuro. |
| Tipografía | Google Fonts (ej. *Inter* para texto + *JetBrains Mono* para detalles "de código") | Moderna y con guiño de programador. |
| Iconos | SVG en línea | Sin librerías externas, carga instantánea. |
| Hosting | **GitHub Pages** | Gratis, HTTPS incluido. |

> Más adelante se puede migrar a Astro/React si el portafolio crece, pero para empezar lo simple es lo mejor.

---

## 3. Estructura de archivos

```
portfolio/
├── index.html          # Página única con todas las secciones
├── css/
│   └── styles.css      # Estilos + variables de tema
├── js/
│   └── main.js         # Tema claro/oscuro, menú móvil, animaciones
├── assets/
│   ├── img/            # Foto/avatar, capturas de proyectos (.webp)
│   ├── icons/          # favicon, logo
│   └── cv.pdf          # (opcional) CV descargable
├── README.md
└── PLAN.md
```

---

## 4. Secciones de la página (de arriba hacia abajo)

### 4.1 Barra de navegación (fija)
- Logo / iniciales **"AG"** con estilo de código: `<AG />`
- Enlaces: Inicio · Sobre mí · Servicios · Proyectos · Contacto
- **Botón de tema** ☀️ / 🌙
- En celular: menú hamburguesa.

### 4.2 Hero (portada)
```
Hola, soy
Alejandro Gutiérrez
Desarrollador Full Stack

Creo páginas web y aplicaciones modernas,
rápidas y adaptadas a cualquier pantalla.

[ Ver proyectos ]   [ Contáctame ]
```
- Efecto de "escritura" (typewriter) alternando: *Full Stack · Frontend · Backend*.
- Foto o avatar a un lado (en celular, arriba).

### 4.3 Sobre mí
- Párrafo corto y personal: 20 años, apasionado por crear, cómo empecé, qué me motiva.
- 3 datos rápidos en tarjetas, por ejemplo:
  - 🎂 20 años
  - 💻 X proyectos realizados
  - 📍 Ciudad / país

### 4.4 Servicios (lo que ofrezco)
Tarjetas con icono:
1. **Páginas web / Landing pages** — sitios para negocios y emprendimientos.
2. **Diseño responsive** — se ve perfecto en celular, tablet y PC.
3. **Modo oscuro** — interfaces modernas con tema claro/oscuro.
4. **Aplicaciones web** — sistemas a medida con frontend + backend + base de datos.

### 4.5 Habilidades / Tecnologías
Grilla de "chips" agrupados:
- **Frontend:** HTML, CSS, JavaScript, (React, Tailwind…)
- **Backend:** (Node.js, PHP, Python…)
- **Bases de datos:** (MySQL, MongoDB…)
- **Herramientas:** Git, GitHub, VS Code, Figma…

> ✏️ Ajustar con las tecnologías que realmente uso.

### 4.6 Proyectos (la sección más importante)
Tarjetas con:
- Captura del proyecto
- Nombre + descripción de 1–2 líneas
- Tecnologías usadas (chips)
- Botones: **Ver demo** · **Código** (si es público)

Filtros opcionales: *Todos · Páginas web · Aplicaciones*.

> Recomendado empezar con **3 a 6 proyectos**, los mejores primero.

### 4.7 Contacto
- Frase de cierre: *"¿Tienes una idea? Hagámosla realidad."*
- Botones grandes (cómodos para el pulgar en celular):
  - 💬 WhatsApp
  - 📸 Instagram
  - ✉️ Correo
  - 🐙 GitHub

> Como el sitio es estático, se usarán enlaces directos (`wa.me`, `mailto:`). Si se quiere un formulario, se puede usar un servicio gratuito como Formspree.

### 4.8 Footer
`© 2026 Alejandro Gutiérrez · Hecho con 💻 y ☕`

---

## 5. Modo claro / oscuro

**Comportamiento:**
1. Al entrar por primera vez, respeta la preferencia del sistema (`prefers-color-scheme`).
2. El botón ☀️/🌙 permite cambiarlo manualmente.
3. La elección se guarda en `localStorage` para la próxima visita.
4. Transición suave entre temas.

**Paleta propuesta** (ajustable a tu gusto):

| Token | Claro | Oscuro |
|---|---|---|
| Fondo | `#F8FAFC` | `#0B1120` |
| Superficie (tarjetas) | `#FFFFFF` | `#131C2E` |
| Texto principal | `#0F172A` | `#E2E8F0` |
| Texto secundario | `#475569` | `#94A3B8` |
| Acento (color de marca) | `#6366F1` (índigo) | `#818CF8` |
| Acento 2 (detalles) | `#06B6D4` (cian) | `#22D3EE` |

Implementación con variables CSS:
```css
:root            { --bg: #F8FAFC; --text: #0F172A; --accent: #6366F1; }
[data-theme="dark"] { --bg: #0B1120; --text: #E2E8F0; --accent: #818CF8; }
```

---

## 6. Diseño responsive

- Enfoque **mobile-first**: se diseña para celular y se amplía a PC.
- Puntos de quiebre: `640px` (tablet) y `1024px` (escritorio).
- Grillas que pasan de **1 columna** (celular) → **2** (tablet) → **3** (PC).
- Botones y enlaces con área táctil mínima de 44px.

---

## 7. Detalles que te representan

- Estética **"de programador"**: detalles en fuente monoespaciada, `<etiquetas />`, cursor parpadeante en el hero.
- Animaciones sutiles al hacer scroll (aparecen las secciones).
- Tono cercano y joven, pero profesional.
- Rendimiento alto: imágenes en `.webp`, sin librerías pesadas → buena puntuación en Lighthouse.
- SEO básico y **vista previa al compartir** (meta tags Open Graph) para que el enlace se vea bien en Instagram/WhatsApp.

---

## 8. Publicación en GitHub Pages

1. Crear el repositorio **`<tu-usuario>.github.io`** en GitHub (así la URL queda limpia: `https://<tu-usuario>.github.io`).
2. Subir el código:
   ```bash
   git add .
   git commit -m "Primera versión del portafolio"
   git remote add origin https://github.com/<tu-usuario>/<tu-usuario>.github.io.git
   git push -u origin main
   ```
3. En GitHub → **Settings → Pages** → Source: rama `main`, carpeta `/ (root)`.
4. Esperar 1–2 minutos y abrir la URL.
5. Pegar el enlace en la **bio de Instagram** ✅

---

## 9. Fases de trabajo

| Fase | Tarea |
|---|---|
| 1 | Estructura HTML de todas las secciones |
| 2 | Estilos base, paleta y tipografía |
| 3 | Modo claro/oscuro |
| 4 | Responsive (celular → PC) |
| 5 | JavaScript: menú móvil, typewriter, animaciones |
| 6 | Contenido real: textos, proyectos, foto, enlaces |
| 7 | Optimización (imágenes, SEO, Open Graph, favicon) |
| 8 | Publicación en GitHub Pages + enlace en Instagram |

---

## 10. Datos confirmados

- [x] GitHub: **alezzz18** → URL final `https://alezzz18.github.io`
- [x] Instagram: **@ale_zzz18** · WhatsApp: **0412-135-0170** (`wa.me/584121350170`)
- [x] Sin foto: la portada usa una tarjeta de código (`alejandro.ts`) como elemento visual
- [x] Proyectos: este portafolio (página web), sistemas/paneles (aplicación web) y apps móviles, ilustrados con maquetas animadas hechas en CSS
- [x] Estudios: **TSU en Informática** (sin nombrar la institución)
- [x] Tecnologías: PHP + Laravel, Python + Django + Odoo, JavaScript + Node.js, Next.js + TypeScript, SvelteKit, PostgreSQL, MySQL, POO con Java (clases, herencia, polimorfismo)
- [x] Mensaje: enfoque profesional, adaptación a la identidad visual y paleta de colores del cliente (no se ofrece "modo claro/oscuro" como servicio)
- [x] Colores: **grises, negro y azules** (reemplaza la paleta índigo/cian de la sección 5). Estilo moderno, no futurista, con animaciones suaves

### Pendiente / opcional
- [ ] Correo de contacto (si quieres mostrarlo)
- [ ] Tecnología que usas para las apps móviles (para ajustar sus etiquetas)
- [ ] Capturas de proyectos reales cuando los tengas
- [ ] Imagen para la vista previa al compartir (`og:image`, 1200×630 px)
