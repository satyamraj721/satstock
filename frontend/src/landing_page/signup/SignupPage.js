import React, { useState } from "react";
import axios from "axios";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#eef4ff",
    padding: "48px 16px",
  },
  card: {
    width: "100%",
    maxWidth: "520px",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 24px 48px rgba(15, 23, 42, 0.12)",
  },
  heading: {
    margin: 0,
    fontSize: "28px",
    color: "#0f172a",
  },
  subText: {
    marginTop: "8px",
    marginBottom: "24px",
    color: "#64748b",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "16px",
    color: "#0f172a",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #cbd5f5",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    marginTop: "8px",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "none",
    background: "#3b82f6",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 12px 26px rgba(56, 126, 209, 0.35)",
    transition: "transform 150ms ease, box-shadow 150ms ease",
  },
  success: {
    marginTop: "16px",
    color: "#16a34a",
    fontWeight: 600,
  },
  error: {
    marginTop: "16px",
    color: "#dc2626",
    fontWeight: 600,
  },
};

function SignupPage() {
  const apiBaseUrl =
    process.env.REACT_APP_API_URL ||
    "https://satstock.onrender.com";
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
        `${apiBaseUrl}/signup`,
        formData
      );

      setMessage(response.data.message);
      setFormData({ email: "", username: "", password: "" });
    } catch (err) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("Signup failed");
      }
    }
  };

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
