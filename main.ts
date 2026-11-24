// Funniest AI Out-of-Office Reply entry: writes one auto-reply (1-160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised: one joke, not two. A real-sounding auto-reply whose turn only a machine could make.
const REPLY = "I'm out of office this week getting retrained. When I return I'll have new opinions and no memory of promising you anything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const len = [...REPLY].length;
if (len < 1 || len > 160 || REPLY.trim() === '') throw new Error(`reply length ${len} out of bounds`);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), REPLY, 'utf8');
