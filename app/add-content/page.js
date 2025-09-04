"use client";
import { useState } from "react";

export default function AddContentPage() {
  const [form, setForm] = useState({
    title: "",
    type: "text",
    content: "",
    schedule: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      alert("Content added!");
      setForm({ title: "", type: "text", content: "", schedule: "" });
    });
  };

  return (
    <div>
      <h2 className="h4 mb-4">Add New Content</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
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
            required
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
            placeholder={
              form.type === "text" ? "Enter message text" : "Enter file URL"
            }
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Schedule Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={form.schedule}
            onChange={(e) => setForm({ ...form, schedule: e.target.value })}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit Content
          </button>
        </div>
      </form>
    </div>
  );
}
