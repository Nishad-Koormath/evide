import "./globals.css";

export const metadata = {
  title: "Digital Signage Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul>
            <li>Content</li>
            <li>Settings</li>
          </ul>
        </aside>

        <div className="flex-1">
          <header className="bg-gray-100 p-4 shadow">
            <h1 className="text-lg font-bold">Digital Signage Dashboard</h1>
          </header>

          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
