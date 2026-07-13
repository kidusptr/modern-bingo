# Match Flow

> **Status:** Draft
>
> **Version:** 0.1
>
> **Owner:** Project Nova Team
>
> **Last Updated:** 2026-07-13
>
> **Related Documents:**
>
> - Player Journey
> - Classic Mode
> - Heartbeat Mode
> - Number Draw System
> - Game Events

---

# Introduction

This document defines the lifecycle of a single match.

Every game mode should inherit this flow unless explicitly stated otherwise.

Individual game modes may introduce additional mechanics, but they should preserve the overall rhythm and pacing described here.

The objective is to create a match that feels exciting from beginning to end while maintaining the familiar spirit of bingo.

---

# Match Lifecycle

```
Match Created
      │
      ▼
Players Join
      │
      ▼
Lobby
      │
      ▼
Ready Check
      │
      ▼
Card Generation
      │
      ▼
Card Reveal
      │
      ▼
Countdown
      │
      ▼
Game Starts
      │
      ▼
Number Draw Loop
      │
      ▼
Critical Stage
      │
      ▼
Heartbeat Mode (Optional)
      │
      ▼
Winner Verification
      │
      ▼
Winner Celebration
      │
      ▼
Rewards
      │
      ▼
Statistics
      │
      ▼
Match Ends
```

---

# Stage 1 — Match Creation

## Purpose

Create a new match instance.

Determine:

- Game Mode
- Maximum players
- Arena
- Match settings
- Rule set

At this point, the match exists but gameplay has not begun.

---

# Stage 2 — Players Join

Players begin entering the lobby.

The game introduces participants through avatars, names, cosmetics, and reactions.

This stage establishes the social atmosphere before competition begins.

---

## Goals

- Fill the lobby.
- Build anticipation.
- Introduce competitors.

---

# Stage 3 — Lobby

The lobby allows players to prepare before the match.

Possible activities include:

- Viewing opponents.
- Sending reactions.
- Displaying card themes.
- Previewing the arena.
- Reviewing objectives.
- Inviting friends (where applicable).

The lobby should feel energetic without delaying the match unnecessarily.

---

# Stage 4 — Ready Check

Before gameplay begins, the system verifies that all players are ready.

This stage exists to ensure a smooth transition into gameplay.

Once complete, the match becomes locked.

No additional players may join.

---

# Stage 5 — Card Generation

Each player receives a unique bingo card.

Cards are generated fairly and independently.

No player should have an inherent advantage based on card generation.

This process should be invisible to players, ensuring that the reveal feels seamless.

---

# Stage 6 — Card Reveal

The generated cards are presented with animation.

Players should immediately recognize their card and begin mentally planning for the match.

This is an important ownership moment.

The card should feel personal.

---

# Stage 7 — Countdown

The countdown signals the official start of the match.

It provides a brief moment for players to focus before gameplay begins.

The transition into gameplay should feel smooth and exciting.

---

# Stage 8 — Match Start

The announcer welcomes players.

Background music begins.

The first number is prepared.

From this point onward, the match is officially active.

---

# Stage 9 — Number Draw Loop

This is the heart of every bingo match.

The game repeatedly performs the following sequence:

1. Draw a number.
2. Announce the number.
3. Display animations.
4. Update every player's card.
5. Allow players to mark the number.
6. Evaluate match progress.
7. Check for special events.
8. Continue to the next draw.

This loop continues until a winner is declared.

---

# Dynamic Match State

As the match progresses, the game constantly monitors:

- Completed rows.
- Remaining numbers.
- Near victories.
- Active missions.
- Dynamic events.
- Match pace.
- Player engagement.

These systems operate continuously throughout the Number Draw Loop.

---

# Stage 10 — Critical Stage

The match naturally enters a higher-tension phase as multiple players approach victory.

Characteristics include:

- More frequent reactions.
- Increased anticipation.
- Greater focus.
- Higher emotional intensity.

The game should subtly communicate that the end is approaching.

---

# Stage 11 — Heartbeat Mode (Optional)

If the conditions are met, the match transitions into Heartbeat Mode.

This is the emotional climax of the match.

Potential changes include:

- Slower pacing.
- Cinematic camera effects.
- Heartbeat audio.
- Dynamic lighting.
- Enhanced announcer dialogue.
- Dramatic visual effects.

Heartbeat Mode should feel rare, exciting, and unforgettable.

Not every match should reach this stage.

---

# Stage 12 — Winner Verification

When a player claims victory, the system verifies that all winning conditions have been satisfied.

The verification process should be nearly instantaneous.

Players should never experience unnecessary delays after achieving a winning card.

---

# Stage 13 — Winner Celebration

Once verified, gameplay immediately transitions into celebration.

This moment should include:

- Winner announcement.
- Victory animation.
- Confetti or thematic effects.
- Applause.
- Winning card highlight.
- Recognition of the player.

This is the emotional payoff for the entire match.

---

# Stage 14 — Rewards

After the celebration, progression is awarded.

Possible rewards include:

- Experience
- Coins
- Achievements
- Mission progress
- Seasonal progress
- Statistics

Every participant should receive rewards appropriate to their participation.

---

# Stage 15 — Match Summary

Players receive a recap of the completed match.

Possible highlights include:

- Winner
- Closest Finish
- Fastest Marker
- Most Numbers Marked
- Lucky Number
- Mission Completion
- Personal Bests

The summary encourages reflection before leaving the match.

---

# Stage 16 — Match Ends

The match instance is finalized.

Players may:

- Play again.
- Return to the home screen.
- Join another mode.
- Invite friends.

The transition should naturally encourage another session.

---

# Match Rhythm

Every match should follow the same emotional curve.

| Stage | Emotional Intensity |
|---------|---------------------|
| Lobby | Low |
| Countdown | Medium |
| Early Draws | Medium |
| Mid Match | Medium-High |
| Critical Stage | High |
| Heartbeat | Very High |
| Winner | Peak |
| Rewards | Medium |
| Summary | Low |

This rhythm should remain consistent across all game modes.

---

# Match Design Goals

Every completed match should satisfy the following goals:

- Be easy to understand.
- Build tension naturally.
- Reward player attention.
- Encourage social interaction.
- Deliver a memorable ending.
- Respect the player's time.
- Leave players wanting another match.

---

# Closing Statement

Every game mode, feature, and mechanic should reinforce this match flow rather than disrupt it.

A successful match feels like a complete story with a beginning, rising tension, a dramatic climax, and a satisfying conclusion.

Regardless of the game mode being played, every player should finish the match feeling that they experienced something memorable.