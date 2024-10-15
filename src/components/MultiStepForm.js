import React, { useState } from 'react';
import './MultiStepForm.css'; // CSS for styling
import { FaShippingFast } from 'react-icons/fa'; // Import the shipping icon

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    country: '',
    paymentMethod: '',
    treatmentPlan: '1-month', // Default selected treatment
    survey: false, // Survey option for free shipping
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Step 1: Personal Information
  const PersonalInfo = () => (
    <div>
      <h2>Enter Personal Information</h2>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 2: Shipping Address
  const ShippingAddress = () => (
    <div>
      <h2>Enter Shipping Address</h2>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Street Address"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 3: Treatment Plan & Survey
  const TreatmentPlan = () => (
    <div>
      <h2>Select Treatment Plan</h2>
      <div className="treatment-options">
        <div className={`treatment-card ${formData.treatmentPlan === '1-month' ? 'selected' : ''}`} onClick={() => setFormData({ ...formData, treatmentPlan: '1-month' })}>
          <h2>1 Month Treatment</h2>
          <p>Price: €29.99</p>
          <p>The 1-month treatment includes <span className="highlight">30 </span>pills and provides initial relief from urinary discomfort.</p>
        </div>
        <div className={`treatment-card ${formData.treatmentPlan === '2-month' ? 'selected' : ''}`} onClick={() => setFormData({ ...formData, treatmentPlan: '2-month' })}>
          <h2>2 Months Treatment</h2>
          <p>Price: €49.99</p>
          <p>This plan includes <span className="highlight">60 </span>pills, providing deeper healing and improved bladder control.</p>
        </div>
        <div className={`treatment-card best-value ${formData.treatmentPlan === '3-month' ? 'selected' : ''}`} onClick={() => setFormData({ ...formData, treatmentPlan: '3-month' })}>
          <h2>3 Months Treatment</h2>
          <p>Price: €59.99 <span className="sale">Special 1+1=3 Months !</span></p>
          <p>The best value for full recovery and long-term protection, including <span className="highlight">90 </span>pills</p>
        </div>
      </div>
  
      {/* Survey section with larger checkbox and shipping icon */}
      <div className="survey-section">
        <input
          type="checkbox"
          name="survey"
          checked={formData.survey}
          onChange={handleChange}
        />
        <label>Participate in our clinical study to get free shipping for the 3-month plan</label>
        <FaShippingFast className="shipping-icon" />
      </div>
  
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 4: Payment Method
  const PaymentMethod = () => (
    <div>
      <h2>Select Payment Method</h2>
      <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
        <option value="paypal">PayPal</option>
        <option value="stripe">Stripe</option>
        <option value="cash">Cash on Delivery</option>
      </select>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 5: Order Summary and Confirmation
  const OrderSummary = () => (
    <div>
      <h2>Confirm Your Order</h2>
      <p><strong>Name:</strong> {formData.fullName}</p>
      <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Shipping Address:</strong> {formData.address}, {formData.city}, {formData.country}</p>
      <p><strong>Selected Treatment Plan:</strong> 
        {formData.treatmentPlan === '3-month' ? (
          <span className="highlight">3 Months - €49.99 (Special: 2+1 Free!)</span>
        ) : formData.treatmentPlan === '2-month' ? '2 Months - €49.99' : '1 Month - €29.99'}
      </p>
      <p><strong>Survey for Free Shipping:</strong> {formData.survey ? 'Yes' : 'No'}</p>
      <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert('Order Confirmed')}>Confirm Order</button>
    </div>
  );
  const confirmOrder = () => {
    const orderData = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: `${formData.address}, ${formData.city}, ${formData.country}`,
      treatmentPlan: formData.treatmentPlan,
      survey: formData.survey ? 'Yes' : 'No',
      paymentMethod: formData.paymentMethod,
    };
  
    // Replace this with your Zapier Webhook URL
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/20418360/219a4p3/';
  
    fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Order Confirmed and sent to Google Sheets!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div className="multi-step-form">
      <div className="form-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}></div>
        <div className={`progress-step ${step >= 4 ? 'active' : ''}`}></div>
        <div className={`progress-step ${step >= 5 ? 'active' : ''}`}></div>
      </div>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <ShippingAddress />}
      {step === 3 && <TreatmentPlan />}
      {step === 4 && <PaymentMethod />}
      {step === 5 && <OrderSummary />}
    </div>
  );
};

export default MultiStepForm;
