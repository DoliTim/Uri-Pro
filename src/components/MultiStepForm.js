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
    paymentMethod: 'stripe', // Default to stripe
    treatmentPlan: '1-month', // Default selected treatment
    survey: false, // Survey option for free shipping
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Step 1: Personal Information
  const PersonalInfo = () => (
    <div>
      <h2>Enter Personal Information</h2>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 2: Shipping Address
  const ShippingAddress = () => (
    <div>
      <h2>Enter Shipping Address</h2>
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
      <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
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
          <p>The 1-month treatment includes <span className="highlight">30 pills</span> and provides initial relief from urinary discomfort.</p>
        </div>
        <div className={`treatment-card ${formData.treatmentPlan === '2-month' ? 'selected' : ''}`} onClick={() => setFormData({ ...formData, treatmentPlan: '2-month' })}>
          <h2>2 Months Treatment</h2>
          <p>Price: €49.99</p>
          <p>This plan includes <span className="highlight">60 pills</span>, providing deeper healing and improved bladder control.</p>
        </div>
        <div className={`treatment-card best-value ${formData.treatmentPlan === '3-month' ? 'selected' : ''}`} onClick={() => setFormData({ ...formData, treatmentPlan: '3-month' })}>
          <h2>3 Months Treatment</h2>
          <p>Price: €59.99 <span className="sale">Special 1+1=3 Months!</span></p>
          <p>The best value for full recovery and long-term protection, including <span className="highlight">90 pills</span>.</p>
        </div>
      </div>

      {/* Survey section with larger checkbox and shipping icon */}
      <div className="survey-section">
        <input type="checkbox" name="survey" checked={formData.survey} onChange={handleChange} />
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
        <option value="stripe">Stripe</option>
        <option value="paypal">PayPal</option>
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
          <span className="highlight">3 Months - €59.99 (Special 1+1=3 Months!)</span>
        ) : formData.treatmentPlan === '2-month' ? '2 Months - €49.99' : '1 Month - €29.99'}
      </p>
      <p><strong>Survey for Free Shipping:</strong> {formData.survey ? 'Yes' : 'No'}</p>
      <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      <button onClick={prevStep}>Back</button>
      
      {/* Confirm the Order and Process Payment */}
      <button onClick={confirmOrderAndPay}>Confirm & Pay</button>
    </div>
  );

  // Confirm the order and payment method
  const confirmOrderAndPay = () => {
    // Process payment via Stripe or PayPal based on formData.paymentMethod
    if (formData.paymentMethod === 'stripe') {
      processStripePayment(); // Implement this function
    } else if (formData.paymentMethod === 'paypal') {
      processPayPalPayment(); // Implement this function
    } else {
      alert('Payment on delivery selected.');
      confirmOrder(); // For cash on delivery
    }
  };

 // Placeholder for Stripe payment
const processStripePayment = () => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 5999 }), // Example amount for the 3-month treatment in cents
    })
    .then(response => response.json())
    .then(data => {
      // Use Stripe.js to handle the payment
      const stripe = window.Stripe('pk_test_51QAD1iDRjCouYa83orV2ZuHN9n9zcSbvlvHLBsODe39gyWSYvMOu8rLqVqCGrfeTeafPRNorVAwc6SVldzn3OvPY00vi0cNst3');
      stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: {
            // You'll need to collect card information from your form using Stripe Elements
          },
          billing_details: {
            name: formData.fullName,
            email: formData.email,
          },
        }
      }).then(result => {
        if (result.error) {
          console.error('Payment failed:', result.error.message);
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            confirmOrder(); // Proceed to confirm the order
          }
        }
      });
    })
    .catch(error => {
      console.error('Payment Error:', error);
    });
  };
  // Placeholder for PayPal payment
  const processPayPalPayment = () => {
    // Implement PayPal integration logic here
    confirmOrder(); // Call confirmOrder after successful payment
  };

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
  
    const makeWebhookUrl = 'https://hook.eu2.make.com/5wbvucwas9jjye7r8fqfqxn8c3x5quei'; // Replace with your Make.com webhook URL
  
    fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Order sent to Make.com:', data);
      alert('Order Confirmed and sent to Google Sheets!');
    })
    .catch(error => {
      console.error('Order Error:', error);
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
