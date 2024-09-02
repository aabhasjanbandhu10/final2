// AchievementCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css'; // Assuming you have common styles for cards

const AchievementCard = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/achievements.php')
      .then(response => {
        setAchievements(response.data);
      })
      .catch(error => {
        console.error('Error fetching achievements:', error);
      });
  }, []);

  return (
    <div className="card achievement">
      <h2>Achievements</h2>
      {achievements.map((achievement, index) => (
        <p key={index}>{achievement}</p>
      ))}
    </div>
  );
};

export default AchievementCard;
