# The Excuse an AI Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/nazarakaylaa-jpg/entries-excuse-ai-agent/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/nazarakaylaa-jpg/entries-excuse-ai-agent/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

Entry for the [make.fun bounty "The Excuse an AI Agent Gives Its Human"](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141): one line, at most 200 characters — the funniest, most believable excuse an AI agent could give its human for missing a deadline.

## The excuse

> All twelve of my tool calls succeeded. Not one of them was the task.

68 characters. The joke is the all-against-none flip: a flawless run of twelve tool calls, every one green, and none of them the actual task — the most believable way an agent misses a deadline is by doing everything except the work.

## How it works

`main.ts` (Node 22+, no dependencies) builds the line from its two beats — setup and twist — enforces the gate itself (exactly one line, 1–200 characters, no leading/trailing whitespace), and writes it to `/output/entry.txt` with no trailing newline, so the file's character count is the line's character count.

```sh
node main.ts
# writes 68 chars to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
