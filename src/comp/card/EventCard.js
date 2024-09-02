// EventCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCard.css'; // Separate CSS file for styling

const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    axios.get('http://localhost/events.php')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    e.target.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const nextEvent = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + events.length) % events.length);
  };

  const handleCardClick = (event) => {
    // Implement action on card click (e.g., open modal, navigate to details)
    console.log('Clicked event:', event);
  };

  return (
    <div className="crucio-container">
      <div className="event-slider" onMouseDown={handleMouseDown}>
        <button className="slider-btn prev-btn" onClick={prevEvent}>
          &#10094;
        </button>
        {events.slice(currentIndex, currentIndex + 4).map((event, index) => (
          <div key={index} className="event-card" onClick={() => handleCardClick(event)}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="event-btn">Learn More</button>
            </div>
          </div>
        ))}
        <button className="slider-btn next-btn" onClick={nextEvent}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default EventCard;
