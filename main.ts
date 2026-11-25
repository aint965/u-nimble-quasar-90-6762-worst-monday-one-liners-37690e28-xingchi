import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: my deploy failed, my rollback failed, and the stand-up that should have been a message lasted longer than my uptime.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
