import React, { useState } from "react";

const AddActivity = ({ addActivity }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date){
    addActivity({ name, date });
    setName("");
    setDate("");
    }else{
      alert("please input an activity and date!")

    }
  };
  
  return (
    <div>
      <h3>add a new activity</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="activity name"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" class = "add-activity-btn">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivity;