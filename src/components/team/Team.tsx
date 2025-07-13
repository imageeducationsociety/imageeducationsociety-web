import { sanityFetch } from "@/sanity/lib/client";

import { TEAM_QUERY } from "@/sanity/lib/queries";
import { TEAM_QUERYResult } from "@/sanity/types";
import "./style.scss";
import TeamCarousel from "./teamCarousel/TeamCarousel";

async function getTeamData() {
  try {
    const team = await sanityFetch({
      query: TEAM_QUERY,
      revalidate: 10,
    });
    return team;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return null;
  }
}

const Team = async () => {
  const team: TEAM_QUERYResult | null = await getTeamData();

  if (!team)
    return (
      <section id="Team">
        <div className="title_container"></div>
      </section>
    );

  return (
    <section id="Team">
      <div className="title_container">
        <h2>{team.title}</h2>
      </div>
      <TeamCarousel data={team} />
    </section>
  );
};

export default Team;
