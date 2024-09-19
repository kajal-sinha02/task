import React from 'react';
import './ContentCards.css';

const ContentCards = () => {
  return (
    <section className="content-section">
      <div className="card">
        <h2>Card Title 1</h2>
        <p>Some description for the first card.</p>
      </div>
      <div className="card">
        <h2>Card Title 2</h2>
        <p>Some description for the second card.</p>
      </div>
      <div className="card">
        <h2>Card Title 3</h2>
        <p>Some description for the third card.</p>
      </div>
    </section>
  );
};

export default ContentCards;
