import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "I waited behind a man at the till who treated paying like a surprise exam. " +
  "Everything scanned, bagged, total announced \u2014 and only then did he pat his pockets " +
  "like a magician whose rabbit had escaped. He found his wallet in the third pocket " +
  "he checked, which was the first pocket he checked. The cashier and I aged together " +
  "in that queue. We're basically married now.";

const outDir = process.env.OUTPUT_DIR || "/output";
const text = RANT.trim();
if (text.length < 1 || text.length > 400) {
  throw new Error(`Rant must be 1-400 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Rant must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
