import React, { useState } from "react";
import AddActivity from "./AddActivity"; 
import ActivityCard from "./ActivityCard"; 

const Itinerary = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Visit Museum", date: "2025-02-10", image: `https://picsum.photos/200?random=${Math.random()}`
},
    { id: 2, name: "Dinner at Local Restaurant", date: "2025-02-11", image: `https://picsum.photos/200?random=${Math.random()}`
},
  ]);

  const addActivity = (activity) => {
    const newActivity = { ...activity, id: activities.length + 1, image: `https://picsum.photos/200?random=${Math.random()}` };
    setActivities([...activities, newActivity]);
  };

  return (
    <div className ="activity-container">
      <AddActivity addActivity={addActivity} />
      <h2>your itinerary</h2>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity}/>
        ))}
    </div>
  );
};

export default Itinerary;
