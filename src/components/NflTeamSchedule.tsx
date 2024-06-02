"use client";
import React, { useState, useEffect } from "react";
import fetchNflTeamSchedule from "@/util/schedule";
import { Event } from "@/util/team-types";
import { useTeam } from "@/app/TeamContext";

const NflTeamScheduleComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedTeamId, selectTeam } = useTeam();

  useEffect(() => {
    if (selectedTeamId) {
      const fetchData = async () => {
        try {
          const schedule = await fetchNflTeamSchedule(selectedTeamId);
          setEvents(schedule);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [selectedTeamId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Schedule for Team {selectedTeamId}</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.date}: {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NflTeamScheduleComponent;
