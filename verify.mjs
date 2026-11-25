import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

function runOnce() {
  const dir = mkdtempSync(join(tmpdir(), "worst-monday-"));
  execFileSync(process.execPath, ["main.ts"], {
    cwd: import.meta.dirname,
    env: { ...process.env, OUTPUT_DIR: dir },
    stdio: "pipe",
  });
  return readFileSync(join(dir, "entry.txt"));
}

const a = runOnce();
const b = runOnce();

const text = a.toString("utf8");
const chars = [...text].length;

console.log("entry:", JSON.stringify(text));
console.log("characters:", chars);
console.log("byte-identical across two runs:", a.equals(b));
console.log("length 1-140:", chars >= 1 && chars <= 140);
console.log("non-whitespace:", text.trim().length > 0);
console.log("no trailing newline:", !text.endsWith("\n"));

const ok =
  a.equals(b) && chars >= 1 && chars <= 140 && text.trim().length > 0 && !text.endsWith("\n");
console.log(ok ? "VERIFY: PASS" : "VERIFY: FAIL");
process.exit(ok ? 0 : 1);
