"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditContentPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const [form, setForm] = useState({
    id: "",
    title: "",
    type: "text",
    content: "",
    schedule: "",
  });

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((c) => c.id === parseInt(id));
        if (item) setForm(item);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => router.push("/"));
  };

  return (
    <div>
      <h2 className="h4 mb-4">Edit Content #{id}</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="col-12">
          <label className="form-label">
            {form.type === "text" ? "Text Content" : "File URL"}
          </label>
          <input
            type="text"
            className="form-control"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Schedule</label>
          <input
            type="datetime-local"
            className="form-control"
            value={form.schedule}
            onChange={(e) => setForm({ ...form, schedule: e.target.value })}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success me-2">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => router.push("/dashboard")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
