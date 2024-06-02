import { useState } from "react";

const useSelectedTeam = () => {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>("1");

  const selectTeam = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  return { selectedTeamId, selectTeam };
};

export default useSelectedTeam;
