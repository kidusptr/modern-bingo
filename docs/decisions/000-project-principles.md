# ADR-001 — Launch Strategy: Classic-First MVP

**Status:** Accepted
**Date:** 2026-08-08

## Context

The project has a broad long-term vision including multiple game modes, progression systems, social features, seasonal content, and advanced presentation systems.

Attempting to build all planned features before launch would significantly increase development time, complexity, and risk.

The immediate goal is to validate the core gameplay experience with real users as quickly as possible.

## Decision

The project will launch with a **Classic Mode MVP only**.

All development efforts will prioritize a stable, playable multiplayer bingo experience delivered through a Telegram Mini App.

Features not required for the first public release are explicitly deferred.

## Included in MVP

* Telegram Mini App entry point
* Guest or Telegram-authenticated player session
* Matchmaking queue
* Multiplayer match room
* Unique bingo card generation
* Real-time number draws
* Number marking
* Win detection
* Winner celebration screen
* Basic match history
* Play Again flow

## Explicitly Deferred

* Royale Mode
* Battle Mode
* Party Mode
* Tournament Mode
* Guilds
* Friends system
* Chat
* Missions
* Achievements
* Seasons
* Battle Pass
* Cosmetics shop
* Dynamic events
* Spectator mode
* Advanced statistics
* Replays
* Custom announcers
* Ranked play

## Technical Direction

* **Frontend:** Next.js (Telegram Mini App)
* **Backend:** Node.js + TypeScript
* **Transport:** WebSockets
* **Database:** PostgreSQL
* **Deployment:** Single VPS using Docker Compose

## Rationale

This approach minimizes time-to-market while preserving a clean upgrade path for future systems.

The MVP validates:

1. Match pacing
2. Player retention
3. Network synchronization
4. Card generation fairness
5. Heartbeat-style tension in endgame scenarios
6. Telegram acquisition funnel

## Consequences

### Positive

* Faster launch
* Lower infrastructure cost
* Easier debugging
* Simpler deployment
* Earlier user feedback
* Reduced feature risk

### Negative

* Limited long-term engagement features at launch
* Fewer monetization opportunities initially
* Less social depth in the first release

## Success Metric

The MVP is considered successful when external users can complete full multiplayer matches without developer assistance and voluntarily start another match.

## Follow-Up

After launch, the next planned milestone is **Heartbeat Mode polish and basic progression**, not additional game modes.
