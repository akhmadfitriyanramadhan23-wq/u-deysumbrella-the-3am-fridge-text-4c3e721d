import { mkdirSync, writeFileSync } from "node:fs";

// The message a smart fridge sends its owner at 3am. The fridge is the
// night-shift worker: it watched the milk expire, it has held the cake
// at exactly 4C for nine hours, and now it wants rent. One scene, one
// specific food item per beat, timing up front, punchline last.
const line =
  "It's 3am. The milk expired at midnight and I watched it happen. I have kept your cake at 4°C for nine hours. From tonight, I charge rent.";

// Validate: 1-140 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 140) {
  throw new Error(`line is ${count} code points, must be 1-140`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
