import React, { useState } from "react";
import "./BookingForm.css"; // Import the CSS file

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="checkIn">Check-In Date:</label>
        <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="checkOut">Check-Out Date:</label>
        <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
