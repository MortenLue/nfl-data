"use client";
import NflTeamsComponent from "@/components/NflTeamsComponent";
import NflTeamScheduleComponent from "@/components/NflTeamSchedule";

export default function Home() {
  return (
    <div className="flex h-60">
      <aside className="flex-none p-4 overflow-x-auto h-screen bg-gray-200">
        <NflTeamsComponent />
      </aside>
      <main className="min-w-0 flex-1 p-4 overflow-x-auto h-screen">
        <NflTeamScheduleComponent />
      </main>
    </div>
  );
}
