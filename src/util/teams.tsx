import { Team, ApiResponse } from "./team-types";

const fetchNflTeams = async (): Promise<Team[]> => {
  const response = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: ApiResponse = await response.json();
  return data.sports[0].leagues[0].teams.map((teamWrapper) => teamWrapper.team);
};

export default fetchNflTeams;
