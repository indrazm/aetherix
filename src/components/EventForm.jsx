import React from "react";

export const EventForm = () => {
  return (
    <div className="bg-slate-200/50 p-8 rounded-lg border-2 shadow text-slate-800 mt-8">
      <h1 className=" text-2xl font-bold text-center mb-4">New Event</h1>

      <div className="font-bold textEvent">
        Event Title
        <input />
      </div>

      <div className="textEvent">
        Event Description
        <input />
      </div>

      <div className="textEvent">
        Event Date
        <input type="date" />
      </div>

      <div className="text-center">
        <button>Create Event</button>
      </div>
    </div>
  );
};
