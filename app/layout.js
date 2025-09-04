"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse min-vh-100 p-3">
              <div className="position-sticky">
                <h2 className="fs-4 text-white mb-4">Dashboard</h2>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      className={`nav-link text-white rounded px-2 py-1 ${
                        pathname === "/" ? "bg-secondary" : ""
                      }`}
                      href="/"
                    >
                      Content List
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      className={`nav-link text-white rounded px-2 py-1 ${
                        pathname === "/add-content" ? "bg-secondary" : ""
                      }`}
                      href="/add-content"
                    >Add content</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <header className="d-flex justify-content-between align-items-center py-3 border-bottom mb-4">
                <h1 className="h4 mb-0">Digital Signage Dashboard</h1>
              </header>

              <div className="pt-3 pb-5">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
