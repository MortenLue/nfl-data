"use client";
import React, { useState, useEffect } from "react";
import fetchNflTeamSchedule from "@/util/schedule";
import { Event, Team } from "@/util/team-types";
import { useTeam } from "@/app/TeamContext";
import Image from "next/image";
import { formatGameDate } from "@/util/dateFormat";

const NflTeamScheduleComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [team, setTeam] = useState<Team>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedTeamId, selectTeam } = useTeam();

  useEffect(() => {
    if (selectedTeamId) {
      const fetchData = async () => {
        try {
          const schedule = await fetchNflTeamSchedule(selectedTeamId);
          setEvents(schedule.events);
          setTeam(schedule.team);
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
  if (team) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center">
            <Image
              alt="Logo of the NFL Team"
              src={team.logo}
              width={500}
              height={500}
              className="h-20 w-20 rounded-lg object-cover mr-2"
            />
            <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-gray-900">
              {team.displayName}
            </h1>
          </div>
          <div className="mx-auto max-w-md rounded-lg bg-white shadow">
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-900">
                {team.seasonSummary} ({team.recordSummary})
              </h3>
              <p className="mt-1 text-gray-500">{team.standingSummary}</p>
            </div>
          </div>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <ul className="divide-y divide-gray-100 py-2 px-4">
          {events.map((event) => (
            <li className="flex py-4 items-center" key={event.id}>
              <div className="flex flex-1 justify-center">
                <Image
                  alt="Logo of the NFL Team"
                  src={event.competitions[0].competitors[1].team.logos[0].href}
                  width={500}
                  height={500}
                  className="h-20 w-20 rounded-lg object-cover self-center"
                />
              </div>
              <div className="flex flex-col flex-3 justify-center items-center">
                <h4 className="text-lg font-medium text-gray-900">
                  {event.name}
                </h4>
                <p>{formatGameDate(event.date)}</p>
              </div>
              <div className="flex flex-1 justify-center">
                <Image
                  alt="Logo of the NFL Team"
                  src={event.competitions[0].competitors[0].team.logos[0].href}
                  width={500}
                  height={500}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <>
      <p>No Team found</p>
    </>
  );
};

export default NflTeamScheduleComponent;
