export const metadata = {
  title: 'مُتقِن - منصة تحفيظ القرآن',
  description: 'منصة تحفيظ القرآن الكريم',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
    }
