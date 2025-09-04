import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Digital Signage Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse min-vh-100">
              <div className="position-sticky pt-3 text-white">
                <h2 className="fs-4 px-3">Dashboard</h2>
                <ul className="nav flex-column mt-4">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/">
                      Content List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/add-content">
                      Add Content
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <header className="d-flex justify-content-between align-items-center py-3 border-bottom">
                <h1 className="h4">Digital Signage Dashboard</h1>
              </header>

              <div className="pt-4">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
