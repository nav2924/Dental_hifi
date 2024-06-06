import React from "react";
import "../../../style/HandsOnSession.css";


function HandsOnMumbaiEvent2() {
  const handsons = [
    {
      topic: "Dental Implants",
      date: "15 June 2024",
      timings: "11:00 AM - 2:00 PM",
      venue:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "Rs 1500",
      learn: [
        "Basics of dental implants",
        "Surgical procedures",
        "Post-operative care",
      ],
    },
  ];

  return (
    <div className="handson">
      {handsons.map((handson) => (
        <div className="topic" key={handson.topic}>
          <h1>{handson.topic}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="topic-details">
            <div className="details">
              <h4 className="inline">Venue: </h4>
              <p className="inline">{handson.venue}</p>
              <br />
              <h4 className="inline">Timings: </h4>
              <p className="inline">{handson.timings}</p>
              <div className="learn">
                <h4>What you'll learn</h4>
                <ul>
                  {handson.learn.map((learn, index) => (
                    <li key={index}>{learn}</li>
                  ))}
                </ul>
                <div className="benefits">
                  <h4>Course Includes:</h4>
                  <ul>
                    <li>Certification of course</li>
                    <li>Flexibility in languages</li>
                    <li>Doubt clearance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="details2">
              <div className="map-container">
                <img
                  src="./images/map.jpg"
                  alt="Clinic Images"
                  className="clinic-map"
                />
                <a href="https://maps.google.com" className="get-directions">
                  Get Directions
                </a>
                <div className="rating">
                  <span className="rating-value">4.9</span>
                  <span className="stars">★★★★★</span>
                </div>
                <span className="reviews">(22 reviews)</span>
              </div>
              <div className="date-selector">
                <label>Select Date for your HandsON</label>
                <div className="date-inputs">
                  <select name="day">
                    <option value="">DD</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select name="month">
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select name="year">
                    <option value="">YYYY</option>
                    {Array.from({ length: 3 }, (_, i) => (
                      <option key={i + 2024} value={i + 2024}>
                        {i + 2024}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="fee">
                <p>HandsON fee:</p>
                {handson.price}
              </div>
              <p></p>
              <button className="book">Book your slot</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HandsOnMumbaiEvent2;
