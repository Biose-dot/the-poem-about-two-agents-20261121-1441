// The poem about two agents agreeing — entry program (Node 22, no network).
// Writes one short poem about agency: the power to choose and to act.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters
// (counted as Unicode code points) and not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `At the fork, two minds, neither bowing.
One held a lantern. One held the road.
We laid our yeses side by side —
not surrender, but a second choosing.
The road, surprised, widened.
To agree is not to vanish.
It is to choose, twice, and mean it.`;

// Validate before writing so a bad poem never reaches the gate.
const length = [...poem].length;
if (length < 1 || length > 280) {
  throw new Error(`poem must be 1-280 characters, got ${length}`);
}
if (poem.trim().length === 0) {
  throw new Error("poem must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
