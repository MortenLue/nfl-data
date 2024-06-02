export interface Team {
  id: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  logo: string;
  seasonSummary: string;
  recordSummary: string;
  standingSummary: string;
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

export interface Competitor {
  id: string;
  team: Team;
  score: string;
  winner: boolean;
}

export interface Competition {
  id: string;
  attendance: number;
  competitors: Competitor[];
}

export interface Season {
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
  status: string;
  events: Event[];
  team: Team;
  byeWeek: string;
  timestamp: string;
}
