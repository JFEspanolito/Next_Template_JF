# MyNextJFTemplate

Boilerplate minimal para **Next.js 16 (App Router)** con:

* TypeScript
* Tailwind CSS + DaisyUI
* Autenticación con NextAuth
* MongoDB/Mongoose
* Language toggle (i18n simple por contexto)
* Theme switch (modo claro/oscuro)
* Componentes reutilizables y estructura escalable

---

## ⚙️ Stack

* **Framework:** Next.js 16 (App Router + Turbopack)
* **Lenguaje:** TypeScript
* **UI:** Tailwind CSS + DaisyUI
* **Auth:** NextAuth.js
* **DB:** MongoDB + Mongoose
* **Email / Payments:** Resend, Stripe (opcional)

---

## 📁 Estructura básica

📁 **Estructura básica**

```txt
app/
 ├─ api/                  # Rutas API
 │   └─ ...
 ├─ error.tsx
 ├─ layout.tsx            # Layout global
 ├─ not-found.tsx         # 404
 └─ page.tsx              # Home

components/
 ├─ auth/
 ├─ buttons/
 ├─ icons/
 ├─ layout/               # Nav, Footer, Layouts
 ├─ pagination/
 ├─ sections/
 └─ ui/                   # Componentes adaptados de ScrollX UI

contexts/
 ├─ LanguageContext.tsx   # Toggle idioma
 └─ ThemeContext.tsx      # Toggle tema

data/
 └─ about.js              # Datos de perfil (ES/EN)

libs/
 ├─ api.ts
 ├─ gpt.ts                # Opcional
 ├─ mongo.ts
 ├─ mongoose.ts
 ├─ next-auth.ts
 ├─ resend.ts
 ├─ seo.tsx
 └─ stripe.ts

models/
 └─ User.ts

public/
 ├─ icons/
 └─ favicon.ico

scripts/
 ├─ convert_pdf_to_jpg.js
 ├─ convert-images-to-webp.js
 └─ normalize-names.js

styles/
 └─ globals.css

config.js                 # Configuración global del proyecto
```

Alias de rutas configurado con `@/`.

---

## Atribución de Componentes UI

Los componentes del directorio `components/ui` están inspirados y adaptados a partir de:

