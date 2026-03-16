import type { Bracket, Game, Region, RegionName, SimulatedGame, Team } from "@/lib/bracket-data";
import { placeholderGame } from "@/lib/bracket-data";

// Maps First Four game index to (regionIndex, round0GameIndex, teamSlot)
/** Order matches `BRACKET_2026.firstFour` indices (NCAA.com 2026). */
export const FIRST_FOUR_SLOTS: Array<{ region: number; gameIndex: number; slot: 1 | 2 }> = [
  { region: 0, gameIndex: 0, slot: 2 }, // UMBC/Howard -> South (Florida opponent)
  { region: 3, gameIndex: 4, slot: 2 }, // Texas/NC State -> Midwest (Tennessee opponent)
  { region: 3, gameIndex: 0, slot: 2 }, // Prairie View/Lehigh -> Midwest (Michigan opponent)
  { region: 2, gameIndex: 4, slot: 2 }, // Miami OH/SMU -> West (BYU opponent)
];

// Simulation stages for region-by-region flow
export type SimulationStage =
  | "first-four"
  | "south"
  | "east"
  | "west"
  | "midwest"
  | "finals";

// Order of stages for navigation
export const STAGE_ORDER: SimulationStage[] = [
  "first-four",
  "south",
  "east",
  "west",
  "midwest",
  "finals",
];

// Map region names to stages
export const REGION_TO_STAGE: Record<RegionName, SimulationStage> = {
  SOUTH: "south",
  EAST: "east",
  WEST: "west",
  MIDWEST: "midwest",
};

// Map stages to region names (for region stages only)
export const STAGE_TO_REGION: Partial<Record<SimulationStage, RegionName>> = {
  south: "SOUTH",
  east: "EAST",
  west: "WEST",
  midwest: "MIDWEST",
};

export type SimulationProgress = Bracket & {
  winner?: Team;
  currentStage?: SimulationStage;
  completedStages?: SimulationStage[];
};

export function buildProgressUpdate(
  bracket: Bracket,
  firstFourDisplay: Game[],
  allRegionRounds: (SimulatedGame[][] | Game[][])[],
  finalFourResults?: SimulatedGame[],
  championshipResult?: SimulatedGame,
  winner?: Team,
  currentStage?: SimulationStage,
  completedStages?: SimulationStage[]
): SimulationProgress {
  const regions: Region[] = bracket.regions.map((region, i) => {
    const completedRounds: Game[][] = allRegionRounds.map((rounds) => rounds[i]);
    const placeholderRounds: Game[][] = region.rounds.slice(completedRounds.length).map((round) =>
      round.map((g) => placeholderGame(g.id))
    );
    return {
      ...region,
      rounds: [...completedRounds, ...placeholderRounds],
    };
  });

  const result: SimulationProgress = {
    year: bracket.year,
    schedule: bracket.schedule,
    firstFour: firstFourDisplay,
    regions,
    finalFour: finalFourResults ?? [
      placeholderGame("ff-south-west"),
      placeholderGame("ff-east-midwest"),
    ],
    championship: championshipResult ?? placeholderGame("champ"),
  };
  if (winner) {
    result.winner = winner;
  }
  if (currentStage) {
    result.currentStage = currentStage;
  }
  if (completedStages) {
    result.completedStages = completedStages;
  }
  return result;
}

/**
 * Build a region-specific progress update for streaming region-by-region
 */
export function buildRegionProgressUpdate(
  bracket: Bracket,
  firstFourDisplay: Game[],
  regionResults: Map<RegionName, SimulatedGame[][]>,
  finalFourResults?: SimulatedGame[],
  championshipResult?: SimulatedGame,
  winner?: Team,
  currentStage?: SimulationStage,
  completedStages?: SimulationStage[]
): SimulationProgress {
  const regions: Region[] = bracket.regions.map((region) => {
    const regionRounds = regionResults.get(region.name);
    if (!regionRounds) {
      return {
        ...region,
        rounds: region.rounds.map((round) =>
          round.map((g) => placeholderGame(g.id))
        ),
      };
    }
    const completedRounds: Game[][] = regionRounds;
    const placeholderRounds: Game[][] = region.rounds.slice(completedRounds.length).map((round) =>
      round.map((g) => placeholderGame(g.id))
    );
    return {
      ...region,
      rounds: [...completedRounds, ...placeholderRounds],
    };
  });

  const result: SimulationProgress = {
    year: bracket.year,
    schedule: bracket.schedule,
    firstFour: firstFourDisplay,
    regions,
    finalFour: finalFourResults ?? [
      placeholderGame("ff-south-west"),
      placeholderGame("ff-east-midwest"),
    ],
    championship: championshipResult ?? placeholderGame("champ"),
  };
  if (winner) {
    result.winner = winner;
  }
  if (currentStage) {
    result.currentStage = currentStage;
  }
  if (completedStages) {
    result.completedStages = completedStages;
  }
  return result;
}

/** Placeholder rounds from `startRound` onward (inclusive). */
export function placeholderRoundsFrom(
  region: Region,
  startRound: number
): Game[][] {
  return region.rounds.slice(startRound).map((round) =>
    round.map((g) => placeholderGame(g.id))
  );
}

/** Stream payload: explicit rounds (scheduled / in_progress / final), not all TBD. */
export function buildWorkflowStreamPayload(
  bracket: Bracket,
  firstFourDisplay: Game[],
  regionRounds: Game[][][],
  finalFourGames: Game[],
  championshipGame: Game,
  currentStage?: SimulationStage,
  completedStages?: SimulationStage[]
): SimulationProgress {
  const regions: Region[] = bracket.regions.map((region, ri) => ({
    ...region,
    rounds: regionRounds[ri],
  }));
  const result: SimulationProgress = {
    year: bracket.year,
    schedule: bracket.schedule,
    firstFour: firstFourDisplay,
    regions,
    finalFour: finalFourGames,
    championship: championshipGame,
  };
  if (currentStage) result.currentStage = currentStage;
  if (completedStages) result.completedStages = completedStages;
  return result;
}
