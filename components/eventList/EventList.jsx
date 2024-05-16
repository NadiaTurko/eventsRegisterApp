import React, { useState } from "react";

import Event from "../event/Event";
import "./eventList.css";

const EventList = ({ events }) => {
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (criteria) => {
    if (criteria === sortCriteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedEvents = [...events].sort((a, b) => {
    let comparison = 0;
    if (sortCriteria === "date") {
      if (a.date && b.date) {
        comparison = new Date(a.date) - new Date(b.date);
      }
    } else {
      if (a[sortCriteria] && b[sortCriteria]) {
        comparison = a[sortCriteria].localeCompare(b[sortCriteria]);
      }
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div className="events__list">
      <h1>Event</h1>
      <div className="sort__controls">
        <button onClick={() => handleSortChange("title")}>Sort by Title</button>
        <button onClick={() => handleSortChange("date")}>Sort by Date</button>
        <button onClick={() => handleSortChange("organizer")}>
          Sort by Organizer
        </button>
      </div>
      <div className="events__grid">
        {sortedEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
