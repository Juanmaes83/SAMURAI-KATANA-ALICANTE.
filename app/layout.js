import './globals.css'

export const metadata = {
  title: 'SAMURAI KATANA — Alicante Centro',
  description: 'Pescado fresco de lonja, forjado y cortado a katana por nuestro Maestro Samurai. Alicante centro ciudad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
