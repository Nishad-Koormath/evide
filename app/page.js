"use client";
import Link from "next/link";
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
    <div className="px-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 mb-0">Content List</h2>
        <Link href="/add-content" className="btn btn-success">
          Add Content
        </Link>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Type</th>
              <th scope="col">Scheduled Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.length > 0 ? (
              content.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td className="text-capitalize">{item.type}</td>
                  <td>{new Date(item.schedule).toLocaleString()}</td>
                  <td>
                    <Link
                      href={`edit/${item.id}`}
                      className="btn btn-sm btn-primary me-2"
                    >
                      Edit
                    </Link>
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
                <td colSpan="5" className="text-center text-muted py-4">
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
