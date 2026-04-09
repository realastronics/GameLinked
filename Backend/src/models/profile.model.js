import prisma from "../lib/prisma.js";

export const getAllProfiles = async () => {
  return prisma.profiles.findMany({
    include: {
      player: true,
    },
    orderBy: { profile_id: "desc" },
  });
};

export const createProfile = async ({
  name,
  main_game,
  ranking,
  team_org,
  contact_no,
  linkedin_url,
  summary_bio,
  experience_years,
}) => {
  return prisma.$transaction(async (tx) => {
    const player = await tx.player.create({
      data: {
        name: name.trim(),
        main_game: main_game.trim(),
        ranking: typeof ranking === "string" ? ranking : null,
        team_org: typeof team_org === "string" ? team_org : null,
        contact_no: typeof contact_no === "string" ? contact_no : null,
      },
    });

    const profile = await tx.profiles.create({
      data: {
        player_id: player.player_id,
        linkedin_url: typeof linkedin_url === "string" ? linkedin_url : null,
        summary_bio: typeof summary_bio === "string" ? summary_bio : null,
        experience_years:
          Number.isInteger(experience_years) && experience_years >= 0
            ? experience_years
            : 0,
      },
      include: {
        player: true,
      },
    });

    return profile;
  });
};
