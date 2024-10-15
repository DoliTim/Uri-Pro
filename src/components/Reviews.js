// src/components/Reviews.js
import React, { useEffect, useState } from 'react';
import './Reviews.css';

// Generate random dates within the last 4 weeks
const getRandomDate = () => {
  const today = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 28); // Up to 28 days ago
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() - randomDaysAgo);
  return randomDate.toDateString();
};

// List of 20 reviews
const reviewsList = [
  { name: "John D.", review: "I've been using this for three weeks and it's been fantastic. My urinary health has improved significantly.", date: getRandomDate() },
  { name: "Samantha P.", review: "Really glad I tried this supplement. It's gentle but effective.", date: getRandomDate() },
  { name: "Michael T.", review: "It’s helped me feel better overall. Great quality and fast results!", date: getRandomDate() },
  { name: "Emily R.", review: "Noticed an improvement within just a few days. The cranberry and probiotics really make a difference.", date: getRandomDate() },
  { name: "David L.", review: "This product works well. No side effects and noticeable results in my bladder health.", date: getRandomDate() },
  { name: "Jessica H.", review: "Affordable and effective! The ingredients are top-notch. Love the fact it’s natural.", date: getRandomDate() },
  { name: "James F.", review: "I’m amazed at how much this supplement helped me. Highly recommended.", date: getRandomDate() },
  { name: "Rachel B.", review: "It has definitely improved my overall well-being. I feel more energetic and healthier.", date: getRandomDate() },
  { name: "Chris S.", review: "It’s been great! I’ve struggled with urinary issues for a while, and this has been a game-changer.", date: getRandomDate() },
  { name: "Olivia G.", review: "Noticeably better in a few days. I’m happy with the results.", date: getRandomDate() },
  { name: "Mark K.", review: "I feel better than ever. Definitely helped with bladder health.", date: getRandomDate() },
  { name: "Laura M.", review: "Fantastic supplement. It's really helped me feel healthier and stronger.", date: getRandomDate() },
  { name: "Matt W.", review: "I'm very satisfied. My urinary health improved after two weeks.", date: getRandomDate() },
  { name: "Nina O.", review: "The cranberry extract in this is a lifesaver! Best decision I've made for my health.", date: getRandomDate() },
  { name: "Sarah P.", review: "This supplement is amazing. No more bladder discomfort.", date: getRandomDate() },
  { name: "Henry J.", review: "Great quality product. Affordable and it works.", date: getRandomDate() },
  { name: "Katie F.", review: "I’ve been using it for about a month, and my urinary issues have improved so much.", date: getRandomDate() },
  { name: "Ethan B.", review: "Highly recommended for anyone looking to improve their urinary health. Fast results.", date: getRandomDate() },
  { name: "Isabella V.", review: "I feel healthier, and it’s gentle on the stomach. Perfect!", date: getRandomDate() },
  { name: "Robert Q.", review: "Affordable and effective. It has really helped me.", date: getRandomDate() },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsList);

  useEffect(() => {
    // Automatically update reviews to mimic new ones every week (simulated)
    const interval = setInterval(() => {
      const updatedReviews = reviewsList.map((review) => ({
        ...review,
        date: getRandomDate(),
      }));
      setReviews(updatedReviews);
    }, 604800000); // Update every week (in ms)

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
            <span className="review-date">{review.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
