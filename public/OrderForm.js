import React, { useState } from 'react';
import './OrderForm.css'; // For styling the form

const OrderForm = ({ selectedTreatment }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    treatmentPlan: selectedTreatment || '1-month',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you could send formData to your backend or an email service to notify you of a new order
    console.log('Order details:', formData);

    // Redirect to the payment gateway
    if (formData.treatmentPlan === '1-month') {
      window.location.href = 'https://paypal.com/checkout?plan=1month';
    } else if (formData.treatmentPlan === '2-month') {
      window.location.href = 'https://paypal.com/checkout?plan=2month';
    } else {
      window.location.href = 'https://paypal.com/checkout?plan=3month';
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Order Your Treatment</h2>

      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Address
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        City
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Postal Code
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Country
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Treatment Plan
        <select
          name="treatmentPlan"
          value={formData.treatmentPlan}
          onChange={handleInputChange}
        >
          <option value="1-month">1 Month</option>
          <option value="2-month">2 Months</option>
          <option value="3-month">3 Months</option>
        </select>
      </label>

      <button type="submit">Proceed to Payment</button>
    </form>
  );
};

export default OrderForm;
