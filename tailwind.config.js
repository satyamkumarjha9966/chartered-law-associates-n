/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "var(--radius-large)",
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      colors: {
        // Base Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary Colors
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "primary-muted": "hsl(var(--primary-muted))",

        // Secondary Colors
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        // Accent Colors
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        "accent-muted": "hsl(var(--accent-muted))",

        // Muted
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        // Input / Border / Card
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        "card-hover": "hsl(var(--card-hover))",

        // Status
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        success: "hsl(var(--success))",
        "success-foreground": "hsl(var(--success-foreground))",

        // Sidebar
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
        accent: "var(--shadow-accent)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-accent": "var(--gradient-accent)",
      },
      transitionProperty: {
        smooth: "var(--transition-smooth)",
        spring: "var(--transition-spring)",
      },
    },
  },
  plugins: [],
};
