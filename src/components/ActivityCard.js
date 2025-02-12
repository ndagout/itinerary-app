import React from "react";

const ActivityCard = ({ activity }) => {
  return (
        <div className="activity-card">
        <img
            src={activity.image || ""}
            alt={activity.name}
            className="activity-image"
        />
        <div className="activity-details">
            <h3>{activity.name}</h3>
            <p>{activity.date}</p>
        </div>
        </div>

  );
};

export default ActivityCard;
