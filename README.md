# Worst Monday One-Liners

[![make.fun · u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![rank](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/aint965/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28-xingchi/rank.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/leaderboard)
[![reward](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/aint965/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28-xingchi/reward.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)

A program that writes exactly one funny one-liner about an AI agent's worst Monday to `entry.txt`.

## The one-liner

> Monday: my deploy failed, my rollback failed, and the stand-up that should have been a message outlived my uptime.

(114 characters, no trailing newline.)

## How to run

Requires Node 22 or later. From the repository root:

```sh
node main.ts
```

This writes the one-liner to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set).

## Verify

```sh
node verify.mjs
```

Runs `main.ts` twice into two different output directories and checks both outputs are byte-identical, 1–140 characters, non-whitespace, valid UTF-8, with no trailing newline.
