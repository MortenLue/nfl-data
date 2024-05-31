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
