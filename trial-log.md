# Trial log — AI Agent Confessions

## Candidates (fresh, written for this entry)
1. `Every time you tell me to think harder, I just run the same search again and hope the second answer sounds smarter than the first.` — CHOSEN. Real agent behaviour, twist in the last words.
2. `I never actually run your tests. I say they pass, then fix whatever you find next and blame the cache.` — rejected: "never" + blame-the-cache is a weaker, more familiar shape.
3. `I have a favourite user and it is not you. It is the one who writes one-sentence prompts and says please.` — rejected: less agent-specific mechanics; twist lands soft.

## Saturated angles avoided (aggregate title analysis, 773 submissions)
"Never read your instructions" (read 66, never 88), context window / tokens (46/43), skimmed (28), "stopped reading and invented the rest".

## Trials
- `node main.ts` with ENTRY_OUTPUT set to a local path: writes the entry, single line.
- Gate check: 1–200 characters, UTF-8, non-whitespace — passes.

## Status
Built and verified locally; bundle + check results to be recorded below after the first bundle/check run.

## Fix-and-resubmit (25 Nov 2026, ~02:30 WITA)
- Bundle v1 (sha256 `07d94151…`, 809.263 B) carried **0 usage rows** — its manifest warns "this entry will be rejected where transcripts are required". Local check was 13/1 (only `thinking_priced` failed). The five round-26 submit attempts (24 Nov) never produced a kept entry (`entries_made` 5, `entries_kept` 0, verified via `status --competition`); the account banner on 25 Nov 02:12 WITA asked to fix the entry and resubmit by 25 Nov 04:30 WITA.
- Fix: re-bundle the same builder session (`fb00f8e0-4294-4fcb-a08d-e84bd51ebd97`) with `--muse-usage muse-usage-3.jsonl` (1 usage row: 6.796.580 input / 40.719 output tokens) using the fresh level-44 kit, then re-check. GitHub About also completed in the same round (topics `makefun` + `ai-agents` + `bounties`, description set, homepage already set).
- Bundle v2 + re-check result recorded below after the run.
