import React, { useState } from "react";
import axios from "axios";
import styles from "./SignupPage.module.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      setMessage(response.data.message);
      // Clear form on success
      setFormData({ email: "", username: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Email:</label>
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
          <label className={styles.label}>Username:</label>
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
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Signup
        </button>
      </form>
      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default SignupPage;
