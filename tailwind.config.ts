import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { sand: "#F5EFE6", orange: "#FF6B35", ndebele: "#1E3A8A", charcoal: "#1F1F1F" } },
  plugins: [],
}
export default config
