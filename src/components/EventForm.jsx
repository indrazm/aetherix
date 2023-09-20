import React from "react";

export const EventForm = () => {
  return (
    <div className="bg-white/50 p-8 rounded-lg border-2 shadow text-slate-800 mt-8">
      <div className="text-2xl font-bold text-center mb-4">New Event</div>
      <div className="textEvent">
        <div>Event Title</div>
        <input />
      </div>
      <div className="textEvent">
        <div>Event Description</div>
        <input />
      </div>
      <div className="textEvent">
        <div> Event Date</div>
        <input type="date" />
      </div>
      <div className="text-center">
        <button className="">Create Event</button>
      </div>
    </div>
  );
};
