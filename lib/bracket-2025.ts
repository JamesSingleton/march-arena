/**
 * 2025 NCAA Tournament bracket (completed) — for ESPN-style compressed bracket demo.
 * First round from official pairings; later rounds filled with actual results.
 */
import type { Game, RegionName } from "./bracket-data";
import { makeBracketTeam } from "./bracket-data";

const t = makeBracketTeam;

function finalG(
  id: string,
  team1: ReturnType<typeof makeBracketTeam>,
  s1: number,
  team2: ReturnType<typeof makeBracketTeam>,
  s2: number,
  winner: 1 | 2
): Game {
  return {
    id,
    status: "final",
    team1,
    team2,
    score1: s1,
    score2: s2,
    winner,
  };
}

export interface CompressedRegionData {
  name: RegionName;
  label: string;
  /** First round (Round of 64), 8 games */
  r64: Game[];
  /** Round of 32, 4 games */
  r32: Game[];
  /** Sweet 16, 2 games */
  s16: Game[];
  /** Elite 8 */
  e8: Game;
}

function region(
  name: RegionName,
  label: string,
  r64: Game[],
  r32: Game[],
  s16: Game[],
  e8: Game
): CompressedRegionData {
  return { name, label, r64, r32, s16, e8 };
}

/** South — Auburn (1) to FF */
export const REGION_2025_SOUTH = region(
  "SOUTH",
  "South",
  [
    finalG("s-r64-1", t("Auburn", 1), 83, t("Alabama St", 16), 59, 1),
    finalG("s-r64-2", t("Louisville", 8), 86, t("Creighton", 9), 89, 2),
    finalG("s-r64-3", t("Michigan", 5), 81, t("UC San Diego", 12), 65, 1),
    finalG("s-r64-4", t("Texas A&M", 4), 80, t("Yale", 13), 69, 1),
    finalG("s-r64-5", t("Ole Miss", 6), 91, t("North Carolina", 11), 74, 1),
    finalG("s-r64-6", t("Iowa State", 3), 82, t("Lipscomb", 14), 55, 1),
    finalG("s-r64-7", t("Marquette", 7), 85, t("New Mexico", 10), 69, 1),
    finalG("s-r64-8", t("Michigan St", 2), 69, t("Bryant", 15), 65, 1),
  ],
  [
    finalG("s-r32-1", t("Auburn", 1), 82, t("Creighton", 9), 70, 1),
    finalG("s-r32-2", t("Michigan", 5), 69, t("Texas A&M", 4), 65, 1),
    finalG("s-r32-3", t("Ole Miss", 6), 91, t("Iowa State", 3), 87, 1),
    finalG("s-r32-4", t("Marquette", 7), 63, t("Michigan St", 2), 60, 1),
  ],
  [
    finalG("s-s16-1", t("Auburn", 1), 78, t("Michigan", 5), 65, 1),
    finalG("s-s16-2", t("Ole Miss", 6), 73, t("Marquette", 7), 72, 1),
  ],
  finalG("s-e8", t("Auburn", 1), 78, t("Ole Miss", 6), 75, 1)
);

export const REGION_2025_WEST = region(
  "WEST",
  "West",
  [
    finalG("w-r64-1", t("Florida", 1), 95, t("Norfolk St", 16), 69, 1),
    finalG("w-r64-2", t("UConn", 8), 97, t("Oklahoma", 9), 76, 1),
    finalG("w-r64-3", t("Memphis", 5), 70, t("Colorado St", 12), 68, 1),
    finalG("w-r64-4", t("Maryland", 4), 81, t("Grand Canyon", 13), 49, 1),
    finalG("w-r64-5", t("Missouri", 6), 81, t("Drake", 11), 70, 1),
    finalG("w-r64-6", t("Texas Tech", 3), 82, t("UNC Wilmington", 14), 62, 1),
    finalG("w-r64-7", t("Kansas", 7), 72, t("Arkansas", 10), 79, 2),
    finalG("w-r64-8", t("St John's", 2), 86, t("Omaha", 15), 70, 1),
  ],
  [
    finalG("w-r32-1", t("Florida", 1), 77, t("UConn", 8), 75, 1),
    finalG("w-r32-2", t("Memphis", 5), 71, t("Maryland", 4), 77, 2),
    finalG("w-r32-3", t("Missouri", 6), 83, t("Texas Tech", 3), 98, 2),
    finalG("w-r32-4", t("St John's", 2), 66, t("Arkansas", 10), 75, 2),
  ],
  [
    finalG("w-s16-1", t("Florida", 1), 87, t("Maryland", 4), 71, 1),
    finalG("w-s16-2", t("Texas Tech", 3), 85, t("Arkansas", 10), 78, 1),
  ],
  finalG("w-e8", t("Florida", 1), 84, t("Texas Tech", 3), 79, 1)
);