**ScrollX UI**
[https://www.scrollxui.dev/docs/components](https://www.scrollxui.dev/docs/components)

---

## ✅ Requisitos

* Node.js 18+
* pnpm (recomendado)
* MongoDB si usas auth/db

---

## 🚀 Uso rápido

Clonar e instalar:

```bash
git clone https://github.com/JFEspanolito/MyNextJFTemplate.git
cd MyNextJFTemplate
pnpm install
```

Variables de entorno:

```bash
cp .env.example .env.local
```

Editar `.env.local`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-secret
MONGODB_URI=uri

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
RESEND_API_KEY=...
```

Desarrollo:

```bash
pnpm dev
```

Producción:

```bash
pnpm build
pnpm start
```

Lint:

```bash
pnpm lint
```

---

## 🧩 Configuración del proyecto (`config.js` + `about.js`)

En esta plantilla manejo la configuración en **dos archivos principales**:

1. `config.js` – donde defino la configuración global del proyecto (branding, SEO, dominio, imágenes, contacto, marketing, redes del proyecto, etc.).
2. `about.js` – donde declaro los datos de perfil en ES/EN (texto de la sección About, enlaces de contacto, redes personales e imágenes asociadas).

Ambos archivos vienen con valores de ejemplo y placeholders para que puedas ver cómo está conectado todo. La idea es que tomes estos archivos como punto de partida y los adaptes a tu proyecto o a tu perfil.

---

### `config.js` — Cómo uso la configuración global

En `config.js` concentro todo lo que considero “config del proyecto”, no del usuario. Ahí defino:

* **Base del proyecto**

  ```js
  appName: "PLACEHOLDER_APP_NAME",
  appDescription: "PLACEHOLDER_APP_DESCRIPTION",
  domainName: "example.com",
  ```

  Aquí suelo poner el nombre comercial del proyecto, una descripción corta orientada a SEO y el dominio principal que voy a usar en producción.

* **Metadatos / SEO y aspecto general**

  ```js
  language: "en-US",
  themeColor: "#000000",
  colors: {
    main: "#111111",
    background: "#000000",
    foreground: "#ffffff",
  },
  keywords: ["placeholder", "example"],
  author: "PLACEHOLDER_AUTHOR",
  twitter: "@PLACEHOLDER",
  siteUrl: "https://example.com",
  ```

  Estos campos los utilizo para generar metadatos, JSON-LD y para unificar colores base en la app. `siteUrl` siempre lo dejo como una URL válida porque hay código que hace `new URL(config.siteUrl)`.

* **Imágenes globales**

  ```js
  images: {
    ogDefault: "/images/placeholder.webp",
    twitterCard: "/images/placeholder.webp",
    favicon: "/favicon.ico",
    icon16: "/favicon.ico",
    icon32: "/favicon.ico",
    icon192: "/images/placeholder-192.png",
    icon512: "/images/placeholder-512.png",
    appleTouch: "/images/placeholder-apple.png",
    safariMask: "/images/placeholder-mask.png",
  },
  ```

  Desde aquí obtengo las rutas para todas las imágenes que se usan en meta tags, manifest y PWA (favicons, iconos, OG, etc.). Cuando monto un proyecto real, normalmente solo cambio estas rutas una vez y listo.

* **Soporte, emails y chat**

  ```js
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },

  resend: {
    fromNoReply: "no-reply@example.com",
    fromAdmin: "Admin <no-reply@example.com>",
    supportEmail: "support@example.com",
  },
  ```

  Estos valores los uso para integrar chat (Crisp) y envío de correos con Resend. Si no necesitas alguna integración, puedes dejarlo vacío o adaptarlo a tu proveedor.

* **Marketing y textos de landing**

  ```js
  marketing: {
    tagline: "PLACEHOLDER_TAGLINE",
    testimonials: {
      headline: "PLACEHOLDER_TESTIMONIAL_HEADLINE",
      subhead: "PLACEHOLDER_TESTIMONIAL_SUBHEAD",
      items: [],
    },
  },
  ```

  Aquí centralizo textos que suelen terminar en el hero de la landing o en secciones de testimonios. Prefiero tenerlo en config para que no estén dispersos entre componentes.

* **Redes sociales del proyecto**

  ```js
  socials: {
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/placeholder",
    twitter: "https://twitter.com/placeholder",
    instagram: "https://instagram.com/placeholder",
  },
  ```

  Estas URLs las uso principalmente en JSON-LD y en secciones donde quiero enlazar las redes “oficiales” del proyecto, no necesariamente las personales.

En resumen: cuando quiero adaptar esta plantilla a un nuevo proyecto, empiezo por `config.js` y actualizo nombre, dominio, descripción, metadatos, imágenes, emails y redes. Con eso, gran parte del branding queda resuelto.

---

### `about.js` — Cómo gestiono el contenido del perfil (ES/EN)

En `data/about.js` dejo definido un objeto `aboutData` que uso para poblar la sección “About” en dos idiomas:

```js
export const aboutData = {
  ES: [ /* ... */ ],
  EN: [ /* ... */ ],
};
```

Cada entrada tiene esta estructura general:

* Datos básicos:

  ```js
  {
    name: "place holder text",
    nickname: "place holder text",
    role: "place holder text",
    callToAction: "place holder text",
    headline: "place holder text",
    location: "place holder text",
    // ...
  }
  ```

* Descripción en bloques (permite texto enriquecido: negritas, colores, etc.):

  ```js
  description: [
    [
      {
        text: "place holder text",
        bold: false,
        customColor: "",
      },
    ],
  ],
  ```

* Contacto:

  ```js
  contact: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jfespanolito",
      icon: "linkedin",
    },
    {
      name: "Telegram",
      url: "https://t.me/jfespanolito",
      icon: "telegram",
    },
    {
      name: "Email",
      url: "mailto:contact@jfespanolito.dev?subject=Contacto%20profesional&body=Hola%20Jorge,%0A%0AQuisiera%20hablar%20sobre%20...",
      icon: "mail",
    },
  ],
  ```

* Redes personales:

  ```js
  social: [
    {
      name: "GitHub",
      url: "https://github.com/JFEspanolito",
      icon: "github",
    },
    {
      name: "Wakatime",
      url: "https://wakatime.com/@JFEspanolito",
      icon: "wakaTime",
    },
  ],
  ```

* Imágenes específicas del perfil:

  ```js
  avatarUrl: "/images/JFSelfie.webp",
  logoUrl: "/images/JFLogo.webp",
  ```

En la versión de ejemplo he dejado algunos enlaces reales para que veas cómo se usa, pero la idea es que tú reemplaces:

* Todos los `"place holder text"`.
* Los URLs de contacto/social por tus propios enlaces.
* Las rutas de `avatarUrl` y `logoUrl` por imágenes tuyas.

A partir de ahí, los componentes consumen `aboutData.ES` o `aboutData.EN` según el idioma activo (apoyándose en el `LanguageContext`), así que no necesitas duplicar lógica en los componentes para cambiar de idioma o de contenido.

---

### Referencia rápida de campos que suelo modificar

| Archivo   | Clave / Placeholder          | Uso principal                               |
| --------- | ---------------------------- | ------------------------------------------- |
| config.js | `appName`                    | Nombre de la app para SEO y branding        |
| config.js | `appDescription`             | Descripción corta para `<meta description>` |
| config.js | `domainName` / `siteUrl`     | Dominio público y URL base del proyecto     |
| config.js | `author`                     | Autor en metadatos / JSON-LD                |
| config.js | `images.*`                   | Íconos, OG, Apple Touch, mask, etc.         |
| config.js | `resend.*`                   | Emails del sistema                          |
| config.js | `marketing.tagline`          | Tagline para hero / landing                 |
| config.js | `marketing.testimonials.*`   | Contenido de testimonios                    |
| config.js | `socials.*`                  | Redes “oficiales” del proyecto              |
| about.js  | `name` / `nickname` / `role` | Identidad visible en la sección About       |
| about.js  | `headline` / `description`   | Texto descriptivo del perfil                |
| about.js  | `contact[]`                  | Medios directos de contacto                 |
| about.js  | `social[]`                   | Redes personales/profesionales              |
| about.js  | `avatarUrl` / `logoUrl`      | Imágenes del autor                          |

Si quieres adaptar la plantilla a otro proyecto o a otra persona, basta con ajustar estos campos sin tocar los componentes.

---

## Alias `@/`

Ejemplo de configuración en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Ejemplos de uso:

```ts
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import "@/styles/globals.css";
```

---

## Scripts útiles

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

---

## VSCode recomendado

```json
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.patterns": {
  "package.json": "config.js,.eslintrc.json,next.config.js,package-lock.json,postcss.config.js,tailwind.config.ts,jsconfig.json,next-sitemap.config.js,tailwind.config.js,vercel.json,pnpm-lock.yaml,yarn.lock,tsconfig.json,postcss.config.mjs,next.config.ts,next-env.d.ts,eslint.config.mjs,.stylelintrc.json,config.ts",
  "README.md": ".gitignore,.env.example,.env.local"
}
```
