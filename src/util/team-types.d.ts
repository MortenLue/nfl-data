export interface Team {
  id: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  logos: {
    href: string;
    alt: string;
  }[];
}
export interface ApiResponse {
  sports: {
    leagues: {
      teams: {
        team: Team;
      }[];
    }[];
  }[];
}

interface Team {
  id: string;
  location: string;
  name: string;
}

interface Competitor {
  id: string;
  team: Team;
  score: string;
  winner: boolean;
}

interface Competition {
  id: string;
  attendance: number;
  competitors: Competitor[];
}

interface Season {
  year: number;
  type: number;
}

export interface Event {
  id: string;
  date: string;
  name: string;
  shortName: string;
  season: Season;
  competitions: Competition[];
}

export interface ApiResponseSchedule {
  events: Event[];
}
