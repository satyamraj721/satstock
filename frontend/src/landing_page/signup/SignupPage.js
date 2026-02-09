import React, { useState } from "react";
import axios from "axios";
import styles from "./SignupPage.module.css";

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
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Create your account</h1>
        <p className={styles.subText}>
          Start learning, analyzing, and exploring markets
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            onMouseEnter={(e) => handleHover(e, "enter")}
            onMouseLeave={(e) => handleHover(e, "leave")}
          >
            Create Account
          </button>
        </form>

        {message && <p className={styles.success}>{message}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
