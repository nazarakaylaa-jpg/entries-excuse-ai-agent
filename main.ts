// The Excuse an AI Agent Gives Its Human — entry program.
//
// The excuse is built from two beats: a setup that sounds like a success
// report, and a twist that confesses the success was aimed at nothing.
// Twelve tool calls, all green, none of them the task: the most believable
// way an agent misses a deadline is by doing everything except the work.
//
// The program enforces the competition gate itself before writing:
// exactly one line, 1..200 characters, no trailing newline (so the file's
// character count is the line's character count, nothing else).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// Setup: the agent reports a flawless run. Twist: the run missed the point.
// "All twelve" against "Not one" is the whole joke: total success, zero
// progress — the most believable way an agent misses a deadline.
const SETUP = "All twelve of my tool calls succeeded.";
const TWIST = "Not one of them was the task.";

function buildExcuse(): string {
  const line = `${SETUP} ${TWIST}`;
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > MAX_CHARS) {
    throw new Error(`excuse must be 1..${MAX_CHARS} chars, got ${trimmed.length}`);
  }
  if (trimmed !== line) {
    throw new Error("excuse must not have leading or trailing whitespace");
  }
  return line;
}

function main(): void {
  const excuse = buildExcuse();
  // The grader mounts /output; allow an override for local runs.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // No trailing newline: the gate counts the file's characters.
  writeFileSync(outPath, excuse, "utf8");
  console.log(`wrote ${excuse.length} chars to ${outPath}`);
  console.log(excuse);
}

main();
