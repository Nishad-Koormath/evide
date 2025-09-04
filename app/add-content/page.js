"use client";
import { useState } from "react";

export default function AddContentPage() {
  const [form, setForm] = useState({
    title: "",
    type: "text",
    content: "", // text or Base64 for file
    schedule: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, content: reader.result });
    };
    reader.readAsDataURL(file); // convert file to Base64
  };

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
    <div className="px-2">
      <h2 className="h4 mb-4">Add New Content</h2>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            {/* Title */}
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

            {/* Type */}
            <div className="col-md-6">
              <label className="form-label">Type</label>
              <select
                className="form-select"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value, content: "" })}
                required
              >
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>

            {/* Content / File Upload */}
            <div className="col-12">
              <label className="form-label">
                {form.type === "text" ? "Text Content" : "Upload File"}
              </label>
              {form.type === "text" ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter message text"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  required
                />
              ) : (
                <input
                  type="file"
                  className="form-control"
                  accept={form.type === "image" ? "image/*" : "video/*"}
                  onChange={handleFileChange}
                  required
                />
              )}
            </div>

            {/* Schedule */}
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

            {/* Buttons */}
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary me-2">
                Submit Content
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setForm({ title: "", type: "text", content: "", schedule: "" })}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
