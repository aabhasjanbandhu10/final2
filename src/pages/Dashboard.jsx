// Dashboard.js
import React from 'react';
import AchievementCard from '../comp/card/AchievementCard';
import AnnouncementCard from '../comp/card/AnnouncementCard';
import EventCard from '../comp/card/EventCard';
import Cur from '../comp/cru/cur';
import './dash.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
     <Cur />
      <div className="card-container">
        <AchievementCard />
        <AnnouncementCard />
      </div>
      <EventCard />
    </div>
  );
};

export default Dashboard;
