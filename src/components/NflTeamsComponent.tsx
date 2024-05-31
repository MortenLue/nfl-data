import React, { useState, useEffect } from "react";
import fetchNflTeams from "@/util/teams";
import { Team } from "@/util/team-types";
import Image from "next/image";

const NflTeamsComponent: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teams = await fetchNflTeams();
        setTeams(teams);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">NFL Teams</h1>
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
        <ul className="divide-y divide-gray-100 py-2 px-4">
          {teams.map((team) => (
            <li className="flex py-4 items-center" key={team.id}>
              <div className="mr-4 flex-1">
                <h4 className="text-lg font-medium text-gray-900">
                  {team.displayName} ({team.abbreviation})
                </h4>
              </div>
              <div>
                <Image
                  alt="Logo of the NFL Team"
                  src={team.logos[0].href}
                  width={500}
                  height={500}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NflTeamsComponent;
