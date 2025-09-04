"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [content, setContent] = useState([]);

  const fetchContent = () => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => setContent(data));
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this content?")) return;

    fetch("/api/content", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then(() => fetchContent());
  };

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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.length > 0 ? (
              content.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.title}</td>
                  <td className="text-capitalize">{item.type}</td>
                  <td>{new Date(item.schedule).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
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
