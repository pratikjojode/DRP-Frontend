import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/InquiryForm.css"; // Import the CSS file

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    courseName: "",
    educationLevel: "",
    universityName: "",
    inquiryType: "",
    preferredContactMethod: "",
    preferredTime: "",
    city: "",
    country: "",
    referralSource: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/v1/inquiry/inquiry", formData);
      toast.success("Inquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        courseName: "",
        educationLevel: "",
        universityName: "",
        inquiryType: "",
        preferredContactMethod: "",
        preferredTime: "",
        city: "",
        country: "",
        referralSource: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inquiry-form-container">
      <h2>Inquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="educationLevel"
          placeholder="Education Level"
          value={formData.educationLevel}
          onChange={handleChange}
        />
        <input
          type="text"
          name="universityName"
          placeholder="University Name"
          value={formData.universityName}
          onChange={handleChange}
        />
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Inquiry Type</option>
          <option value="General">General</option>
          <option value="Admission">Admission</option>
          <option value="Course Details">Course Details</option>
        </select>
        <select
          name="preferredContactMethod"
          value={formData.preferredContactMethod}
          onChange={handleChange}
        >
          <option value="">Preferred Contact Method</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
        </select>
        <input
          type="text"
          name="preferredTime"
          placeholder="Preferred Time"
          value={formData.preferredTime}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="referralSource"
          placeholder="Referral Source"
          value={formData.referralSource}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