export const REGION_2025_EAST = region(
  "EAST",
  "East",
  [
    finalG("e-r64-1", t("Duke", 1), 93, t("American", 16), 61, 1),
    finalG("e-r64-2", t("Mississippi St", 8), 50, t("Baylor", 9), 56, 2),
    finalG("e-r64-3", t("Oregon", 5), 79, t("Liberty", 12), 73, 1),
    finalG("e-r64-4", t("Arizona", 4), 85, t("Akron", 13), 65, 1),
    finalG("e-r64-5", t("VCU", 11), 80, t("BYU", 6), 76, 1),
    finalG("e-r64-6", t("Wisconsin", 3), 85, t("Montana", 14), 61, 1),
    finalG("e-r64-7", t("Saint Mary's", 7), 76, t("Vanderbilt", 10), 75, 1),
    finalG("e-r64-8", t("Alabama", 2), 83, t("Robert Morris", 15), 63, 1),
  ],
  [
    finalG("e-r32-1", t("Duke", 1), 89, t("Baylor", 9), 77, 1),
    finalG("e-r32-2", t("Arizona", 4), 87, t("Oregon", 5), 83, 1),
    finalG("e-r32-3", t("Wisconsin", 3), 62, t("VCU", 11), 58, 1),
    finalG("e-r32-4", t("Alabama", 2), 80, t("Saint Mary's", 7), 66, 1),
  ],
  [
    finalG("e-s16-1", t("Duke", 1), 100, t("Arizona", 4), 93, 1),
    finalG("e-s16-2", t("Alabama", 2), 93, t("Wisconsin", 3), 85, 1),
  ],
  finalG("e-e8", t("Duke", 1), 85, t("Alabama", 2), 65, 1)
);

export const REGION_2025_MIDWEST = region(
  "MIDWEST",
  "Midwest",
  [
    finalG("m-r64-1", t("Houston", 1), 62, t("SIUE", 16), 41, 1),
    finalG("m-r64-2", t("Gonzaga", 8), 89, t("Georgia", 9), 68, 1),
    finalG("m-r64-3", t("McNeese", 12), 69, t("Clemson", 5), 57, 1),
    finalG("m-r64-4", t("Purdue", 4), 75, t("High Point", 13), 63, 1),
    finalG("m-r64-5", t("Illinois", 6), 80, t("Texas", 11), 86, 2),
    finalG("m-r64-6", t("Kentucky", 3), 76, t("Troy", 14), 57, 1),
    finalG("m-r64-7", t("UCLA", 7), 76, t("Utah State", 10), 72, 1),
    finalG("m-r64-8", t("Tennessee", 2), 69, t("Wofford", 15), 49, 1),
  ],
  [
    finalG("m-r32-1", t("Houston", 1), 81, t("Gonzaga", 8), 42, 1),
    finalG("m-r32-2", t("Purdue", 4), 76, t("McNeese", 12), 62, 1),
    finalG("m-r32-3", t("Kentucky", 3), 93, t("Texas", 11), 80, 1),
    finalG("m-r32-4", t("Tennessee", 2), 65, t("UCLA", 7), 58, 1),
  ],
  [
    finalG("m-s16-1", t("Houston", 1), 62, t("Purdue", 4), 45, 1),
    finalG("m-s16-2", t("Tennessee", 2), 78, t("Kentucky", 3), 65, 1),
  ],
  finalG("m-e8", t("Houston", 1), 69, t("Tennessee", 2), 50, 1)
);

export const FINAL_FOUR_2025_LEFT = finalG(
  "ff-2025-l",
  t("Auburn", 1),
  65,
  t("Florida", 1),
  79,
  2
);

export const FINAL_FOUR_2025_RIGHT = finalG(
  "ff-2025-r",
  t("Duke", 1),
  67,
  t("Houston", 1),
  69,
  2
);

export const CHAMPIONSHIP_2025 = finalG(
  "champ-2025",
  t("Florida", 1),
  65,
  t("Houston", 1),
  63,
  1
);
