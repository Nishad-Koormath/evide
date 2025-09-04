"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <h2 className="h4 mb-4">Content List</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Type</th>
              <th scope="col">Scheduled Time</th>
            </tr>
          </thead>
          <tbody>
            {content.length > 0 ? (
              content.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.title}</td>
                  <td className="text-capitalize">{item.type}</td>
                  <td>{new Date(item.schedule).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-muted py-4">
                  No content available. Add some content!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
