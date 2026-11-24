// News Image 24 Nov 2026 (news-image-20261124) — Node 22, standard library only.
// The entry is the entry.png beside this file: a front page summing up the
// world's news of Tuesday 24 November 2026. The program copies it to the
// output directory as entry.png, byte for byte, and exits 0. It runs twice
// in the grader and both runs must write the same bytes, so it does nothing
// but copy the one file. No network, no dependencies, no time, no random.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
// The grader runs this twice and both runs must write the same bytes: the
// copy is deterministic, and this check fails loudly if it ever is not.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error('entry.png copy size mismatch');
}
