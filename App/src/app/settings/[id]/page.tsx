"use client";
import { useState, useEffect } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    username: "",
    displayName: "",
    bio: "",
    avatarUrl: "",
    website: "",
    dob: "",
  });
  const [message, setMessage] = useState("");

  // On mount, fetch current settings from our API
  useEffect(() => {
    fetch('/api/settings')
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error('Error loading settings:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    setMessage(result.message);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Account Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input name="phone" type="text" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Username:
          <input name="username" type="text" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Display Name:
          <input name="displayName" type="text" value={formData.displayName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </label>
        <br />
        <label>
          Avatar URL:
          <input name="avatarUrl" type="url" value={formData.avatarUrl} onChange={handleChange} />
        </label>
        <br />
        <label>
          Website:
          <input name="website" type="url" value={formData.website} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Settings</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SettingsPage;
