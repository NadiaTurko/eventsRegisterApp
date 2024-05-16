import React from "react";
import { Link } from "react-router-dom";
import "./event.css";

const Event = ({ event }) => {
  return (
    <div className="event__card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <div className="event__links">
        <Link to={`/register/${event.id}`}>Register</Link>
        <Link to={`/event/${event.id}/participants`}>View</Link>
      </div>
    </div>
  );
};

export default Event;
