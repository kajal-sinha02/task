import React from "react";
import "./TravelPlanner.css";

function App() {
  return (
    <>
    
    <div className="travel-planner">
        
      <div className="overlay">
        <div className="content">
          <h1>Effortless Travel Planning! Let AI Be Your Expert Guide.</h1>
          <p>Bid farewell to generic holiday packages. Get Your AI-Personalised Itineraries</p>
          <button className="btn-plan">Plan Itinerary For Free!</button>
        </div>

        <div className="form-container">
          <h2>Get your free travel plan now</h2>

          <form className="travel-form">
            <label htmlFor="departure">What do you want to explore?</label>
            <input type="text" id="departure" placeholder="Departing from" value="Delhi, IN" readOnly />

            <input type="text" id="destination" placeholder="Search destination" />

            <label htmlFor="dates">When are you planning to travel?</label>
            <div className="date-inputs">
              <input type="text" placeholder="Start Date" />
              <input type="text" placeholder="End Date" />
            </div>

            

            <button type="submit" className="btn-continue">Continue</button>
          </form>
        </div>
      </div>

      <footer className="features">
        <div>
          <span role="img" aria-label="personalized">🗺️</span>
          Free Personalized Itineraries
        </div>
        <div>
          <span role="img" aria-label="affordable">💼</span>
          Affordable & Flexible Bookings
        </div>
        <div>
          <span role="img" aria-label="hidden charges">💵</span>
          Zero Hidden Charges
        </div>
      </footer>
    </div>
    <div style={{height : "100px"}}> </div>
    </>
  );
}

export default App;
