import "./globals.css"
import { CONFIG } from "@/lib/config"
export const metadata = { title: CONFIG.APP_NAME, description: "SA social marketplace" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="bg-sand text-charcoal">{children}</body></html>
}
