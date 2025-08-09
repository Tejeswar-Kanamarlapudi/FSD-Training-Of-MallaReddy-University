import React, { useState } from 'react';

function RegisterPage({ onRegisterSuccess, onLoginClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    terms: false,
    bio: ''
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password || !validatePassword(formData.password)) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.gender) newErrors.gender = 'Select a gender';
    if (!formData.country) newErrors.country = 'Select a country';
    if (!formData.terms) newErrors.terms = 'You must accept terms';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const userExists = existingUsers.find((user) => user.email === formData.email);
      if (userExists) {
        alert('User with this email already exists.');
        return;
      }

      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      onRegisterSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        {errors.gender && <p>{errors.gender}</p>}
      </div>

      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p>{errors.country}</p>}
      </div>

      <div>
        <label>Accept Terms:</label>
        <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
        {errors.terms && <p>{errors.terms}</p>}
      </div>

      <div>
        <label>Bio:</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
      </div>

      <button type="submit">Register</button>

      <p>
        Already have an account?{' '}
        <button type="button" onClick={onLoginClick}>
          Login here
        </button>
      </p>
    </form>
  );
}

export default RegisterPage;
