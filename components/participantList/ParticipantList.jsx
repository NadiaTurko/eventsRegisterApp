import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllRegistrations } from "./../../server/server";

const ParticipantList = () => {
  const { eventId } = useParams();

  const [participants, setParticipants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const registrations = getAllRegistrations();
    const eventParticipants = registrations.filter(
      (registration) => registration.eventId === eventId
    );
    setParticipants(eventParticipants);
  }, [eventId]);

  const filteredParticipants = participants.filter(
    (participant) =>
      participant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by full name or email"
      />
      {filteredParticipants.length > 0 ? (
        <ul>
          {filteredParticipants.map((participant, index) => (
            <li key={index}>
              {participant.fullName} - {participant.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No participants yet</p>
      )}
    </div>
  );
};

export default ParticipantList;
