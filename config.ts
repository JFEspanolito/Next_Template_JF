// Actualizar los siguientes campos:
// <PROJECT_NAME>
// <PROJECT_DESCRIPTION>
// <PROJECT_DOMAIN>
// <PROJECT_SUPPORT_EMAIL>
// <PROJECT_TAGLINE>
// <STRIPE_TEST_PRICE_ID>
// <STRIPE_PROD_PRICE_ID>
// <STRIPE_TEST_PRICE_ID_2>
// <STRIPE_PROD_PRICE_ID_2>
// <AWS_BUCKET_NAME>
// <AWS_CDN_DOMAIN>

const config = {
  // ======================================================
  // Carga DaisyUI
  // ======================================================
  daisyui: {
    themes: [
      "light",
      "dark",
      // Si necesitas temas custom, defínelos aquí:
      {
        mytheme: {
          primary: "#570df8",
          "primary-focus": "#4408d6",
          "primary-content": "#ffffff",
          secondary: "#f286c4",
          "secondary-focus": "#f082ba",
          "secondary-content": "#000000",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#000000",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#eff1f5",
          "base-content": "#1f2937",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },

  // ======================================================
  // 🔧 PROYECTO BASE (reemplaza estos placeholders)
  // ======================================================
  appName: "<PROJECT_NAME>",
  appDescription: "<PROJECT_DESCRIPTION>",
  domainName: "<PROJECT_DOMAIN>", // sin https:// ni slash final

  // ======================================================
  // 💬 SOPORTE / CONTACTO
  // ======================================================
  crisp: {
    id: "", // ID de Crisp (opcional)
    onlyShowOnRoutes: ["/"], // o elimina esta línea para mostrar en todo el sitio
  },

  resend: {
    fromNoReply: `<PROJECT_NAME> <noreply@resend.<PROJECT_DOMAIN>>`,
    fromAdmin: `Admin at <PROJECT_NAME> <admin@resend.<PROJECT_DOMAIN>>`,
    supportEmail: "<PROJECT_SUPPORT_EMAIL>",
  },

  // ======================================================
  // 📣 MARKETING
  // ======================================================
  marketing: {
    tagline: "<PROJECT_TAGLINE>", // breve eslogan del proyecto
    testimonials: {
      headline: "X users are already building with <PROJECT_NAME>!",
      subhead: "Short supportive line about social proof.",
      items: [
        /* objetos como en defaultList */
      ],
    },
  },
  // ======================================================
  // 💰 PLANES / STRIPE
  // ======================================================
  stripe: {
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "<STRIPE_TEST_PRICE_ID>"
            : "<STRIPE_PROD_PRICE_ID>",
        name: "Starter",
        description: "Perfect for small projects",
        price: 79,
        priceAnchor: 99,
        features: [
          { name: "Feature 1" },
          { name: "Feature 2" },
          { name: "Feature 3" },
        ],
      },
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "<STRIPE_TEST_PRICE_ID_2>"
            : "<STRIPE_PROD_PRICE_ID_2>",
        name: "Advanced",
        description: "For growing projects",
        price: 99,
        priceAnchor: 149,
        features: [
          { name: "Feature 1" },
          { name: "Feature 2" },
          { name: "Feature 3" },
          { name: "Priority support" },
        ],
      },
    ],
  },

  // ======================================================
  // ☁️ AWS (opcional)
  // ======================================================
  aws: {
    bucket: "<AWS_BUCKET_NAME>",
    bucketUrl: `https://<AWS_BUCKET_NAME>.s3.amazonaws.com/`,
    cdn: "https://<AWS_CDN_DOMAIN>/",
  },

  // ======================================================
  // 🎨 COLORES / TEMA
  // ======================================================
  colors: {
    theme: "dark",
    main: "#00000",
  },

  // ======================================================
  // 🔐 AUTENTICACIÓN
  // ======================================================
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },

  // ======================================================
  // PATCH NOTES
  // ======================================================
  patchNotes: {
    privacyLastUpdate: "2023-10-01",
    tosLastUpdate: "2023-10-01",
    projectLastUpdate: "2023-10-01",
  },
};

export default config;
