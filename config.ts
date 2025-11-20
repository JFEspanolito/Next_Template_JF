// Actualizar los siguientes campos:
// <PROJECT_NAME>
// <PROJECT_DESCRIPTION>
// <PROJECT_DOMAIN>
// <PROJECT_SUPPORT_EMAIL>
// <PROJECT_TAGLINE>

const config = {
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
};

export default config;
