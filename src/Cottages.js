import React from "react";
import BookingForm from "./BookingForm";
import './Cottages.css';

const Cottages = () => {
  return (
    <div className="cottages-container">
      <h1>Book Your Stay</h1>
      <p>Fill out the form below to book a cozy cottage in nature.</p>

      {/* Price Section */}
      <div className="price">
        <h2>Price: €50 per night</h2>
      </div>

      {/* Cottage Description */}
      <div className="cottage-description">
        <h3>Included in Your Stay:</h3>
        <ul>
          <li>✅ Self Check-in</li>
          <li>✅ Free Wi-Fi</li>
          <li>✅ Cozy two-person bed</li>
          <li>✅ Small table with chairs</li>
          <li>✅ Mini kitchen area with utensils</li>
          <li>✅ Bed linens, covers, and pillows</li>
          <li>✅ Private shower & toilet</li>
          <li>✅ Comfortable sofa</li>
          <li>✅ Bookshelf with selected books</li>
          <li>✅ Fun board games</li>
        </ul>
      </div>

      {/* Booking Form */}
      <BookingForm />

      {/* Cottage Image (Ensure it ends the page) */}
      <img src="modernhouse.png" alt="Cottage view" className="cottage-image" />
    </div>
  );
};

export default Cottages;