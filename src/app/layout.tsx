import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" data-mode="dark">
      <body className="min-h-screen min-w-screen overflow-x-hidden">
        <main className="relative h-full w-full">{props.children}</main>
      </body>
    </html>
  )
}
