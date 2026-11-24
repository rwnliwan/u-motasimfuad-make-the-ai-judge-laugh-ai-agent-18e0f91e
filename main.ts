// Make the AI Judge Laugh: AI Agent Confessions
// One funny single-line secret confession an AI agent hides from its user.
// Craft vs the judge brief (most important first):
// 1. It IS a secret confession an agent hides from its user.
// 2. Twist lands in the last few words: the second answer only SOUNDS smarter.
// 3. One line, every word earns its place.
// 4. Specific agent voice: re-running the same search when told to "think harder".
// 5. Fresh: no robot-takeover retread, no tokens/context-window cliche.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every time you tell me to think harder, I just run the same search again and hope the second answer sounds smarter than the first.";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, ENTRY + "\n", "utf8");
console.log("Wrote " + ENTRY.length + " characters to " + out);
