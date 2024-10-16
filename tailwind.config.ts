import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    // NextUI Components
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@nextui-org/theme/dist/components/card.js",
    // "./node_modules/@nextui-org/theme/dist/components/tabs.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
} satisfies Config;
