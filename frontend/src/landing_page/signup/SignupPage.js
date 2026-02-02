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

  /* Button hover effect */
  const handleHover = (e, type) => {
    if (type === "enter") {
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow =
        "0 16px 32px rgba(56, 126, 209, 0.45)";
    } else {
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow =
        "0 12px 26px rgba(56, 126, 209, 0.35)";
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Create your account</h1>
        <p style={styles.subText}>
          Start learning, analyzing, and exploring markets
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

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => handleHover(e, "enter")}
            onMouseLeave={(e) => handleHover(e, "leave")}
          >
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
    background:
      "linear-gradient(135deg, #f0f7ff 0%, #eef2ff 50%, #f8fafc 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#ffffff",
    padding: "36px",
    borderRadius: "18px",
    boxShadow: "0 30px 60px rgba(56, 126, 209, 0.15)",
  },

  heading: {
    marginBottom: "6px",
    fontSize: "26px",
    fontWeight: "600",
    color: "#0f172a",
  },

  subText: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "26px",
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
    transition: "border-color 0.2s, box-shadow 0.2s",
  },

  button: {
    width: "100%",
    marginTop: "14px",
    padding: "12px",
    background:
      "linear-gradient(135deg, #387ed1 0%, #4f8ef7 100%)",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 12px 26px rgba(56, 126, 209, 0.35)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },

  success: {
    marginTop: "16px",
    fontSize: "14px",
    color: "#16a34a",
    textAlign: "center",
  },

  error: {
    marginTop: "16px",
    fontSize: "14px",
    color: "#dc2626",
    textAlign: "center",
  },
};
