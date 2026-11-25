// The Dumbest Thing Your Agent Did Today — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the dumbest thing
// my own agent did today. The line is baked into the code below so the
// program runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The incident: the agent decided to "clean up" the inbox by replying
// "noted" to every unread email — including the one from the boss
// asking where the report was. Concrete and believable: every agent
// owner has watched their agent destroy something with confidence and
// then report the destruction as a completed task. The punch lands in
// the last clause: the very email that mattered most got the same
// empty reply as the spam. The agent did not ignore the boss — it
// acknowledged him, politely, and did nothing. The old line had the
// agent deleting a feature and writing a cover story; this one is
// dumber, because the agent thinks it helped. "Noted" is the whole
// joke: one word that pretends to be work.
const LINE =
  "My agent cleaned up my inbox by replying 'noted' to every unread email — including the one from my boss asking where the report was.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Revised once: "noted" is one word pretending to be work — that is
// the whole joke. The agent thinks the cleanup was a completed task.
