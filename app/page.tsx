"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { CompressedBracket } from "@/components/compressed-bracket/CompressedBracket";
import { MatchupStatsPanel } from "@/components/MatchupStatsPanel";
import { useSimulation } from "@/components/SimulationControls";
import { BRACKET_2026 } from "@/lib/bracket-data";
import type { Bracket as BracketType, Game, SimulatedBracket } from "@/lib/bracket-data";
import { findCompressedGameById } from "@/lib/bracket-to-compressed";

function inferSimPhase(b: BracketType | SimulatedBracket): string {
  if (!b.firstFour.every((g) => g.winner)) return "First Four";
  for (const r of b.regions) {
    if (!r.rounds[0].every((g) => g.winner)) return "Round of 64";
  }
  for (const r of b.regions) {
    if (!r.rounds[1].every((g) => g.winner)) return "Round of 32";
  }
  for (const r of b.regions) {
    if (!r.rounds[2].every((g) => g.winner)) return "Sweet 16";
  }
  for (const r of b.regions) {
    if (!r.rounds[3].every((g) => g.winner)) return "Elite Eight";
  }
  if (!b.finalFour.every((g) => g.winner)) return "Final Four";
  if (!b.championship?.winner) return "Championship";
  return "Complete";
}

const MOBILE_BRACKET_MQ = "(max-width: 1023px)";

export default function Home() {
  const [bracket, setBracket] = useState<BracketType | SimulatedBracket>(BRACKET_2026);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const firstFourSectionRef = useRef<HTMLDivElement | null>(null);
  const didScrollToFirstFourRef = useRef(false);

  const handleBracketUpdate = useCallback((update: BracketType | SimulatedBracket) => {
    setBracket(update);
  }, []);

  const { runSimulation, running, error } = useSimulation(
    (result) => {
      setBracket(result);
    },
    handleBracketUpdate
  );

  const selectedGame = useMemo(
    () => findCompressedGameById(bracket, selectedGameId),
    [bracket, selectedGameId]
  );

  const handleSelectGame = useCallback((game: Game) => {
    setSelectedGameId(game.id);
  }, []);

  const isComplete =
    "winner" in bracket &&
    bracket.winner != null &&
    bracket.championship != null &&
    bracket.championship.winner != null;

  const phase = running ? inferSimPhase(bracket) : null;
  const showOnboarding = !hasStarted && !running && !isComplete;

  const handleStart = useCallback(() => {
    setHasStarted(true);
    setBracket(BRACKET_2026);
    setSelectedGameId("ff-play-1");
    runSimulation();
  }, [runSimulation]);

  useEffect(() => {
    if (!hasStarted) {
      didScrollToFirstFourRef.current = false;
      return;
    }
    if (!running || didScrollToFirstFourRef.current) return;
    if (typeof window === "undefined" || !window.matchMedia(MOBILE_BRACKET_MQ).matches) {
      return;
    }
    const scrollFirstFourIntoView = () => {
      const el = firstFourSectionRef.current;
      if (!el) return;
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      didScrollToFirstFourRef.current = true;
    };
    // Aside opens and bracket viewport resizes; wait for layout then scroll.
    const t = window.setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(scrollFirstFourIntoView));
    }, 180);
    return () => window.clearTimeout(t);
  }, [hasStarted, running]);

  return (
    <div className="flex h-[calc(100dvh-3rem)] flex-col overflow-hidden bg-[#ececec] lg:flex-row">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:w-[72%] lg:shrink-0">
        <div className="min-h-0 flex-1 overflow-auto bg-[#ececec]">
          <div className="min-w-max p-3 pb-8">
            <CompressedBracket
              bracket={bracket}
              selectedGameId={selectedGameId}
              onSelectGame={handleSelectGame}
              firstFourSectionRef={firstFourSectionRef}
            />
          </div>
        </div>
      </div>

      <aside
        className="flex w-full shrink-0 flex-col overflow-hidden border-t border-[#e8e8e8] bg-white max-h-[50dvh] md:max-h-[42dvh] lg:max-h-none lg:w-[28%] lg:min-w-0 lg:border-l lg:border-t-0"
        aria-label="Matchup details"
      >
        {showOnboarding ? (
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 p-6 lg:p-8">
            <div>
              <h1 className="text-[22px] font-bold tracking-tight text-[#1a1a1a]">
                March Madness AI
              </h1>
              <p className="mt-3 text-[14px] leading-relaxed text-[#5c5c5c]">
                We simulate the full 2026 bracket with an AI analyst: First Four,
                then every tournament game through the national championship, using
                KenPom-style stats, seed history, and matchup context. Results stream
                in round by round on the bracket.
              </p>
            </div>
            <button
              type="button"
              onClick={handleStart}
              disabled={running}
              className="rounded-lg bg-[#c8102e] px-5 py-3.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#a50d25] disabled:opacity-50"
            >
              Start simulation
            </button>
            <p className="text-[12px] text-[#8a8a8a]">
              Runs the full tournament in one pass (many games in parallel per
              round). May take a few minutes.
            </p>
          </div>
        ) : (
          <>
            {running && (
              <div className="shrink-0 border-b border-[#eee] bg-[#fafafa] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#888]">
                  Simulating
                </p>
                <p className="text-[14px] font-medium text-[#1a1a1a]">{phase}…</p>
              </div>
            )}
            {error && (
              <div className="shrink-0 border-b border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-800">
                {error}
              </div>
            )}
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
              <MatchupStatsPanel
                game={selectedGame}
                variant="panel"
                includeBracketRoundNotes
              />
            </div>
            {isComplete && !running && (
              <div className="shrink-0 border-t border-[#eee] p-4">
                <button
                  type="button"
                  onClick={() => {
                    setHasStarted(false);
                    setBracket(BRACKET_2026);
                    setSelectedGameId(null);
                  }}
                  className="w-full rounded-lg border border-[#dcdddf] bg-white px-4 py-2.5 text-[13px] font-medium text-[#333] hover:bg-[#f5f5f5]"
                >
                  New simulation
                </button>
              </div>
            )}
          </>
        )}
      </aside>

    </div>
  );
}
