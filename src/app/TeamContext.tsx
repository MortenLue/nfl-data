"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TeamContextProps {
  selectedTeamId: string | null;
  selectTeam: (teamId: string) => void;
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

export const TeamProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  const selectTeam = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  return (
    <TeamContext.Provider value={{ selectedTeamId, selectTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = (): TeamContextProps => {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
