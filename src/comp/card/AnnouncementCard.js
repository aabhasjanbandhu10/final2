// AnnouncementCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css'; // Assuming you have common styles for cards

const AnnouncementCard = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/announcements.php')
      .then(response => {
        setAnnouncements(response.data);
      })
      .catch(error => {
        console.error('Error fetching announcements:', error);
      });
  }, []);

  console.log(setAnnouncements)
  return (
    <div className="card announcement">
      <h2>Announcements</h2>
      {announcements.map((announcement, index) => (
        <p key={index}>{announcement}</p>
      ))}
    </div>
  );
};

export default AnnouncementCard;
