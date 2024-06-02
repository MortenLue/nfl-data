import { ApiResponseSchedule, Event } from "./team-types";

const fetchNflTeamSchedule = async (
  team_id: string | null
): Promise<Event[]> => {
  const response = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${team_id}/schedule`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: ApiResponseSchedule = await response.json();
  console.log(data);
  return data.events;
};

export default fetchNflTeamSchedule;
