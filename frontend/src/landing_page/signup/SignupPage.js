import React, { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      setMessage(response.data.message);
      setFormData({ email: "", username: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Create your account</h1>
        <p style={styles.subText}>
          Start learning, analyzing and exploring markets
        </p>

        <form onSubmit={handleSubmit}>
          <div style={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="yourusername"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>
        </form>

        {message && <p style={styles.success}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

export default SignupPage;

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fafc, #eef2ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  heading: {
    marginBottom: "8px",
    fontSize: "26px",
    fontWeight: "600",
  },
  subText: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "24px",
  },
  field: {
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  input: {
    padding: "12px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    outline: "none",
  },
  button: {
    width: "100%",
    marginTop: "10px",
    padding: "12px",
    background: "#387ed1",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  success: {
    marginTop: "16px",
    fontSize: "14px",
    color: "#16a34a",
  },
  error: {
    marginTop: "16px",
    fontSize: "14px",
    color: "#dc2626",
  },
};
