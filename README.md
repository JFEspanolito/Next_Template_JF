# MyNextJFTemplate

Boilerplate minimal para **Next.js 16 (App Router)** con:

- TypeScript
- Tailwind CSS + DaisyUI
- Autenticación con NextAuth
- MongoDB/Mongoose
- Estructura básica de layout, páginas y API routes

Pensado para servir como plantilla base para nuevos proyectos.


## ⚙️ Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Lenguaje:** TypeScript (`.ts` / `.tsx`)
- **UI:** Tailwind CSS + DaisyUI
- **Auth:** NextAuth.js
- **DB:** MongoDB + Mongoose
- **Email / Payments (opcional):** Resend, Stripe

---

## 📁 Estructura básica

```
app/
  api/...           # Rutas API (route.ts)
  layout.tsx        # Layout global
  page.tsx          # Home
  error.tsx         # Error boundary
  not-found.tsx     # 404

components/
  buttons/
  layout/
  pagination/
  sections/
  ui/

libs/
  api.ts            # Helpers HTTP
  gpt.ts            # Utilidades IA (opcional)
  mongo.ts          # conexión MongoDB (driver)
  mongoose.ts       # conexión Mongoose
  next-auth.ts      # config NextAuth
  resend.ts         # emails
  seo.tsx           # SEO helpers
  stripe.ts         # Stripe helpers

models/
  Lead.ts
  User.ts
  plugins/toJSON.ts

config.ts           # Config del proyecto (nombre, dominio, stripe, etc.)
styles/globals.css  # Estilos globales
````

Alias de rutas configurado con `@/` (ver `tsconfig.json`).

---

## ✅ Requisitos

* Node.js **18+**
* Gestor de paquetes (recomendado: **pnpm**)
* Instancia de **MongoDB** si vas a usar auth/db

---

## 🚀 Uso rápido

Clonar e instalar:

```
git clone https://github.com/JFEspanolito/MyNextJFTemplate.git
cd MyNextJFTemplate
pnpm install
```

Variables de entorno:

```
cp .env.example .env.local
```

Edita `.env.local` con tus valores reales:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-secret
MONGODB_URI=tu-uri-mongodb

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
RESEND_API_KEY=...
```

Desarrollo:

```
pnpm dev
# http://localhost:3000
```

Build / producción:

```
pnpm build
pnpm start
```

Lint:

```
pnpm lint
```

---

## 🧩 Configuración del proyecto

### `config.ts`

Archivo central de configuración (nombre, dominio, marketing, Stripe, AWS, etc.).
Busca y reemplaza los placeholders:

* `<PROJECT_NAME>`
* `<PROJECT_DESCRIPTION>`
* `<PROJECT_DOMAIN>`
* `<PROJECT_SUPPORT_EMAIL>`
* `<PROJECT_TAGLINE>`
* `<STRIPE_TEST_PRICE_ID>` / `<STRIPE_PROD_PRICE_ID>` …
* `<AWS_BUCKET_NAME>` / `<AWS_CDN_DOMAIN>`

Puedes localizar pendientes con:

```
grep -R "<PROJECT_" . \
  --exclude-dir=node_modules \
  --exclude-dir=.next
```

---

## 🧷 Alias `@/`

Alias `@/` apuntando a la raíz del proyecto:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "moduleResolution": "bundler",
    "jsx": "preserve",
    ...
  }
}
```

Ejemplos:

```
import config from "@/config";
import ClientLayout from "@/components/layout/LayoutClient";
import { getSEOTags } from "@/libs/seo";
import "@/styles/globals.css";
```

---

## 🧱 Scripts útiles

```
pnpm dev      # Desarrollo
pnpm build    # Build producción
pnpm start    # Servir build
pnpm lint     # ESLint
```

---

## 📝 Tree opcional del proyecto

```
tree -I '.git|.next|node_modules|.env.local' > tree.txt
```