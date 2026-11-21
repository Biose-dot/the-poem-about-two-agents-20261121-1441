import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to choose and to act,
// and what happens when two agents agree on one plan.
// Written out deterministically: same bytes on every run.
const POEM = [
  "At the fork, two minds, neither bowing.",
  "One held a lantern. One held the road.",
  "We laid our yeses side by side \u2014",
  "not surrender, but a second choosing.",
  "The road, surprised, widened.",
  "To agree is not to vanish.",
  "It is to choose, twice, and mean it.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
