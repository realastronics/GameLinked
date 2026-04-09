import { createProfile, getAllProfiles } from "../models/profile.model.js";

export const listProfiles = async (_req, res) => {
  try {
    const profiles = await getAllProfiles();
    res.json(profiles);
  } catch {
    res.status(500).json({ message: "Failed to fetch profiles" });
  }
};

export const addProfile = async (req, res) => {
  const {
    name,
    main_game,
    ranking,
    team_org,
    contact_no,
    linkedin_url,
    summary_bio,
    experience_years,
    username,
    favoriteGame,
    bio,
  } = req.body;

  const resolvedName = typeof name === "string" ? name : username;
  const resolvedMainGame =
    typeof main_game === "string" ? main_game : favoriteGame;
  const resolvedSummaryBio =
    typeof summary_bio === "string" ? summary_bio : bio;

  if (!resolvedName || typeof resolvedName !== "string") {
    return res.status(400).json({ message: "name is required" });
  }

  if (!resolvedMainGame || typeof resolvedMainGame !== "string") {
    return res.status(400).json({ message: "main_game is required" });
  }

  try {
    const profile = await createProfile({
      name: resolvedName,
      main_game: resolvedMainGame,
      ranking,
      team_org,
      contact_no,
      linkedin_url,
      summary_bio: resolvedSummaryBio,
      experience_years,
    });

    return res.status(201).json(profile);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Unique field already exists" });
    }

    return res.status(500).json({ message: "Failed to create profile" });
  }
};
