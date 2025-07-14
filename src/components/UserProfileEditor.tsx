// src/components/UserProfileEditor.tsx
import React, { useState } from "react";

// Define an interface for our UserProfile data for TypeScript type safety
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
}

function UserProfileEditor() {
  // Initial user data to simulate an existing profile
  const initialProfile: UserProfile = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    bio: "A passionate React learner who enjoys coding and building interactive web applications.",
  };

  // State to hold the current form data (controlled component)
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  // State to hold validation error messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // State to show a success message after submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generic change handler for all form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Destructure 'name' and 'value' from the event target
    const { name, value } = e.target;
    // Update the profile state immutably using computed property names
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
    // Clear the error for the changed field as user is correcting it
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for this field
    }));
    // If the success message was showing, hide it on change
    setIsSubmitted(false);
  };

  // Function to validate the form inputs
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // First Name Validation
    if (!profile.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    } else if (profile.firstName.trim().length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters.";
    }

    // Last Name Validation
    if (!profile.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    } else if (profile.lastName.trim().length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters.";
    }

    // Email Validation
    if (!profile.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      // Simple regex for email format
      newErrors.email = "Email is invalid.";
    }

    // Bio Validation
    if (profile.bio.length > 150) {
      newErrors.bio = "Bio cannot exceed 150 characters.";
    }

    setErrors(newErrors); // Update the errors state
    // Return true if no errors were found, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser form submission (page reload)

    const isValid = validateForm(); // Validate the form

    if (isValid) {
      // If validation passes, simulate API call
      console.log("Submitting profile:", profile);
      setIsSubmitted(true); // Show success message

      // Optional: Simulate API delay and then clear message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Hide success message after 3 seconds
    } else {
      console.log("Form has validation errors.");
      setIsSubmitted(false); // Ensure success message is hidden if there are errors
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>
        Edit User Profile
      </h2>
      <form onSubmit={handleSubmit}>
        {/* First Name Field */}
        <div style={formGroupStyle}>
          <label htmlFor="firstName" style={labelStyle}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName" // Important: 'name' matches key in 'profile' state
            value={profile.firstName} // Binds input value to state
            onChange={handleChange} // Updates state on change
            style={inputStyle}
          />
          {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
        </div>

        {/* Last Name Field */}
        <div style={formGroupStyle}>
          <label htmlFor="lastName" style={labelStyle}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
        </div>

        {/* Email Field */}
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email" // Use type="email" for better mobile keyboard and basic browser validation
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Bio Field */}
        <div style={formGroupStyle}>
          <label htmlFor="bio" style={labelStyle}>
            Bio:
          </label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows={4} // Number of visible text lines
            maxLength={150} // HTML5 max length attribute
            style={{ ...inputStyle, resize: "vertical" }} // Allow vertical resizing
          />
          <p style={{ fontSize: "0.85em", color: "#666", marginTop: "5px" }}>
            {profile.bio.length} / 150 characters
          </p>
          {errors.bio && <p style={errorStyle}>{errors.bio}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" style={buttonStyle}>
          Save Profile
        </button>

        {/* Success Message */}
        {isSubmitted && <p style={successStyle}>Profile saved successfully!</p>}
      </form>
    </div>
  );
}

export default UserProfileEditor;

// Basic inline styles for better presentation
const formGroupStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "bold",
  color: "#555",
};

const inputStyle: React.CSSProperties = {
  width: "calc(100% - 20px)", // Account for padding
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "1em",
};

const buttonStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "1.1em",
  cursor: "pointer",
  marginTop: "20px",
  transition: "background-color 0.3s ease",
};

// You might want to add a hover effect to the button:
// buttonStyle[':hover'] = { backgroundColor: '#0056b3' }; (This requires a CSS file or styled-components)

const errorStyle: React.CSSProperties = {
  color: "red",
  fontSize: "0.85em",
  marginTop: "5px",
};

const successStyle: React.CSSProperties = {
  color: "green",
  fontSize: "1em",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "20px",
  padding: "10px",
  backgroundColor: "#e6ffe6",
  border: "1px solid #a3e6a3",
  borderRadius: "5px",
};
